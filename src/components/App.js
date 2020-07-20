import React from "react";

import User from "./User/User";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
// import FriendListItem from "./FriendListItem/FriendListItem";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userJson from "../data/user.json";
import stats from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
//console.log(transactions);
// console.log(User);

export default function App() {
  return (
    <>
      <h1>---------Task 1-----------</h1>
      <User
        avatar={userJson.avatar}
        name={userJson.name}
        tag={userJson.tag}
        location={userJson.location}
        followers={userJson.stats.followers}
        views={userJson.stats.views}
        likes={userJson.stats.likes}
        //userFromJSON={usert} // V2(propTypes с ошибкой)
      />
      <h1>----------Task 2-----------</h1>
      <Statistics title={"Upload stats"} stats={stats} />
      <h1>----------Task 3-----------</h1>
      <FriendList friends={friends}></FriendList>
      <h1>----------Task 4-----------</h1>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
}
