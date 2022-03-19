import styled from "styled-components";
export const Buttons = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 1.2rem 2rem;
  border-radius: 24rem;
  transition: all ease 0.2s;
  background-color: #2fbf71;

  &:hover {
    filter: brightness(1.2);
  }
`;
export const BubbleCart = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  position: absolute;
`;
export const BubbleCount = styled.span`
  color: #2b2d42;
  font-weight: bold;
  border-radius: 24rem;
  padding: 0.2rem 0.6rem;
  background-color: #edf2f4;
`;
export const ProductList = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.2rem solid #edf2f4;

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
export const ProductStyle = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  padding: 4rem;
  border-radius: 0.4rem;
  flex-direction: column;
  background-color: #2b2d42;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
export const Icons = styled.span`
  color: #2fbf71;
  transition: all ease 0.2s;
`;
export const Error = styled(ProductStyle)`
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
