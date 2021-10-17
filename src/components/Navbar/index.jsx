import React from 'react';
import { StyledNav, StyledLogo } from './styled';
import { StyledLinkDefault, StyledLinkPrimary } from '../Links/styled';

function Navbar() {
  return (
    <StyledNav>
      <section>
        <StyledLogo />
        <StyledLinkDefault>Home</StyledLinkDefault>
        <StyledLinkDefault>Movies</StyledLinkDefault>
        <StyledLinkDefault>Series</StyledLinkDefault>
      </section>
      <section>
        <StyledLinkPrimary>Sign In</StyledLinkPrimary>
      </section>
    </StyledNav>
  );
}

export default Navbar;
