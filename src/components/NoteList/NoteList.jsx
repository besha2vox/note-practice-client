import PropType from 'prop-types';
import { useSelector } from 'react-redux';

import { selectAllNotes } from 'redux/notes/selectors';

import { NoteUList, NoteListItem } from './NoteList.styled';
import { NoComments } from 'components/ComentsList/ComentsList.styled';
import NoteItem from 'components/NoteItem/NoteItem';

const NoteList = () => {
  const notes = useSelector(selectAllNotes);

  if (!notes?.length) return <NoComments>No Posts</NoComments>;

  return (
    <NoteUList>
      {notes.map(
        ({ title, author, text, _id, likes, stared, avatar, comments }) => (
          <NoteListItem key={_id}>
            <NoteItem
              title={title}
              author={author}
              text={text}
              _id={_id}
              likes={likes}
              stared={stared}
              avatar={avatar}
              comments={comments}
            />
          </NoteListItem>
        )
      )}
    </NoteUList>
  );
};

NoteList.propTypes = {
  notes: PropType.arrayOf(
    PropType.shape({
      title: PropType.string.isRequired,
      author: PropType.string.isRequired,
      text: PropType.string.isRequired,
      _id: PropType.string.isRequired,
      likes: PropType.number.isRequired,
      stared: PropType.bool.isRequired,
      comments: PropType.arrayOf(
        PropType.shape({
          _id: PropType.string.isRequired,
          author: PropType.string.isRequired,
          text: PropType.string.isRequired,
        })
      ),
    })
  ),
};

export default NoteList;
