import styled from 'styled-components';

export const CommentAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  column-gap: 12px;
  border-bottom: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom-right-radius: 10px;
  font-size: 16px;
  width: fit-content;

  & img {
    border-radius: 50%;
    width: 30px;
  }
`;

export const CommentText = styled.p`
  padding: 8px;
  font-size: 20px;
`;
