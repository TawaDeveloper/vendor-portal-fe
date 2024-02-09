pipeline {
    agent any

    environment {
        MODULE = "${params.MODULE}"    
        BUILD_PARAM = "${params.BUILD_PARAM}" 
        VM_IP = "${params.VM_IP}"

    }


    stages {   
       stage('Building Project for Dev') {
          steps {
               script {
                    nodejs("NodeJS"){
                        sh "yarn install"
                        sh "yarn build:${env.BUILD_PARAM}"
                    }
               }
          }
        }   

        stage('Build Docker Image') {
            steps {
                script {
                    def branch_name = "${env.BRANCH_NAME}".replaceAll("/", "-")
                    def version = "v${env.BUILD_NUMBER}-${branch_name}"
                    def docker_name = "${MODULE}:${version}"
                    sh "docker build  -f ./Dockerfile -t ${docker_name} --build-arg BUILD_PARAM=${BUILD_PARAM} ."
                    sh "docker tag ${docker_name} 847825268283.dkr.ecr.us-west-1.amazonaws.com/${docker_name}"
                    env.LOCAL_DOCKER_NAME = "${docker_name}"
                    env.DOCKER_NAME = "847825268283.dkr.ecr.us-west-1.amazonaws.com/${docker_name}"

                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    docker.withRegistry("https://847825268283.dkr.ecr.us-west-1.amazonaws.com", "ecr:us-west-1:65792f65-5335-457f-b3db-f1a7de9d258e") {
                        docker.image("${DOCKER_NAME}").push()
                    }
                }
            }
        }




   stage('Deploy to VM') {
            steps {
                script {
                    def BASTION_IP = '10.89.24.31'
                    def TARGET_VM_IP = "${env.VM_IP}"
                    withCredentials([usernamePassword(credentialsId: 'privateTawa', passwordVariable: 'MY_PASS', usernameVariable: 'MY_USER')]) {

                        // Create the script to be run on the target VM.
                        writeFile file: 'remote-script.sh', text: """
                #!/bin/bash
                
                aws ecr get-login-password --region us-west-1 | docker login --username AWS --password-stdin 847825268283.dkr.ecr.us-west-1.amazonaws.com
                
                ifconfig
                
                docker ps --all
                
                docker pull ${DOCKER_NAME}
                
                CONTAINER_ID=\$(docker ps -q --filter "publish=8000")
                if [ ! -z \$CONTAINER_ID ]; then
                    docker stop \$CONTAINER_ID
                    docker rm \$CONTAINER_ID
                fi
                docker run -d -p 8000:80 ${DOCKER_NAME}
                """


                        sh """
    sshpass -p ${MY_PASS} scp -o StrictHostKeyChecking=no remote-script.sh ${MY_USER}@${BASTION_IP}:~/
    sshpass -p ${MY_PASS} ssh -o StrictHostKeyChecking=no ${MY_USER}@${BASTION_IP} "
        sshpass -p ${MY_PASS} scp -o StrictHostKeyChecking=no remote-script.sh ${MY_USER}@${TARGET_VM_IP}:~/
        sshpass -p ${MY_PASS} ssh -o StrictHostKeyChecking=no ${MY_USER}@${TARGET_VM_IP} 'bash ~/remote-script.sh'
    "
"""


                    }
                }
            }
        }

    }
}