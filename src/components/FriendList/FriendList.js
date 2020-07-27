import React from "react";
import PropTypes from "prop-types";
import { list } from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

let FriendList = ({ friends }) => (
  <ul className={list}>
    {friends.map((f) => (
      <FriendListItem {...f} key={f.id} />
    ))}
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
