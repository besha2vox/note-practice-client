import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNotes } from 'redux/notes/operations';

import { Container } from 'shared/Container';
import { Title } from './PostsPage.styled';
import NoteList from 'components/NoteList/NoteList';

const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <Container>
      <Title>All posts</Title>
      <NoteList />
    </Container>
  );
};

export default PostsPage;
