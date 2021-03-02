import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #cad4de;
    height: 700px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1 120px;
    max-width: 300px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position:absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #000
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #4287f5;
    }
`;