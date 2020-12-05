import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../styles'
import {Font} from './styles'

const Login = () => {
    return(
      <Container>
        <Div>
            <Div2>
              <Header>
              </Header>
              <Font>
                <h2>Preecha o cadastro da sua republica</h2>
              </Font>
              <Body>
                <form action="submit" method="POST">
                    <Input>
                      <input type="text" placeholder="CEP"></input>
                    </Input>
                    <Input style={{marginTop:"10px"}}>
                      <input type="text" placeholder="Endereço"></input>
                    </Input>
                    <Input style={{marginTop:"10px"}}>
                      <input type="text" placeholder="Número"></input>
                    </Input>
                    <Input style={{marginTop:"10px"}}>
                      <input type="text" placeholder="Complemento"></input>
                    </Input>
                    <Input style={{marginTop:"10px"}}>
                      <input type="text" placeholder="Tipo de Imóvel"></input>
                    </Input>
                    <Button style={{marginTop:"30px"}}>
                      <input onClick={Redirect} style={{backgroundColor:"green", color:"white", fontSize:"1.2rem"}}
                      type="submit" value="CONTINUAR"></input>
                    </Button>
                </form>
              </Body>
            </Div2>
        </Div>
    </Container>
    )
}

export default Login;