import React from 'react';
import ReactDOM from 'react-dom';
import { HbExample } from './index';

export const HandlebarExampleConsumer = () => {
    return (
      <div style={{ width: 400 }}>
        {<HbExample message="works with Bit!!!" />}
      </div>
    )
}