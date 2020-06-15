import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: #222;
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Logo = styled.div`
  font-size: 32px;
  color: #fff;
`;

export const Links = styled.div`
  & a {
    color: #fff;
    display: inline-block;
    + a {
      margin-left: 30px;
    }
  }
`;

const menuItens = [
  {
    url: "/",
    desc: "Home",
  },
  {
    url: "/about",
    desc: "About",
  },
  {
    url: "/contact",
    desc: "Contact",
  },
];

const Navigation = () => {
  return (
    <Nav>
      <Logo>MM</Logo>
      <Links>
        {menuItens.map((item) => (
          <NavLink activeStyle={{ color: "red" }} exact to={item.url}>
            {item.desc}
          </NavLink>
        ))}
      </Links>
    </Nav>
  );
};

export default Navigation;
