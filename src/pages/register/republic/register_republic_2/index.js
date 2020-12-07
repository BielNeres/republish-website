import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Body, Input, Button} from '../../../../styles'
import HeaderClass from '../../../../containers/Header/index'

const Register = () => {
    return (
        <Container>
        <Div>
            <Div2 style={{height:"850px"}}>
                <HeaderClass/>
                <Body style={{marginTop:"30px"}}>
                    <form action="submit" method="POST">
                        <div>   
                            <Input type="text" placeholder="Nome"></Input>
                            <Input type="text"  placeholder="Idade"></Input>
                            <Input type="text" placeholder="Sexo"></Input>
                            <Input type="text" placeholder="RG"></Input>
                            <Input type="text" placeholder="CPF"></Input>
                            <Input type="text" placeholder="E-mail"></Input>
                            <Input type="text" placeholder="Senha"></Input>
                            <Input type="text" placeholder="Confirmar Senha"></Input>
                            <Button style={{color:"white", fontSize:"1.2rem"}}
                            type="submit" >CADASTRAR</Button>
                        </div>
                    </form>
                </Body>
            </Div2>
        </Div>
    </Container>
       
    )
}

export default Register
