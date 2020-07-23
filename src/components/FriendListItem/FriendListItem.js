import React from "react";
import PropTypes from "prop-types";
import { item, avatarSel, nameSel, status, statusOn, statusOff } from "./FriendListItem.module.css";

function FriendListItem(prop) {
  let { avatar, name, isOnline } = prop;

  let statusOnline = [status, isOnline ? statusOn : statusOff];

  return (
    <li className={item}>
      <span className={statusOnline.join(" ")}></span>
      <img className={avatarSel} src={avatar} alt={name} width="48" />
      <p className={nameSel}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

FriendListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
