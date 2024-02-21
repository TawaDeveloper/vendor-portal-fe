import React, {useContext } from 'react';
import FlowBuilder, {
  NodeContext,
  INode,
  IRegisterNode,
} from 'react-flow-builder';

import styles from "./WorkflowGraphEditor.less";
import NodeAppTypeIcon from "src/assets/node_app_type.svg"
import NodeProductTypeIcon from "src/assets/node_product_type.svg"
import NodeReviewerIcon from "src/assets/node_reviewer.svg"
import { Drawer, Popconfirm, Popover } from 'antd';
import ConfigReviewer from './ConfigReviewer';

const StartNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div className={styles.startNode}>
      <div className={styles.nodeIcon}><img src={NodeAppTypeIcon} /></div>
      <div className={styles.nodeDesc}>
      <div className={styles.text1}>Vendor Application</div>
      <div className={styles.text2}>{node.data ? node.data.label : ""}</div>
      </div>
    </div>
  );
};

const ProductNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div className={styles.startNode}>
      <div className={styles.nodeIcon}><img src={NodeProductTypeIcon} /></div>
      <div className={styles.nodeDesc}>
      <div className={styles.text1}>Product Category</div>
      <div className={styles.text2}>{node.data ? node.data.label : ""}</div>
      </div>
    </div>
  );
};

const ReviewNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div className={styles.startNode}>
      <div className={styles.nodeIcon}><img src={NodeReviewerIcon} /></div>
      <div className={styles.nodeDesc}>
      <div className={styles.text1}>Reviewer</div>
      <div className={styles.text2}>{node && node.data ? node.data.userName: ""}</div>
      </div>
    </div>
  );
};

const EndNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className={styles.endNode}><div className={styles.endText}>{node.name}</div></div>;
};



const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition-node ${
        node.configuring ? 'node-configuring' : ''
      } ${node.validateStatusError ? 'node-status-error' : ''}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const registerNodes: IRegisterNode[] = [
  {
    type: 'start',
    name: '开始节点',
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: 'end',
    name: 'End',
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: 'product-node',
    name: '产品节点',
    displayComponent: ProductNodeDisplay,
    className: "product-node",
    isStart: true

  },
  {
    type: 'review-node',
    name: 'Add Reviewer',
    displayComponent: ReviewNodeDisplay,
    configComponent: ConfigReviewer
  },
  {
    type: 'condition',
    name: '条件节点',
    displayComponent: ConditionNodeDisplay,
  },
  {
    type: 'branch',
    name: 'Add If',
    conditionNodeType: 'condition',
  },

];

// const defaultNodes = [
//   {
//     id: 'node-0d9d4733-e48c-41fd-a41f-d93cc4718d97',
//     type: 'start',
//     name: 'Existing Vendor',
//     path: ['0'],
//   },
//   {
//     id: 'node-972401cb-c4db-4268-8780-5607876d8372',
//     type: 'product-node',
//     name: 'Meat',
//     path: ['1'],
//   },
//   // {
//   //   id: 'node-b2ffe834-c7c2-4f29-a370-305adc03c010',
//   //   type: 'branch',
//   //   name: '分支节点',
//   //   children: [
//   //     {
//   //       id: 'node-cf9c8f7e-26dd-446c-b3fa-b2406fc7821a',
//   //       type: 'condition',
//   //       name: '条件节点',
//   //       children: [
//   //         {
//   //           id: 'node-f227cd08-a503-48b7-babf-b4047fc9dfa5',
//   //           type: 'node',
//   //           name: '普通节点',
//   //           path: ['1', 'children', '0', 'children', '0'],
//   //         },
//   //       ],
//   //       path: ['1', 'children', '0'],
//   //     },
//   //     {
//   //       id: 'node-9d393627-24c0-469f-818a-319d9a678707',
//   //       type: 'condition',
//   //       name: '条件节点',
//   //       children: [],
//   //       path: ['1', 'children', '1'],
//   //     },
//   //   ],
//   //   path: ['2'],
//   // },
//   // {
//   //   id: 'node-972401ca-c4db-4268-8780-5607876d8372',
//   //   type: 'node',
//   //   name: '普通节点',
//   //   path: ['3'],
//   // },
//   {
//     id: 'node-b106675a-5148-4a2e-aa86-8e06abd692d1',
//     type: 'end',
//     name: 'End',
//     path: ['2'],
//   },
// ];
interface Props {
  nodes: INode[],
  onChange:  (nodes: INode[]) => void,
}
const WorkflowGraphEditor = ({nodes, onChange} : Props) => {
 // const [nodes, setNodes] = useState<INode[]>(defaultNodes);

  // const handleChange = (nodes: INode[]) => {
  //   console.log('nodes change', nodes);
  //   setNodes(nodes);
  // };

  return (
    <>
      <FlowBuilder
        nodes={nodes}
        onChange={onChange}
        registerNodes={registerNodes}
        lineColor={"#1D6E40"}
        DrawerComponent={Drawer}
        PopoverComponent={Popover}
        PopconfirmComponent={Popconfirm}
        showArrow={true}
      />
    </>
  );
};

export default WorkflowGraphEditor;