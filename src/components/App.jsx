import PropTypes from "prop-types";

import { Profile } from './Profile/Profile'
import userData from './Profile/data/user'

import { Statistics } from './Statistics/Statistics'
import statisticsData from './Statistics/data/data'

import { FriendList } from './FriendList/FriendList'
import friends from './FriendList/data/friends'

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

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  )
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({

    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired).isRequired
}

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
