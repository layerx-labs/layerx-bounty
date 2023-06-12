import Head from "next/head";
import { Button, FormGroup, GridCol, GridContainer, GridRow, TextField } from "@taikai/rocket-kit";
import { Container, Main, NavBar, BrandName, Menu, Footer, SubTitle, Content, Test, Title1, Section } from "../styles/home";
import React, { FormEvent, useEffect, useState } from 'react';

// import { deploy_multisig } from  "../../contract/scripts/deploy_multisig"

export default function Admin() {

    

    const createMuliSigContract = async (event: FormEvent) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
    
        const owners = [
            form.wallet_1.value as string,
            form.wallet_2.value as string,
            form.wallet_3.value as string,
        ]

        // let contract_address = await deploy_multisig(owners, 3)
        // console.log(contract_address)
    
    }
  


  return (
    <Container>
      <Head>
        <title>Create a MultiSig Contract</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Content>
          <Section>
            <Title1 className="text-purple text-[46px] ml-[20px] mb-0">Create a MultiSig Contract</Title1>

            <form onSubmit={createMuliSigContract}>
              <GridContainer>
                <GridRow className="pt-5 pb-5">
                <GridCol>
                    <FormGroup label="address #1">
                      <TextField 
                        name="wallet_1"
                        placeholder="Wallet of the owner n°1"
                      />
                    </FormGroup>
                  </GridCol>
                  <GridCol>
                    <FormGroup label="address #2">
                      <TextField 
                        name="wallet_2"
                        placeholder="Wallet of the owner n°2"
                      />
                    </FormGroup>
                  </GridCol>
              </GridRow>
              <GridRow className="pt-5 pb-5">
                  <GridCol>
                    <FormGroup label="address #3">
                      <TextField 
                        name="wallet_3"
                        placeholder="Wallet of the owner n°3"
                      />
                    </FormGroup>
                  </GridCol>
                  <GridCol></GridCol>  
              </GridRow>
              

          </GridContainer>

              <Button
                ariaLabel="Connect"
                className="pt-5"
                value="Create new property"
                variant="solid"
              />

            </form>
          </Section>

        </Content>
      </Main>
    </Container>
  );
}
