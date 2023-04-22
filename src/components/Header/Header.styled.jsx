import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 0;
`;

export const NavigationLink = styled(NavLink)`
    margin-right: auto;
`;

export const AuthList = styled.ul`
    display: flex;
    gap: 10px;
`;
