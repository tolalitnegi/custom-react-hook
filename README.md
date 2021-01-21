# react custom hooks 

Custom hooks are nothing but moving the reusable hooks in a seprate file and using them in various places

Like in below example the fetch call is moved to a seprate method useFetch which just creates the useEffect hooks
```
import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = await res.json();
      setData(dataArray[0]);
    };

    fetchData();
  }, [url]);

  return data; // this is the most important line as it returns the data
};

export default useFetch;
```
