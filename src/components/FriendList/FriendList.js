import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import { friendList } from "./FriendList.module.css";

function FriendList({ friends }) {
  return <ul className={friendList}>{friends.map((f) => FriendListItem(f))}</ul>;
}

export default FriendList;

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
