import PropType from 'prop-types';

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
    avatar = defaultAvatar,
}) => {
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
                    <p>0</p>
                </NoteItemComments>

                <LikeButton>
                    <LikeIcon /> <p>{likes}</p>
                </LikeButton>

                <StarButton stared={stared}>
                    <StarIcon />
                </StarButton>
                <TrashButton>
                    <TrashIcon />
                </TrashButton>
            </NoteItemReactionWrapper>
        </>
    );
};

NoteItem.propTypes = {
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
    text: PropType.string.isRequired,
    _id: PropType.string.isRequired,
    likes: PropType.number.isRequired,
    stared: PropType.bool.isRequired,
};

export default NoteItem;
