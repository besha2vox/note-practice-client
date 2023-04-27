import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FieldWrapper,
  Input,
  Label,
  FormLayout,
  SubmitButton,
} from 'components/RegisterForm/RegisterForm.styled';
import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email!')
      .required('Email is a required field!'),
    password: yup
      .string()
      .min(6, 'Password must be at least 8 characters long!')
      .required('Password is a required field!'),
  });

  const handleSubmit = async values => {
    const {
      payload: { message },
    } = await dispatch(logIn(values));
    if (!message) return;
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <FormLayout>
            <FieldWrapper>
              <Label htmlFor="email">Email</Label>
              <Input autoFocus type="email" id="email" name="email" />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" />
            </FieldWrapper>

            <SubmitButton type="submit" disabled={!formik.isValid}>
              Log in
            </SubmitButton>
            {/* {!formik.isValid && (
              <ErrorMessages>
                <ErrorMessage component={'p'} name="email" />
                <ErrorMessage component={'p'} name="password" />
              </ErrorMessages>
            )} */}
          </FormLayout>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
