import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    border-bottom: 1px solid #dee2e6;
    background-color: #fff;
`;

export const Logo = styled.a`
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
    display: inline-block;
    margin-right: 16px;
    white-space: nowrap;
    font-size: 14px;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
`;

export const Nav = styled.nav`
    
`

export const NavLink = styled.a`
    color: #343a40;
    padding: 6px;
    font-size: 10px;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
`