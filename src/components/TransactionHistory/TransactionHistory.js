import React from "react";
import stylesTransactionHistory from "./TransactionHistory.module.css";
import PropTypes from "prop-types";
import TransactionHistoryItem from "../TransavtionHistoryItem/TransactionHistoryItem";

function TransactionHistory(props) {
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
          return <TransactionHistoryItem key={tr.id} type={tr.type} amount={tr.amount} currency={tr.currency} />;
        })}
      </tbody>
    </table>
  );
}
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
