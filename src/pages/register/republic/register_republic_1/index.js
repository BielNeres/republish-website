import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../../../styles'
import {Font} from './styles'

const Register = () => {
    return (
        <Container>
        <Div>
            <Div2>
                <Header>
                </Header>
                <Font>Preecha o cadastro da sua republica</Font>
                <Body>
                <form action="submit" method="POST">
                    <div>   
                        <Input type="text" placeholder="CEP"></Input>
                        <Input type="text"  placeholder="Endereço"></Input>
                        <Input type="text" placeholder="Número"></Input>
                        <Input type="text" placeholder="Complemento"></Input>
                        <Input type="text" placeholder="Tipo de Imóvel"></Input>
                        <Button style={{color:"white", fontSize:"1.2rem"}}
                        type="submit">CONTINUAR</Button>
                    </div>

                </form>
                </Body>
            </Div2>
        </Div>
    </Container>
       
    )
}

export default Register
