import PropTypes from "prop-types";

import { Profile } from './Profile/Profile'
import userData from './Profile/data/user'

import { Statistics } from './Statistics/Statistics'
import statisticsData from './Statistics/data/data'

import { FriendList } from './FriendList/FriendList'
import friendsData from './FriendList/data/friends'

import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/data/transactions'

const { username, tag, location , avatar, stats } = userData;

export const App = () => {
  return (
    <>
      <Profile 
      name={username} 
      tag={tag} 
      location={location} 
      avatar={avatar} 
      stats={stats} />

      <Statistics 
      title='Upload stats' 
      data={statisticsData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactions} />
    </>
  )
};

// ОСТАЛОСЬ ДОПИСАТЬ PROP TYPES ДЛЯ СЛЕДУЮЩИХ КОМПОНЕНТОВ:

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired).isRequired
}
