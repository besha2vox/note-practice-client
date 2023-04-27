import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { addNote } from 'redux/notes/operations';
import {
  PostFieldWrapper,
  PostFormLayout,
  PostInput,
  PostLabel,
  PostSubmitButton,
  AddButton,
  AddButtonWrapper,
} from './PostForm.styled';
import { ButtonClose } from 'components/Modal/Modal.styled';

const PostForm = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleAddFormOpen = () => {
    setIsAddFormOpen(true);
  };

  const handleAddFormClose = () => {
    setIsAddFormOpen(false);
  };

  const initialValues = {
    title: '',
    text: '',
    author: '',
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is a required field!'),
    text: yup.string().required('Name is a required field!'),
    author: yup.string().required('Name is a required field!'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    await dispatch(addNote(values));
    handleAddFormClose();
    resetForm();
  };

  if (!isAddFormOpen) {
    return (
      <AddButtonWrapper>
        <AddButton onClick={handleAddFormOpen}>Add new Post</AddButton>
      </AddButtonWrapper>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <PostFormLayout>
          <ButtonClose onClick={handleAddFormClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>{' '}
              </g>
            </svg>
          </ButtonClose>
          <PostFieldWrapper>
            <PostLabel htmlFor="author">Author</PostLabel>
            <PostInput autoFocus type="text" id="author" name="author" />
            <PostLabel htmlFor="title">Title</PostLabel>
            <PostInput autoFocus type="text" id="title" name="title" />
          </PostFieldWrapper>
          <PostFieldWrapper>
            <PostLabel htmlFor="text">Text</PostLabel>
            <PostInput type="text" id="text" name="text" />
          </PostFieldWrapper>
          <PostSubmitButton type="submit">Add Post</PostSubmitButton>
        </PostFormLayout>
      )}
    </Formik>
  );
};

export default PostForm;
