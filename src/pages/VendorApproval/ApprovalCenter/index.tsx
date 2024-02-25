import {

  Card,

} from 'antd';
import './index.less';
import { useEffect } from 'react';
import { vendorPortalAPI } from '@/services';
// import { useCallback, useRef, useState } from 'react';
// import { backofficeAPI } from '@/services';
// import { TablePaginationConfig } from 'antd/es/table';

// const { RangePicker } = DatePicker;
// const INITIAL_PAGINATION = {
//   current: 1,
//   pageSize: 10,
// };

// const StatusTextMap = {
//   '1': 'Pending',
//   '2': 'Approved',
//   '3': 'Declined',
// };

const ApprovalCenter = () => {

  useEffect(() => {
    vendorPortalAPI.wkfProcdef.search.request({
      pageNumber: 1,
      pageSize: 20,
      type: 0
    })
  }, [])
  return (
    <Card>
      
    </Card>
  );
};

export default ApprovalCenter;
