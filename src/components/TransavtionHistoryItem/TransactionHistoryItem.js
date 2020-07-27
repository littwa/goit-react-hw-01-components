import React from "react";
import stylesTransactionHistory from "../TransactionHistory/TransactionHistory.module.css";
import PropTypes from "prop-types";

let TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={stylesTransactionHistory.tableRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
