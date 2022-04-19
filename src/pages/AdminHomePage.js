import { axiosConfigWithAuth, BASE_URL, clearToken, successMessage, errorMessage } from '../helpers';
import { Title, ButtonComponent, Loader, MainContainer, BoxButton, Container, CardTripAdmin } from '../components';
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useRequestData } from '../hooks/useRequestData';
import React from 'react';
import axios from 'axios';


export const AdminHomePage = () => {
  useProtectedPage()

  const history = useHistory()

  const goTocreateTrip = () => history.push("/admin/trips/create")

  const goToHome = () => history.push("/")

  const logOut = () => {
    clearToken() 
    history.push("/")
  }
  
  const goToTripDetails = (id) => history.push(`/admin/trips/${id}`)

  const tripList = useRequestData(`${BASE_URL}/trips`, {})

  const deleteTrip = (id, name) => {
    axios
    .delete(`${BASE_URL}/trips/${id}`, axiosConfigWithAuth)
    .then(async () => {
      await successMessage(`${name} foi apagada com sucesso!`)
      window.location.reload()
  })
    .catch(err => errorMessage(err, "Algo deu errado ao deletar esta viagem!"))
  } 

  const tripListAdmin = tripList.trips && tripList.trips.map((trip) => {
    return (
      <CardTripAdmin
        key={trip.id}
        destino={trip.name}
        goToTripDetails={() => goToTripDetails(trip.id)} 
        deleteTrip={() => deleteTrip(trip.id, trip.name)}
        />
    )
  })

  if (!tripListAdmin) return <Loader/>
  return (
    <MainContainer>
      <Container>
        <Title>Administrar viagens</Title>
        {tripListAdmin}
        <BoxButton>
          <ButtonComponent onClick={goTocreateTrip} textButton="Criar Viagem" />
          <ButtonComponent onClick={logOut} textButton="Logout" />
          <ButtonComponent onClick={goToHome} textButton="Voltar" />
        </BoxButton>
      </Container>
    </MainContainer>
  )
}
