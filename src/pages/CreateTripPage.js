import { BASE_URL, axiosConfigWithAuth, successMessage, errorMessage } from '../helpers';
import React from 'react';
import { BoxButton, ButtonComponent, ButtonGoBack, MainContainer, Container, Title } from '../components';
import { Input, Select } from '@chakra-ui/react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage';


export const CreateTripPage = () => {
  useProtectedPage()

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })

  const planetsList = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"]

  const creatTrip = (event) => {
    event.preventDefault()

    axios
      .post(`${BASE_URL}/trips`, form, axiosConfigWithAuth)
      .then(res => {
        successMessage(`${res.data.trip.name} foi criada com sucesso`)
        cleanFields()
      })
      .catch(err => errorMessage(err, "Algo deu errado ao criar sua viagem!"))
  }

  return (
    <MainContainer>
      <Container>
        <Title>Criar uma nova viagem</Title>
        <form onSubmit={creatTrip}>
          <Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder='Nome'
            m='3'
            required
            pattern={"^.{5,}"}
            title={"O nome da viagem deve ter no mínimo 5 letras"}
            color='white'
          />
          
          <Select m='3' onChange={onChange} name="planet" bg='white'>
            <option value="">Escolha o destino</option>
            {planetsList.map((planetItem) => {
              return (
                <option key={planetItem} value={planetItem} required> {planetItem} </option>
              )
            })}
          </Select>

          <Input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder='Data'
            m='3'
            required
            type={"date"}
            color='white'
          />

          <Input
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder='Descrição'
            m='3'
            required
            pattern={"^.{30,}"}
            title={"A descrição deve ter no mínimo 30 letras"}
            color='white'

          />
          <Input
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            placeholder='Duração em dias'
            m='3'
            required
            type={"number"}
            color='white'
            min={50}
          />
          <BoxButton>
            <ButtonComponent type='submit' textButton="Criar" />
            <ButtonGoBack />
          </BoxButton>
        </form>
      </Container>
    </MainContainer>
  )
}
