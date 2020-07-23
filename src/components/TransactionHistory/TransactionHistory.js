import React from "react";
import stylesTransactionHistory from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory(props) {
  console.log(props);
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

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
