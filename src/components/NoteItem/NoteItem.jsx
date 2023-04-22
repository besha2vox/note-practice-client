// import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeNote } from 'redux/notes/operations';

import {
  NoteItemTitle,
  NoteItemText,
  NoteItemReactionWrapper,
  NoteItemAuthorWrapper,
  NoteItemComments,
  LikeButton,
  StarButton,
  TrashButton,
} from './NoteItem.styled';
import defaultAvatar from 'images/default-avatar.png';
import { ReactComponent as CommentIcon } from 'images/comments.svg';
import { ReactComponent as LikeIcon } from 'images/like.svg';
import { ReactComponent as StarIcon } from 'images/star.svg';
import { ReactComponent as TrashIcon } from 'images/trash.svg';

const NoteItem = ({
  title,
  author,
  text,
  _id,
  likes,
  stared,
  comments,
  avatar = defaultAvatar,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <NoteItemAuthorWrapper>
        <img src={avatar} alt="avatar" />
        <p>Author: {author}</p>
      </NoteItemAuthorWrapper>
      <NoteItemTitle>{title}</NoteItemTitle>
      <NoteItemText>{text}</NoteItemText>
      <NoteItemReactionWrapper>
        <NoteItemComments to={`/${_id}`}>
          <CommentIcon />
          <p>{comments?.length}</p>
        </NoteItemComments>

        <LikeButton>
          <LikeIcon /> <p>{likes}</p>
        </LikeButton>

        <StarButton stared={stared}>
          <StarIcon />
        </StarButton>
        <TrashButton onClick={() => dispatch(removeNote(_id))}>
          <TrashIcon />
        </TrashButton>
      </NoteItemReactionWrapper>
    </>
  );
};

// NoteItem.propTypes = {
//   title: PropType.string.isRequired,
//   author: PropType.string.isRequired,
//   text: PropType.string.isRequired,
//   _id: PropType.string.isRequired,
//   likes: PropType.number.isRequired,
//   stared: PropType.bool.isRequired,
//   comments: PropType.arrayOf(
//     PropType.shape({
//       _id: PropType.string.isRequired,
//       author: PropType.string.isRequired,
//       text: PropType.string.isRequired,
//     })
//   ),
// };

export default NoteItem;
