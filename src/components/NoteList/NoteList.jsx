import { useSelector } from 'react-redux';

import { selectAllNotes } from 'redux/notes/selectors';

import { NoteUList, NoteListItem } from './NoteList.styled';
import NoteItem from 'components/NoteItem/NoteItem';

const NoteList = () => {
    const notes = useSelector(selectAllNotes);

    return (
        <NoteUList>
            {notes.map(
                ({ title, author, text, _id, likes, stared, avatar }) => (
                    <NoteListItem key={_id}>
                        <NoteItem
                            title={title}
                            author={author}
                            text={text}
                            _id={_id}
                            likes={likes}
                            stared={stared}
                            avatar={avatar}
                        />
                    </NoteListItem>
                )
            )}
        </NoteUList>
    );
};

export default NoteList;
