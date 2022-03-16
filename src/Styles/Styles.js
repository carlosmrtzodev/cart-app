import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";

const fadeInAnimation = keyframes`${fadeIn}`;
export const NavBar = styled.nav`
  height: 6rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  @media screen and (max-width: 768px) {
    height: 8rem;
  }
`;
export const LogoText = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.6rem;
  animation: 3s ${fadeInAnimation};
`;
export const Relative = styled.div`
  position: relative;
`;
export const Buttons = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  padding: 0.6rem 2rem;
  border-radius: 25rem;
  transition: all ease 0.3s;
  background-color: #f72585;

  &:hover {
    color: #ffffff;
    background-color: #d81159;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const BubbleCart = styled.span`
  left: 0rem;
  top: -0.4rem;
  z-index: 10;
  position: absolute;
`;
export const BubbleCount = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 25rem;
  padding: 0.2rem 0.48rem;
  background-color: #7b2cbf;
`;
export const Details = styled.div`
  right: 0;
  top: 4rem;
  width: 16rem;
  position: absolute;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  background-color: #7b2cbf;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  @media screen and (max-width: 768px) {
    top: 3rem;
    right: -2.7rem;
  }
`;
export const ProductList = styled.li`
  display: flex;
  color: #ffffff;
  padding: 1.4rem 0;
  font-size: 1.2rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #ffffff;

  &:last-child {
    border-bottom: none;
  }
`;
export const LayoutContent = styled.div`
  display: flex;
  margin: 4rem 0;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 14rem);
`;
export const Text = styled.p`
  color: #ffffff;
  font-size: 1.2rem;

  @media screen and (max-width: 1140px) {
    font-size: 1rem;
  }
`;
export const Container = styled.div`
  width: 75%;
`;
export const ContainerFlex = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    gap: 0.4rem;
    flex-direction: column;
  }
`;
export const ProductStyles = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 976px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ProductStyle = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  padding: 1.4rem;
  border-radius: 0.8rem;
  flex-direction: column;
  background-color: #5a189a;
  animation: 3s ${fadeInAnimation};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

export const FlexContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Images = styled.img`
  width: 100%;
  height: auto;
`;
