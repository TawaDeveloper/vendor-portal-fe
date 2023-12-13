import {
  Tabs,
  Card,
  Form,
  Input,
  DatePicker,
  Button,
  Table,
  notification,
  TableProps,
} from 'antd';
import './index.less';
import { useRef, useState } from 'react';
import { backofficeAPI } from '@/services';
import { TablePaginationConfig } from 'antd/es/table';

const { RangePicker } = DatePicker;
const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const VendorApprovals = () => {
  const [api, contextHolder] = notification.useNotification();
  console.log('api: ', api);
  const [data, setData] = useState<defs.backoffice.UserRole[]>([]);
  const [loading, setLoading] = useState(false);
  const userIdRef = useRef(0);
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);
  const fetchData = async (params: any) => {
    const {
      pagination: { current, pageSize },
    } = params;
    setLoading(true);
    const { data: results } =
      (await backofficeAPI.webUser.getRoleListPage.request({
        pageNum: current,
        pageSize,
        userId: userIdRef.current,
      })) ?? {};

    // @ts-ignore
    const { list, total } = results;
    setData(list);
    setLoading(false);
    setPagination({
      ...params.pagination,
      total,
    });
  };

  const onChange: TableProps<any>['onChange'] = (paginationProps) => {
    const { current, pageSize } = paginationProps;
    setPagination({ current, pageSize });

    fetchData({
      pagination: { current, pageSize },
    });
  };

  const getColumns = () => [
    {
      title: 'UPC',
      dataIndex: 'upc',
      align: 'center',
    },
    {
      title: 'Length(NCH)',
      dataIndex: 'length',
      align: 'center',
    },
    {
      title: 'Width(NCH)',
      dataIndex: 'upwidthc',
      align: 'center',
    },
    {
      title: 'Height(NCH)',
      dataIndex: 'uheightpc',
      align: 'center',
    },
    {
      title: 'Weight(NCH)',
      dataIndex: 'weight',
      align: 'center',
    },
    {
      title: 'Update by',
      dataIndex: 'updte',
      align: 'center',
    },
    {
      title: 'Upload date',
      dataIndex: 'date',
      align: 'center',
    },
  ];

  const tabs = [
    {
      label: 'Application',
      children: (
        <>
          <Form>
            <div className="flex">
              <Form.Item label="UPC">
                <Input placeholder="input placeholder" style={{ width: 250 }} />
              </Form.Item>
            </div>
            <div className="flex">
              <Form.Item label="Date">
                <RangePicker
                  style={{ width: 500 }}
                  getPopupContainer={(triggerNode): any =>
                    triggerNode.parentElement
                  }
                />
              </Form.Item>
              <div className="submit-btns">
                <Button type="primary">Display Record</Button>
                <Button type="primary">Export Record</Button>
              </div>
            </div>
          </Form>
          <Table
            columns={getColumns() as any}
            dataSource={data}
            onChange={onChange}
            loading={loading}
            pagination={{
              ...pagination,
              showQuickJumper: true,
              showSizeChanger: true,
            }}
            rowKey={(row): any => row.id}
          />
        </>
      ),
      key: 'Application',
    },
    {
      label: 'UpdateInfos',
      children: <div>UpdateInfos</div>,
      key: 'UpdateInfos',
    },
  ];

  return (
    <Card>
      {contextHolder}
      <Tabs defaultActiveKey="Application" items={tabs}></Tabs>
    </Card>
  );
};

export default VendorApprovals;
