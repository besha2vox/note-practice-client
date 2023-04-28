import { Nav, NavigationLink, AuthList } from './Header.styled';
import { Container } from 'shared/Container';
import { useContext } from 'react';
import { FormContext } from 'services/Context';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

const Header = () => {
  const { formType, setFormType } = useContext(FormContext);
  const isLogedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLoginClick = () => {
    setFormType('login');
  };

  const handleSingupClick = () => {
    setFormType('singup');
  };

  return (
    <header>
      <Container>
        <Nav>
          <NavigationLink to="/">Home</NavigationLink>
          {!isLogedIn && (
            <AuthList>
              <li>
                <button onClick={handleLoginClick}>Log in</button>
              </li>
              <li>
                <button onClick={handleSingupClick}>Sing up</button>
              </li>
            </AuthList>
          )}
          {isLogedIn && (
            <>
              <NavigationLink to="/profile">Profile</NavigationLink>
              <p>Welcome {user.name}</p>
            </>
          )}
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
