import React from "react";
import { useState } from "react";

function ShoppingProducts({ id, name }) {
  console.log(name, id);
  const [count, setCount] = useState(1);
  return (
    <table>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{count}</td>
          <td>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button
              disabled={count === 0 ? true : false}
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </td>
          <td>{id % 2 === 0 ? id * 300 : id * 200}$</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ShoppingProducts;
