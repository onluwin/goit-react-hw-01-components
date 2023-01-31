import PropTypes from "prop-types";

import { Profile } from './Profile/Profile'
import userData from './Profile/data/user'

import { Statistics } from './Statistics/Statistics'
import statisticsData from './Statistics/data/data'

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