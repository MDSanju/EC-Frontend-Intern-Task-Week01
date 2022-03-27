import styled from "styled-components";

export const NavBody = styled.div`
  font-family: sans-serif;
`;

export const Navigation = styled.nav`
  background: #222;
  padding: 5px 20px;
`;

export const NavUl = styled.ul`
  list-style-type: none;
  & li {
    font-size: 16px;
    padding: 15px 10px;
    white-space: nowrap;
    cursor: pointer;
  }
`;

export const NavA = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
