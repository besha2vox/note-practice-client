import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addAvatar } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const [file, setFile] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleFile = e => {
    setFile(e.target.files[0]);
  };
  const handleupload = () => {
    dispatch(addAvatar(file));
    navigate('/profile');
  };

  return (
    <>
      <form>
        <input type="text" value={user.name} />
        <input type="text" value={user.email} />
        <button>submit</button>
      </form>
      <div>
        <input type="file" name="avatar" onChange={handleFile} />
        <button type="button" onClick={handleupload}>
          add avatar
        </button>
      </div>
    </>
  );
};

export default ProfileEdit;
