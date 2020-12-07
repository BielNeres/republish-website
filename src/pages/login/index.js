import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../styles'
import HeaderClass from '../../containers/Header/index'

let Login = () => {
    return(
      <Container>
      <Div>
          <Div2 style={{height:"700px"}}>
              <HeaderClass/>
              <Body style={{marginTop:'30px'}}>
                  <form action="submit" method="POST">
                      <div>   
                          <Input type="text" placeholder="E-mail"></Input>
                          <Input type="text"  placeholder="Senha"></Input>
                          <Button style={{color:"white", fontSize:"1.2rem", marginTop:"80px"}}
                          type="submit" >ENTRAR</Button>
                      </div>
                  </form>
              </Body>
          </Div2>
      </Div>
  </Container>
    )
}

export default Login;