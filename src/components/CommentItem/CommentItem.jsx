import PropType from 'prop-types';

import defaultAvatar from 'images/default-avatar.png';
import { CommentAuthorWrapper, CommentText } from './CommentItem.styled';

const CommentItem = ({ _id, author, text, avatar = defaultAvatar }) => {
  return (
    <>
      <CommentAuthorWrapper>
        <img src={defaultAvatar} alt="avatar" />
        <p>{author}</p>
      </CommentAuthorWrapper>
      <CommentText>{text}</CommentText>
    </>
  );
};

CommentItem.propTypes = {
  _id: PropType.string,
  author: PropType.string.isRequired,
  text: PropType.string.isRequired,
};

export default CommentItem;
