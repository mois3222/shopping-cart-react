import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
function PurchaseStatistics() {
  const { allow, setAllow } = useContext(Context);
  console.log(allow);
  return (
    <table>
      {allow ? (
        <tbody>
          <tr>
            <td>
              <h4>
                <em>Total Products</em>
              </h4>
            </td>
            <td>
              <h4>4</h4>
            </td>
            <td>
              <button>Clean All</button>
            </td>
            <td>1000$</td>
          </tr>
        </tbody>
      ) : (
        <tfoot>
          <tr>
            <td>
              {" "}
              <h4>Empy Cart - Start Shopping</h4>
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export default PurchaseStatistics;
