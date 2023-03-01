import { NavContainer, NavLinkStyled } from "./Navigation.styled";

const Navigation = ({ style }) => {
  return (
    <NavContainer style={{ ...style }}>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/products">All products</NavLinkStyled>
    </NavContainer>
  );
}

export default Navigation;