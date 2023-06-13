import React, { useState, useEffect, useRef } from 'react';
import Head from "next/head";
import { Button } from "@taikai/rocket-kit";
import { useWeb3 } from "../hooks/useWeb3";
import { Container, LandingPage, Main, NavBar, BrandName, Menu, Footer, Title, SubTitle, Content, Grid } from "../styles/home";
import ConnectModal from "../components/connect-wallet-modal";
import ClickableEthAddress from "../components/clickable-eth-address";
import Caroussel from "../components/caroussel";
import MenuSection from "../components/MenuSection";
import CardContainer from '@/components/CardContainer';

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const { connected } = useWeb3();
  const [isConnectModal, setConnectModal] = useState(false);

  const [isSection2Active, setIsSection2Active] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1Height = document?.getElementById('section1').offsetHeight;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      setIsSection2Active(scrollPosition >= section1Height);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container ref={section1Ref}>
      <LandingPage id="section1">
        <Head>
          <title>DECENTRALIZED ESTATE</title>
          <meta name="description" content="Decentralized real estate tokenization" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar>
          <BrandName>DECENTRALIZED ESTATE</BrandName>
          <Menu>
            {!connected && (
              <Button
                ariaLabel="Connect"
                className="button"
                color="green"
                value="Connect"
                variant="solid"
                action={() => setConnectModal(true)}
              />
            )}
            {connected && <ClickableEthAddress onClick={() => setConnectModal(true)} />}
          </Menu>
        </NavBar>
        {isConnectModal && <ConnectModal onClose={() => setConnectModal(false)} />}
        <Main>
          <Content>
            <Grid>
              <Title>DECENTRALIZED ESTATE</Title>
              <SubTitle>La primera inmobiliaria descentralizada de España 🚀</SubTitle>
            </Grid>
          </Content>
          <Caroussel />

        </Main>
        <Footer>Made with ❤️ by The <strong>Winning TEAM</strong> - 2023</Footer>
      </LandingPage>

      <CardContainer />
      {/* <MenuSection active={isSection2Active} /> */}
    </Container>
  );
}