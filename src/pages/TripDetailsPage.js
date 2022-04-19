import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL, axiosConfigWithAuth, errorMessage, successMessage } from '../helpers';
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useParams } from 'react-router-dom';
import {
  ButtonGoBack,
  Loader,
  CardTrips,
  MainContainer,
  Container,
  Title,
  BoxButton,
  ButtonComponent,
  MainTable
} from '../components'
import { useHistory } from "react-router-dom";

export const TripDetailsPage = () => {
  useProtectedPage()

  const [trip, setTrip] = useState({})
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => getTrip(id), [id])

  const goToHome = () => history.push("/")

  const getTrip = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/trip/${id}`, axiosConfigWithAuth)
    setTrip(data.trip)
  }

  const decideCandidate = (tripId, candidateId, isApproved) => {
    const body = { approve: isApproved }
    axios
      .put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, axiosConfigWithAuth)
      .then(async () => {
        await successMessage(`${isApproved ? "Aprovado" : "Reprovado"} com sucesso`)
        getTrip(tripId)
      })
      .catch(err => errorMessage(err, "Houve um erro ao mediar a inscrição."))
  }
  const candidatesPedents = trip.candidates && trip.candidates.map((candidate) => {
    candidate.tripId = trip.id
    return candidate
  })

  const confirmedCandidates = trip.approved && trip.approved.map((candidateApproved) => {
    candidateApproved.tripId = trip.id
    return candidateApproved
  })

  if (!trip) return <Loader />
  return (
    <MainContainer>
      <Container>
        <Title>Detalhes da viagem</Title>
        <CardTrips
          nameTrip={trip.name}
          planet={trip.planet}
          date={trip.date}
          description={trip.description}
          durationInDays={trip.durationInDays}
        />
        <MainTable
          title='Candidados Pendentes'
          bodyTable={candidatesPedents}
          showOptions={true}
          decideCandidate={decideCandidate}
        />
        <MainTable
          title='Viajantes confirmados'
          bodyTable={confirmedCandidates}
          showOptions={false}
        />
        <BoxButton>
          <ButtonComponent onClick={goToHome} textButton='Página Inicial'/>
          <ButtonGoBack />
        </BoxButton>
      </Container>
    </MainContainer>
  )
}