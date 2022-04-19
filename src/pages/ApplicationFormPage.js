import { BASE_URL, axiosConfig, successMessage, errorMessage } from '../helpers';
import React, { useState } from 'react';
import { Input, Select, Textarea } from '@chakra-ui/react';
import { BoxButton, ButtonComponent, ButtonGoBack, MainContainer, Container, Title } from '../components'
import axios from 'axios';
import { useRequestData } from '../hooks/useRequestData';
import useForm from '../hooks/useForm'

export const ApplicationFormPage = () => {
  const { form, onChange } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  })
  const [tripId, setTripId] = useState('')
  
  const onChangeTripId = ({ target }) => setTripId(target.value)

  const ApplicationFormCandidate = (event, id) => {
    event.preventDefault()
    axios
      .post(`${BASE_URL}/trips/${id}/apply`, form, axiosConfig)
      .then(async () => {
          await successMessage(`Aplicação enviada com sucesso!`)
          window.location.reload()

      })
      .catch(err => {
        errorMessage(err, "Algo deu errado ao enviar sua aplicação!")
      })
  }

  const tripList = useRequestData(`${BASE_URL}/trips`, [])

  const listCountry = useRequestData('https://servicodados.ibge.gov.br/api/v1/paises', [])

  return (

    <MainContainer>
      <Container>
        <Title>Formulário de aplicação</Title>

        <Select m='3' onChange={onChangeTripId} bg='white'>
          <option value="">Escolha seu destino</option>
          {tripList.trips && tripList.trips.map(tripDestination => (
            <option key={tripDestination.id} value={tripDestination.id}>
              {tripDestination.name}
            </option>
          ))}
        </Select>
        <form onSubmit={(event) => ApplicationFormCandidate(event, tripId)}>
          <Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder='Nome'
            m='3'
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
            color='white'
          />
          <Input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder='Idade'
            m='3'
            required
            type={"number"}
            min={18}
            color='white'
          />
          <Select m='3' onChange={onChange} name={"country"} bg='white'>
            <option value="">País</option>
            {listCountry && listCountry.map(pais => (
              <option key={pais.id.M49} value={pais.nome.abreviado}>
                {pais.nome.abreviado}
              </option>
            ))}
          </Select>

          <Input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder='Profissão'
            m='3'
            required
            pattern={"^.{10,}"}
            title={"A profissão deve ter no mínimo 10 letras"}
            color='white'
          />
          <Textarea
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder='Pq vc merece ir na viagem?'
            m='3'
            required
            color='white'
          />
          <BoxButton>
            <ButtonComponent type="submit" textButton='Enviar' />
            <ButtonGoBack />
          </BoxButton>
        </form>
      </Container>
    </MainContainer>
  )
}

