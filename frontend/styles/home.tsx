import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  height: 100%;
`;

export const LandingPage = styled.div`
  min-height: 100vh;
`;

export const Main = styled.div`
  flex: 1;
  padding: 0;// 15px;
`;

export const NavBar = styled.div`
  padding: 15px;
  margin-left: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BrandName = styled.div`
  font-size: 1.4rem;
  /* color: ; */
`;

export const Menu = styled.div`
`;


export const Footer = styled.div`
  /* flex: initial; */
  padding: 10px;
  font-size: 1.2rem;
  color: #eee;//#222;
  text-align: center;
  /* border-top: 1px solid #eee; */
  bottom: 0;
`;


export const Title = styled.h4`
  display: block;
  font-size: 4.4rem;
  margin: 0px;
  color: #000;
`;
export const SubTitle = styled.p`
  display: block;
  font-size: 1.8rem;
  color: #f3f2f2;
  text-align: center;
`;
export const Content = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url('/images/sea_view.png');
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const Header = styled.header`
  background-image: url('/sea_view.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Grid = styled.div`
  background-color: rgba(189, 185, 183, 0.6);
  border-radius: 15px;
  padding: 80px;
`;