import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchNoteById } from 'redux/notes/operations';

import { OnePostWrapper } from './OnePostPage.styled';
import { Container } from 'shared/Container';
import OneNote from 'components/OneNote/OneNote';
import ComentsList from 'components/ComentsList/ComentsList';

const OnePostPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchNoteById(postId));
  }, [dispatch, postId]);

  return (
    <Container>
      <OnePostWrapper>
        <OneNote />
      </OnePostWrapper>
      <ComentsList />
    </Container>
  );
};

export default OnePostPage;
