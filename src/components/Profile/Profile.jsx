import PropTypes from "prop-types";

import css from '../Profile/Profile.module.css'

import { ProfileStats } from './ProfileStats'
import { ProfileDescription } from './ProfileDescription'

export const Profile = ({name, tag, location, avatar, stats}) => {
    return (
        <div className={css.profile} key={tag}>
          <ProfileDescription
            name={name} 
            tag={tag} 
            location={location} 
            avatar={avatar} />
          <ProfileStats stats={stats} />
        </div>)
}

ProfileDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
}
ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}