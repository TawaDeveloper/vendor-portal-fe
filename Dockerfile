# 使用Nginx作为基础镜像
FROM nginx:latest

# 将本地的nginx.conf复制到容器内的Nginx配置目录
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将前端静态文件复制到容器内的默认目录
COPY build/ /usr/share/nginx/html

# 暴露容器的80端口
EXPOSE 80

# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]