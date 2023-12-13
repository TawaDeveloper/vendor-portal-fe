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
import { backofficeAPI } from '@/services';
import { TablePaginationConfig } from 'antd/es/table';

const { RangePicker } = DatePicker;
const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const VendorApprovals = () => {
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

  const handleReset = useCallback(() => {
    form.resetFields();
  }, []);
  const handleSearch = useCallback((values: Record<string, any>) => {
    console.log('values', values);
  }, []);

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
    </Card>
  );
};

export default VendorApprovals;
