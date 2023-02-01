import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => {
            return (<li key={id} className={css.item}>
                {isOnline ? <span className={`${css.status}  ${css.online}`}></span> : <span className={`${css.status}  ${css.offline}`}></span>}
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
          </li>)
            })}
        </ul>
        )
}