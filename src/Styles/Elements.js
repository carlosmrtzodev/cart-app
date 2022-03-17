import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";
const fadeInAnimation = keyframes`${fadeIn}`;
export const LogoText = styled.h1`
  animation: 1s ${fadeInAnimation};
`;
export const Buttons = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 1.2rem 2rem;
  border-radius: 25rem;
  transition: all ease 0.3s;
  background-color: #2fbf71;

  &:hover {
    filter: brightness(1.1);
  }
`;
export const BubbleCart = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  position: absolute;
`;
export const BubbleCount = styled.span`
  font-weight: 700;
  border-radius: 25rem;
  padding: 0.2rem 0.6rem;
  background-color: #ef2d56;
`;
export const ProductList = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #ffffff;

  &:last-child {
    border-bottom: none;
  }
`;
export const Text = styled.p`
  gap: 0.8rem;
  display: flex;
  align-items: center;
`;
export const Images = styled.img`
  width: 100%;
  height: auto;
`;
export const Credits = styled.a`
  gap: 0.8rem;
  display: flex;
  color: #363537;
  font-weight: 700;
  align-items: center;
  margin-bottom: 4rem;
  justify-content: center;
  transition: all ease 0.3s;

  &:hover {
    color: #2fbf71;
  }
`;
export const ProductStyle = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  padding: 4rem;
  border-radius: 0.4rem;
  flex-direction: column;
  background-color: #363537;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  animation: 1s ${fadeInAnimation};
`;
export const Icons = styled.span`
  color: #2fbf71;
  transition: all ease 0.3s;
`;
export const Error = styled(ProductStyle)`
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
