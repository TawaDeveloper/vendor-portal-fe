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
  Select,
} from 'antd';
import './index.less';
import { useCallback, useRef, useState } from 'react';
import { backofficeAPI, vendorPortalAPI } from '@/services';
import { TablePaginationConfig } from 'antd/es/table';

const { RangePicker } = DatePicker;
const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const StatusTextMap = {
  '1': 'Pending',
  '2': 'Approved',
  '3': 'Declined',
};

const ApprovalCenter = () => {
  const [form] = Form.useForm();
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
      title: '#',
      dataIndex: 'c',
      align: 'center',
      // render: () => <a>1</a>, // Index
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      align: 'center',
    },
    {
      title: 'Geo',
      dataIndex: 'geo',
      align: 'center',
    },
    {
      title: 'Business Model',
      dataIndex: 'business_model',
      align: 'center',
    },
    {
      title: 'Business Details',
      dataIndex: 'Business_details',
      align: 'center',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'staus',
      align: 'center',
      render: (status: string) => <div>{StatusTextMap[status]}</div>,
    },
    {
      title: 'Action',
      dataIndex: 'index',
      align: 'center',
      render: () => (
        <div>
          <Button>Details</Button>
        </div>
      ),
    },
  ];

  const handleReset = useCallback(() => {
    form.resetFields();
  }, []);
  const handleSearch = useCallback((values: Record<string, any>) => {
    console.log('values', values);
  }, []);

  const create = async () => {
    vendorPortalAPI.wkfModel.createModel.request({
      "name":"test",
      "modelType": 2,
      "id": 15,
      "nodeList":[
         {
             "name":"node1",
             "nodeType":1,
             "userIds":"4"
         },
         {
             "name":"node2",
             "nodeType":0,
             "userIds":"3,20"
         },
         {
             "name":"node3",
             "nodeType":0,
             "userIds":"9"
         },
                {
             "name":"node4",
             "nodeType":2,
             "userIds":"11"
         }
      ],
     "nodeRelationList":[
             {
                 "name":"relation1",
                 "sourceNodeName":"node1",
                 "targetNodeName":"node2"
             },
             {
                 "name":"relation2",
                 "sourceNodeName":"node2",
                 "targetNodeName":"node3"
             },
                         {
                 "name":"relation3",
                 "sourceNodeName":"node3",
                 "targetNodeName":"node4"
             }
           ]
 })
  }

  const tabs = [
    {
      label: 'Application',
      children: (
        <>
          <Form layout="vertical" form={form} onFinish={handleSearch}>
            <div className="flex">
              <Form.Item label="Vendor" name="vendor">
                <Input placeholder="Enter Keywords" style={{ width: 250 }} />
              </Form.Item>
              <Form.Item label="Geo" name="geo">
                <Select
                  placeholder="Please Select"
                  style={{ width: 250 }}
                  options={[]}
                />
              </Form.Item>
              <Form.Item label="Status" name="status">
                <Select
                  placeholder="Please Select"
                  style={{ width: 250 }}
                  options={[]}
                />
              </Form.Item>
              <Form.Item label="Business Model" name="business_model">
                <Select
                  placeholder="Please Select"
                  style={{ width: 250 }}
                  options={[]}
                />
              </Form.Item>
              <Form.Item label="Business Details" name="business_details">
                <Select
                  placeholder="Please Select"
                  style={{ width: 250 }}
                  options={[]}
                />
              </Form.Item>
              <Form.Item label="Updater" name="updater">
                <Input placeholder="Enter Keywords" style={{ width: 250 }} />
              </Form.Item>
            </div>
            <div className="flex">
              <Form.Item label="Application Date" name="application_date">
                <RangePicker
                  style={{ width: 500 }}
                  getPopupContainer={(triggerNode): any =>
                    triggerNode.parentElement
                  }
                />
              </Form.Item>
              <Form.Item label="Update Date" name="update_date">
                <RangePicker
                  style={{ width: 500 }}
                  getPopupContainer={(triggerNode): any =>
                    triggerNode.parentElement
                  }
                />
              </Form.Item>
              <div className="submit-btns">
                <Button onClick={handleReset}>Reset</Button>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
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
      <Button onClick={() => {
        create()
      }}>Create</Button>
    </Card>
  );
};

export default ApprovalCenter;
