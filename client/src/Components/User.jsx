import LastSeen from "./LastSeen";


const User = ({ user }) => {

    const genericPic = "https://stiftung-chancenfuerkinder.de/wp-content/uploads/2020/11/blank-profile-picture-973460_1280.png"
    return (
        <li className="user-square">
            <img className="profile-pic" src={
                user.picture ?
                    user.picture.url :
                    genericPic
            } alt="profile" />
            <div className="about">
                <span className="user-info">
                    <h2 className="user-age">{user.personal.age}</h2>
                    <p className="seperator">|</p>
                    <h2 className="user-name">{user.name}</h2>
                    {user.online_status === "ONLINE" ? <span>🟢</span> : <span>🔴</span>}
                </span>
                <i className="headline">{user.headline}</i>
                <LastSeen date={user.last_login} />
                <span className="user-info">
                    <h3 className="user-distance">{user.location.distance}m 📍</h3>
                </span>
            </div>
        </li>
    );
}

export default User;