import PropTypes from "prop-types";

import css from '../Profile/Profile.module.css'

import { ProfileAvatar } from './ProfileAvatar'

export const ProfileDescription = ({name, tag, location, avatar}) => {
    return (<div className={css.description}>
    <ProfileAvatar avatarURL={avatar} />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>)
}

ProfileAvatar.propTypes = {
  avatarURL: PropTypes.string,
}