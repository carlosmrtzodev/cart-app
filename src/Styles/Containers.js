import styled from "styled-components";
export const NavBar = styled.nav`
  height: 10rem;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 4rem;
  justify-content: center;
  background-color: #2b2d42;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2.5rem 5rem -1.2rem;

  @media screen and (max-width: 768px) {
    height: 14rem;
  }
`;
export const Relative = styled.div`
  position: relative;
`;
export const Details = styled.ul`
  right: 0;
  top: 6rem;
  width: 24rem;
  padding: 2rem;
  position: absolute;
  border-radius: 0.4rem;
  background-color: #2fbf71;
  box-shadow: rgba(0, 0, 0, 0.25) 0rem 2.5rem 5rem -1.2rem;

  @media screen and (max-width: 768px) {
    right: -3.8rem;
  }
`;
export const LayoutContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 14rem);
`;
export const ProductStyles = styled.section`
  gap: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Container = styled.article`
  gap: 4rem;
  width: 75%;
  display: flex;
  flex-direction: column;
`;
export const ContainerNavBar = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    gap: 0.8rem;
    flex-direction: column;
  }
`;
export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    gap: 2rem;
    align-items: flex-start;
    flex-direction: column;
  }
`;
