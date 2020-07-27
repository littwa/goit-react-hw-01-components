import React from "react";
import { label, percentage, item } from "../Statistics/Statistics.module.css";
import RandomColor from "../Statistics/RandomColor";
import PropTypes from "prop-types";

let StatListItem = ({ statLabel, statPercentage }) => {
  return (
    <li style={{ backgroundColor: `${RandomColor()}` }} className={item}>
      <span className={label}>{statLabel}</span>
      <span className={percentage}>{statPercentage}%</span>
    </li>
  );
};

export default StatListItem;

StatListItem.propTypes = {
  statLabel: PropTypes.string.isRequired,
  statPercentage: PropTypes.number.isRequired,
};
