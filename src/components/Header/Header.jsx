import { Nav, NavigationLink, AuthList } from './Header.styled';
import { Container } from 'shared/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <Nav>
          <NavigationLink to="/">Home</NavigationLink>
          <AuthList>
            <li>
              <button>Log in</button>
            </li>
            <li>
              <button>Sing up</button>
            </li>
          </AuthList>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
