import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export const User = () => {
  const [{ data }, setUser] = useState('');

  useEffect(() => {
    Axios.get('/api/users').then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>kappa</h1>
    </div>
  );
};
