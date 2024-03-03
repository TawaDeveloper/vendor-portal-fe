import { Modal, Spin, Tree, message } from 'antd';
import { DataNode, TreeProps } from 'antd/lib/tree';
import Title from 'antd/lib/typography/Title';
import { t } from 'i18next';
import { uniq } from 'lodash-es';
import { useEffect, useRef, useState } from 'react';
import { bakeryAPI } from '@/services';
import usePermission from '@/hooks/usePermission';

const OptPermissionDialog = ({
  role,
  onCancel,
}: {
  role: defs.tawa.PageRoleResponse;
  onCancel: () => void;
}) => {
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedKeys, setCheckedKeys] = useState<any>({});
  const isCanUpdatePermission = usePermission(
    'component:Setting:Update Permissions',
  );
  const treeMap = useRef<any>(null);
  const generateTreeData = (
    parentId: any,
    datas: defs.bakery.PermissionVo[],
    nodeMap: any,
  ) => {
    const treeNodes: DataNode[] = [];
    for (let i = 0, l = datas.length; i < l; i++) {
      const data = datas[i];
      const node: DataNode = {
        title: data.name,
        key: Number(data.id),
        disableCheckbox: !isCanUpdatePermission,
      };
      nodeMap[node.key] = {
        data: node,
        parentId,
      };
      if (data.children && data.children?.length > 0) {
        node.children = generateTreeData(node.key, data.children, nodeMap);
      }
      if (!data.children || data.children.length === 0) {
        node.isLeaf = true;
      }
      treeNodes.push(node);
    }
    return treeNodes;
  };
  const isAllChecked = (node: DataNode, allCheckedKeys: any) => {
    if (allCheckedKeys.includes(node.key)) {
      if (node.children && node.children?.length > 0) {
        for (let i = 0, l = node.children.length; i < l; i++) {
          const checked = isAllChecked(node.children[i], allCheckedKeys);
          if (checked === false) {
            return false;
          }
        }
        return true;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const getAllChildNode = (node: DataNode, allChildNodes: any) => {
    if (node.children) {
      for (let i = 0, l = node.children.length; i < l; i++) {
        allChildNodes.push(node.children[i]);
        getAllChildNode(node.children[i], allChildNodes);
      }
    }
  };

  const getAllParentNode = (node: DataNode, allParentNodes: any) => {
    if (treeMap.current[node.key] && treeMap.current[node.key].parentId) {
      allParentNodes.push(
        treeMap.current[treeMap.current[node.key].parentId].data,
      );
      getAllParentNode(
        treeMap.current[treeMap.current[node.key].parentId].data,
        allParentNodes,
      );
    }
  };

  const initTreeData = async () => {
    setLoading(true);
    const nodeMap: any = {};
    const optPermissionOptionResponse =
      await bakeryAPI.permission.optPermissionOption.request();
    if (optPermissionOptionResponse.data) {
      setTreeData(
        generateTreeData(null, optPermissionOptionResponse.data, nodeMap),
      );
      treeMap.current = nodeMap;
    }

    const listOperationPermissionsResponse =
      await bakeryAPI.permission.listOperationPermissions.request({
        roleId: Number(role.id),
      });
    if (listOperationPermissionsResponse.data) {
      const checked = [];
      const halfChecked = [];
      const allCheckedKeys = listOperationPermissionsResponse.data;
      for (
        let i = 0, l = listOperationPermissionsResponse.data.length;
        i < l;
        i++
      ) {
        const key = listOperationPermissionsResponse.data[i];
        if (nodeMap[key]) {
          const isAllNodeChecked = isAllChecked(
            nodeMap[key].data,
            allCheckedKeys,
          );
          if (isAllNodeChecked) {
            checked.push(key);
          } else {
            halfChecked.push(key);
          }
        }
      }
      setCheckedKeys({ checked, halfChecked });
    }

    setLoading(false);
  };

  useEffect(() => {
    initTreeData();
  }, []);

  const save = async () => {
    setLoading(true);
    await bakeryAPI.permission.saveOperationPermissions.request({
      roleId: Number(role.id),
      referIds: checkedKeys.checked.concat(checkedKeys.halfChecked),
    });
    setLoading(false);
    message.success(t<string>('pages.common.operationSuccess'));
    onCancel();
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, event) => {
    setCheckedKeys((params: any) => {
      const newParams = { ...params };
      const allCheckedKeys = newParams.checked.concat(newParams.halfChecked);
      const childNodes: any = [];
      const parentNodes: any = [];
      getAllChildNode(event.node, childNodes);
      getAllParentNode(event.node, parentNodes);
      let newAllCheckedKeys;
      if (event.checked === true) {
        newAllCheckedKeys = uniq(
          allCheckedKeys
            .concat(childNodes.map((child: any) => child.key))
            .concat(parentNodes.map((child: any) => child.key))
            .concat(event.node.key),
        );
      } else {
        newAllCheckedKeys = uniq(
          allCheckedKeys.filter((item: any) => {
            return (
              !childNodes.map((child: any) => child.key).includes(item) &&
              item !== event.node.key
            );
          }),
        );
      }
      const checked = [];
      const halfChecked = [];
      for (let i = 0, l = newAllCheckedKeys.length; i < l; i++) {
        const key = newAllCheckedKeys[i];
        if (treeMap.current && treeMap.current[key as any]) {
          const isAllNodeChecked = isAllChecked(
            treeMap.current[key as any].data,
            newAllCheckedKeys,
          );
          if (isAllNodeChecked) {
            checked.push(key);
          } else {
            halfChecked.push(key);
          }
        }
      }
      return {
        checked,
        halfChecked,
      };
    });
  };

  return (
    <Modal
      title={t<string>('pages.rolePermissionSetting.optPermissionSetting')}
      open
      onCancel={onCancel}
      onOk={save}
      okButtonProps={{
        disabled: !isCanUpdatePermission,
      }}
    >
      <Spin spinning={loading}>
        <Title level={5}>
          {t<string>('pages.rolePermissionSetting.roleName')}: {role.name}
        </Title>
        <Tree
          treeData={treeData}
          checkable
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          checkStrictly
        />
      </Spin>
    </Modal>
  );
};

export default OptPermissionDialog;
