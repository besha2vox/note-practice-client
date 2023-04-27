import styled from 'styled-components';
import { Field, Form } from 'formik';

export const PostFormLayout = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding: 12px;
  gap: 8px;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
`;

export const PostFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PostLabel = styled.label`
  align-self: center;
  width: 80%;
`;

export const PostInput = styled(Field)`
  padding: 8px;
  align-self: center;
  width: 80%;
  font-size: 18px;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
`;

export const PostSubmitButton = styled.button`
  padding: 4px 8px;
  align-self: center;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out,
    outline 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #444444;
    outline: 1px solid #aaaaaa;
    color: inherit;
  }
  margin-top: 8px;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
  width: 100%;
`;

export const AddButton = styled.button`
  padding: 4px 8px;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #ffff47;
  }
`;
