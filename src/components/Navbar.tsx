import { Avatar } from "@mantine/core";
import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  text-align: center;

  .profile {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export default function Navbar({}) {
  return (
    <StyledNav>
      <h1>#todo app</h1>
      <div className="profile">
        <Avatar onClick={() => {}} radius="md" />
      </div>
    </StyledNav>
  );
}
