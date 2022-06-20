import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // WITHOUT IMPORT
  const [people, setPeople] = React.useState([])
  return <h2>useState array example</h2>;
};

export default UseStateArray;
