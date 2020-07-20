import React from "react";
import stylesTransactionHistory from "./TransactionHistory.module.css";

function TransactionHistory(props) {
  console.log(props.items);

  return (
    <table className={stylesTransactionHistory.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map((tr) => {
          return (
            <tr key={tr.id} className={stylesTransactionHistory.tableRow}>
              <td>{tr.type}</td>
              <td>{tr.amount}</td>
              <td>{tr.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
