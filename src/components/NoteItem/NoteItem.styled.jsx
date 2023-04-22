import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoteItemAuthorWrapper = styled.div`
    display: flex;
    padding: 4px 8px;
    column-gap: 12px;
    align-items: center;
    border-bottom: 1px solid #2e2e2e;

    img {
        border-radius: 50%;
        max-width: 50px;
        overflow: hidden;
    }
`;

export const NoteItemTitle = styled.h3`
    padding: 8px;
`;

export const NoteItemText = styled.p`
    padding: 0 4px 8px;
    border-bottom: 1px solid #2e2e2e;
`;

export const NoteItemReactionWrapper = styled.div`
    display: flex;
    padding: 4px 8px;
    column-gap: 12px;
`;

export const NoteItemComments = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    & svg {
        width: 25px;
        height: 25px;
        stroke: #2e2e2e;
        fill: #ffffff;
        transition: all 300ms ease-in-out;
    }

    &:hover svg {
        fill: #ffc44d;
    }
`;

export const LikeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: inherit;
    color: inherit;

    & svg {
        width: 25px;
        height: 25px;
        stroke: #2e2e2e;
        fill: #ffffff;
        stroke: #000000;
        transition: all 300ms ease-in-out;
    }

    &:hover svg {
        fill: #f14e4eeb;
    }
`;

export const StarButton = styled.button`
    display: flex;
    align-items: center;

    & svg {
        width: 25px;
        height: 25px;
        fill: ${({ stared }) => (stared ? '#eeff00' : 'transparent')};
        transition: all 300ms ease-in-out;
    }

    &:hover svg {
        fill: #fdff78;
    }
`;

export const TrashButton = styled.button`
    display: flex;
    align-items: center;
    margin-left: auto;

    & svg {
        width: 25px;
        height: 25px;
        fill: transparent;
        transition: all 300ms ease-in-out;
    }

    &:hover svg {
        fill: #ff5656;
    }
`;
