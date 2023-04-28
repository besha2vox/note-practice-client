import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import defaultAvatar from 'images/default-avatar.png';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <div>
        <button onClick={() => dispatch(logOut)}>logout</button>
      </div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <img src={`http://localhost:3001/${user.avatar}`} alt="avatar" />
      <Link to="/profile/edit">edit</Link>
    </>
  );
};

export default ProfilePage;
