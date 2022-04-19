import React from 'react';
import { ButtonComponent, MainContainer, BoxButton, Container } from '../components';
import { useHistory } from "react-router-dom";

export const HomePage = () => {
  const history = useHistory()

  const goToListTrips = () => history.push("/trips/list")

  const goToLogin = () => history.push("/login")

  return (
    <MainContainer>
      <Container>
        <BoxButton>
          <ButtonComponent onClick={goToListTrips} textButton='Conferir Viagens'/>
          <ButtonComponent onClick={goToLogin} textButton='Área Admin'/>
        </BoxButton>
      </Container>
    </MainContainer>
  )
}
