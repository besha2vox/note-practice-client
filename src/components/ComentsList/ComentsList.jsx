import { useSelector } from 'react-redux';

import { selectComments } from 'redux/notes/selectors';
import {
  CommentsList,
  CommentsListItem,
  NoComments,
} from './ComentsList.styled';
import CommentItem from 'components/CommentItem/CommentItem';

const ComentsList = () => {
  const comments = useSelector(selectComments);

  return (
    <>
      <h4>Comments:</h4>
      {!comments?.length && <NoComments>No comments</NoComments>}
      {!!comments?.length && (
        <CommentsList>
          {comments.map(({ _id, author, text }) => (
            <CommentsListItem key={_id}>
              <CommentItem author={author} text={text} />
            </CommentsListItem>
          ))}
        </CommentsList>
      )}
    </>
  );
};

export default ComentsList;
