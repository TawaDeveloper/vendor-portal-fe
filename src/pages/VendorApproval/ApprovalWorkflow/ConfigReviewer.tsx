import React, { useContext, useMemo, useRef, useState } from 'react';
import { BuilderContext, useDrawer } from 'react-flow-builder';
import { Form, Button, Select, Spin } from 'antd';
import styles from "./ConfigReviewer.less";
import { debounce } from 'lodash-es';
import { vendorPortalAPI } from '@/services';
const ConfigReviewer: React.FC = () => {
  const { selectedNode: node } = useContext(BuilderContext);
   console.log(node);
  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<any>([]);
  const fetchRef = useRef(0);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
   
     // console.log()
      save?.({
        userId: values.user.value,
        userName: values.user.label
      });
    } catch (error) {
      const values = form.getFieldsValue();
      save?.(values, !!error);
    }
  };

  const debounceTimeout = 1000;

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      vendorPortalAPI.internalUser.getUserListForPage.request({
        pageNum: 1,
        pageSize: 100,
        name: value,
      }).then(response => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        if (response.success === true) {
            setOptions(response.data?.records?.map((item => {
                return {
                    label: item.name,
                    value: item.id,
                }
            })))
        }

       
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout]);

  return (
    <div>
      <Form form={form} initialValues={{
            user: node && node.data ? node.data: null
      }}>
        <Form.Item name="user" label="Reviewer" rules={[{ required: true }]}>
             <Select
                labelInValue
                filterOption={false}
                onSearch={debounceFetcher}
                notFoundContent={fetching ? <Spin size="small" /> : null}
                placeholder="Select users"
                options={options}
                showSearch={true}
        />
        </Form.Item>
      </Form>
      <div className={styles.btns}>
        <Button onClick={cancel}>Cancel</Button>
        <Button type="primary" onClick={handleSubmit}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default ConfigReviewer;


// import { Select, Spin } from 'antd';
// import type { SelectProps } from 'antd/es/select';
// import debounce from 'lodash/debounce';
// import React, { useMemo, useRef, useState } from 'react';

// export interface DebounceSelectProps<ValueType = any>
//   extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
//   fetchOptions: (search: string) => Promise<ValueType[]>;
//   debounceTimeout?: number;
// }

// function DebounceSelect<
//   ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
// >({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<ValueType>) {
//   const [fetching, setFetching] = useState(false);
//   const [options, setOptions] = useState<ValueType[]>([]);
//   const fetchRef = useRef(0);

//   const debounceFetcher = useMemo(() => {
//     const loadOptions = (value: string) => {
//       fetchRef.current += 1;
//       const fetchId = fetchRef.current;
//       setOptions([]);
//       setFetching(true);

//       fetchOptions(value).then(newOptions => {
//         if (fetchId !== fetchRef.current) {
//           // for fetch callback order
//           return;
//         }

//         setOptions(newOptions);
//         setFetching(false);
//       });
//     };

//     return debounce(loadOptions, debounceTimeout);
//   }, [fetchOptions, debounceTimeout]);

//   return (
//     <Select
//       labelInValue
//       filterOption={false}
//       onSearch={debounceFetcher}
//       notFoundContent={fetching ? <Spin size="small" /> : null}
//       {...props}
//       options={options}
//     />
//   );
// }

// // Usage of DebounceSelect
// interface UserValue {
//   label: string;
//   value: string;
// }

// async function fetchUserList(username: string): Promise<UserValue[]> {
//   console.log('fetching user', username);

//   return fetch('https://randomuser.me/api/?results=5')
//     .then(response => response.json())
//     .then(body =>
//       body.results.map(
//         (user: { name: { first: string; last: string }; login: { username: string } }) => ({
//           label: `${user.name.first} ${user.name.last}`,
//           value: user.login.username,
//         }),
//       ),
//     );
// }

// const App: React.FC = () => {
//   const [value, setValue] = useState<UserValue[]>([]);

//   return (
//     <DebounceSelect
//       mode="multiple"
//       value={value}
//       placeholder="Select users"
//       fetchOptions={fetchUserList}
//       onChange={newValue => {
//         setValue(newValue as UserValue[]);
//       }}
//       style={{ width: '100%' }}
//     />
//   );
// };

// export default App;