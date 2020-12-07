
import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Body, Input, Header, Button} from '../../../styles'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Font} from './styles'

class Login extends React.Component {
    handleClick(user) {
        user == "studant" ? (
            document.location.href = "/choose/login"
        ):(
            document.location.href = "/choose/register"
        )
    }
    render(){
        return(
            <Container>
              <Div>
                  <Div2>
                      <Header style={{display:"flex", justifyContent:"center"}}>
                          <div style={{backgroundColor:"#ffcc13", width:"50%", textAlign:"center", padding:"20px", 
                              borderRadius:"100%", height:"100%", marginTop:"30px"}}>
                                  <FontAwesomeIcon icon={faHouseUser} color="white" size="7x" style={{marginTop:"20px"}}/>
                          </div>
                          {/* <FontAwesomeIcon icon={faImages} color="#993399" size="10x" style={{marginTop:"15px"}}/> */}
                      </Header>
                      <div style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                          <Font>Republish</Font>
                      </div>
                      <Body>
                          
                              <div>   
                                    <Button style={{color:"white", fontSize:"1.2rem", width:"70%", height:"calc(2.65rem + 2px)", 
                                      marginLeft: "15%", backgroundColor:"rgb(0, 235, 132)", cursor:"pointer"}}
                                      onClick={() => this.handleClick("studant")}>ENTRAR</Button>
                                    <Button style={{color:"white", fontSize:"1.2rem", width:"70%", height:"calc(2.65rem + 2px)", 
                                      marginLeft: "15%", backgroundColor:"rgb(0, 235, 132)", cursor:"pointer", marginTop:"40px"}}
                                      onClick={() => this.handleClick("republic")}>CADASTRAR</Button>
                              </div>
                          
                      </Body>
                  </Div2>
              </Div>
              </Container>
          )
    }
}

export default Login;