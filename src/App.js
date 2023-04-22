import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NoFoundPage from 'components/NoFoundPage/NotFoundPage';

const App = () => {
  const PostsPage = lazy(() => import('pages/PostsPage/PostsPage.jsx'));
  const OnePostPage = lazy(() => import('pages/OnePostPage/OnePostPage.jsx'));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getCurrentUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PostsPage />} />
        <Route path="/:postId" element={<OnePostPage />} />
        <Route path="*" element={<NoFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
