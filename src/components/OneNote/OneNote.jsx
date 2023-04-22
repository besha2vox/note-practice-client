import { useSelector } from 'react-redux';

import { selectCurrentNotes } from 'redux/notes/selectors';
import NoteItem from 'components/NoteItem/NoteItem';

const OneNote = () => {
  const note = useSelector(selectCurrentNotes);
  const { title, author, text, _id, likes, stared, avatar, comments } = note;

  return (
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
  );
};

export default OneNote;
