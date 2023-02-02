import PropTypes from "prop-types";

import css from './FriendList.module.css'

export const FriendListItem = ({friends}) => {
    return friends.map(({avatar, name, isOnline, id}) => {
            return (<li key={id} className={css.item}>
                {isOnline ? <span className={`${css.status}  ${css.online}`}></span> : <span className={`${css.status}  ${css.offline}`}></span>}
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
          </li>)
            })
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired)
}