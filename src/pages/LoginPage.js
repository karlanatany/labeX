import { BASE_URL, errorMessage, getToken, setToken } from '../helpers';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '@chakra-ui/react';
import axios from 'axios';
import { ButtonComponent, ButtonGoBack, MainContainer, Container, Title, BoxButton } from '../components'
import useForm from '../hooks/useForm';

export const LoginPage = () => {
  const history = useHistory()

  if ( getToken() ){
    history.push('/admin/trips/list')
  }

  const { form, onChange } = useForm({
    email: "karlanatany3@gmail.com",
    password: "281093"
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    axios
      .post(`${BASE_URL}/login`, form)
      .then(({ data }) => {
        setToken(data.token)
        history.push('/admin/trips/list')
      })
      .catch(err => errorMessage(err, 'Login ou Senha incorretos'))   
  }

  return (
    <MainContainer>
      <Container>
        <Title> Página de login</Title>

        <form onSubmit={onSubmitLogin} >
          <Input
            name={'email'}
            value={form.email}
            onChange={onChange}
            placeholder={'email'}
            m='3'
            type={"email"}
            required
            color='white'
          />

          <Input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={'senha'}
            m='3'
            pattern={"^.{6,}"}
            title={"A senha deve ter no mínimo 6 caracteress"}
            required
            type={"password"}
            color='white'
          />

          <BoxButton>
            <ButtonComponent type="submit" textButton="Entrar" />
            <ButtonGoBack />
          </BoxButton>
        </form>
      </Container>
    </MainContainer>
  )
}


