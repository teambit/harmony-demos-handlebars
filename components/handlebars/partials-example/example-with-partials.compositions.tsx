import React from 'react';
import { PartialsExample } from './index';

const persons = [
  { name: "Nils", age: 20 },
  { name: "Teddy", age: 10 },
  { name: "Nelson", age: 40 },
]

export const HandlebarExampleConsumer = () => {
    return (
      <div style={{ width: 400 }} id="partial-example">
        <PartialsExample persons={persons} />
      </div>
    )
  }