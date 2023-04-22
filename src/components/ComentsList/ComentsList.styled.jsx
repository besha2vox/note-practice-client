import styled from 'styled-components';

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px;
  row-gap: 8px;
`;

export const CommentsListItem = styled.li`
  border: 1px solid #2e2e2e;
  border-radius: 10px;
`;

export const NoComments = styled.p`
  text-align: center;
`;
