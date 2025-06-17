import { useSearchParams } from 'react-router-dom';
import { SearchParams } from '@mfe-dashboard/types';

export function useObjectSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = (paramsObj: SearchParams) => {
    const newParams = new URLSearchParams();
    Object.entries(paramsObj).forEach(([key, value]) => {
      newParams.set(key, (value as number | string | boolean).toString());
    });
    setSearchParams(newParams);
  };

  const getParams = (): SearchParams => {
    const paramsObj: SearchParams = {};
    searchParams.forEach((value, key) => {
      paramsObj[key] = value;
    });
    return paramsObj;
  };

  const removeParam = (key: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams);
  };

  return { setParams, getParams, removeParam };
}
