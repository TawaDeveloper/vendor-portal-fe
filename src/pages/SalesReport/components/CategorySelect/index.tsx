import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { unionBy } from 'lodash-es';
import { t } from 'i18next';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { bakeryAPI } from '@/services';

interface IProps {
  value: string[];
  onChange: (value: string[]) => void;
}
const CategorySelect = ({ onChange, value }: IProps) => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  useEffect(() => {
    const loadAllCategorys = async () => {
      const response = await bakeryAPI.statisticalCommon.categories.request({
        keyword: '',
      });
      const newOptions = unionBy(response.data, 'id').map((item) => {
        return {
          value: item.id,
          label: `${item.description}`,
        };
      });
      setOptions(newOptions);
    };
    loadAllCategorys();
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.label}>{t<string>('pages.report.Category')}</div>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '268px' }}
        value={value}
        placeholder={t<string>('pages.report.PleaseChoose')}
        onChange={(value: string[]) => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  );
};

export default CategorySelect;