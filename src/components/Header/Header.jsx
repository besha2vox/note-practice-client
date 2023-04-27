import { Nav, NavigationLink, AuthList } from './Header.styled';
import { Container } from 'shared/Container';
import { useContext } from 'react';
import { FormContext } from 'services/Context';

const Header = () => {
  const { formType, setFormType } = useContext(FormContext);

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
          <AuthList>
            <li>
              <button onClick={handleLoginClick}>Log in</button>
            </li>
            <li>
              <button onClick={handleSingupClick}>Sing up</button>
            </li>
          </AuthList>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
