//ter o botão se inscrever em cada viagem e já ir a viagem para o application form.
import { BASE_URL } from '../helpers';
import React from 'react';
import { useHistory } from "react-router-dom";
import { useRequestData } from '../hooks/useRequestData'
import styled from 'styled-components';
import { ButtonComponent, ButtonGoBack, CardTrips, MainContainer, Container, Title, BoxButton, Loader} from '../components'

const ContainerTripList = styled.div`
display: flex;
flex-direction:row;
max-width: 1280px;
min-height: 50vh;
justify-content: center;
align-items: center;
flex-wrap: wrap;
column-gap: 15px;
row-gap: 15px;
`
export const ListTripsPage = () => {
  const history = useHistory()

  const goToApplicationTrip = () => history.push("/trips/application")

  const tripList = useRequestData(`${BASE_URL}/trips`, {})

  const tripListComponent = tripList.trips && tripList.trips.map((tripChoice) => {
    return (
      <CardTrips
        key={tripChoice.id}
        nameTrip={tripChoice.name}
        planet={tripChoice.planet}
        date={tripChoice.date}
        description={tripChoice.description}
        durationInDays={tripChoice.durationInDays}
        goToApplicationTrip={goToApplicationTrip}/>
    )
  })
  
  if (!tripListComponent) return <Loader/>
  return (
    <MainContainer>
      <Container>
        <Title>Viagens programadas</Title>

        <ContainerTripList>
          {tripListComponent}
        </ContainerTripList>
        <BoxButton>
          <ButtonGoBack />
          <ButtonComponent onClick={goToApplicationTrip} textButton='Quero me inscrever' />
        </BoxButton>
      </Container>
    </MainContainer>
  )
}


