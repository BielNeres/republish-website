
import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Body, Input, Header} from '../../../styles'
import { faHouseUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Font} from './styles'

class Login extends React.Component {
    handleClick(user) {
        user == "studant" ? (
            document.location.href = "/register/user"
        ):(
            document.location.href = "/register/republic/step/1"
        )

    }
    render(){
            return(
                <Container>
                <Div>
                    <Div2>
                        <Header style={{display:"flex", justifyContent:"center"}}>
                        </Header>
                        <div style={{width:"100%", marginTop:"10%"}}>
                            <Font>Você gostaria de cadastrar-se como</Font>
                        </div>
                        <Body>
                                <div style={{display:"flex"}}>   
                                    <div style={{backgroundColor:"#ffcc13", width:"50%", textAlign:"center", padding:"20px", 
                                            borderRadius:"10%", height:"100%", marginTop:"30px",
                                             cursor:"pointer"}} onClick={() => this.handleClick("studant")}>
                                        <FontAwesomeIcon icon={faUser} color="white" size="7x" style={{marginTop:"20px"}}/>
                                        <Font style={{color:"white"}} onClick={() => this.handleClick("studant")}>Estudante</Font>
                                    </div>
                                    <div style={{backgroundColor:"rgb(0, 235, 132)", width:"50%", textAlign:"center", padding:"20px", 
                                            borderRadius:"10%", height:"100%", marginTop:"30px", marginLeft:"30px", 
                                            cursor:"pointer"}} onClick={() => this.handleClick("republic")}>
                                        <FontAwesomeIcon icon={faHouseUser} color="white" size="7x" style={{marginTop:"20px"}}/>
                                        <Font style={{color:"white"}}>Republica</Font>
                                    </div>
                                </div>
                        </Body>
                    </Div2>
                </Div>
                </Container>
            )
    }
}

export default Login;