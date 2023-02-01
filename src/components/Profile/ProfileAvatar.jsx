import css from '../Profile/Profile.module.css'

export const ProfileAvatar = ({ avatarURL }) => {
    return (<img
      src={avatarURL}
      alt="User avatar"
      className={css.avatar}
    />)
}