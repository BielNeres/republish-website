import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../../../styles'
import {Font} from './styles'
import { faCamera, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends React.Component {
    handleClick() {

        document.location.href = "/register/republic/picture/perfil"     

    }

    render(){
        return (
            <Container>
            <Div>
                <Div2>
                    <Header style={{display:"flex", justifyContent:"center"}}>
                        <FontAwesomeIcon icon={faImages} color="#993399" size="5x" style={{marginTop:"15px"}}/>
                    </Header>
                    <div style={{width:"80%", marginLeft:"8%"}}>
                        <Font>Vamos precisar de uma foto da sua identidade</Font>
                    </div>
                    <Body>
                        <div style={{backgroundColor:"#ffcc13", width:"25%", textAlign:"center", padding:"20px", 
                        borderRadius:"100%", height:"25%", marginTop:"30px", marginLeft: '32%', cursor:"pointer"}}>
                            <FontAwesomeIcon icon={faCamera} color="white" size="3x" style={{marginTop:"15px"}}/>
                        </div>
                        <Button style={{color:"white", fontSize:"1.2rem", marginTop:"20%"}}
                            type="submit" onClick={() => this.handleClick()}>CONTINUAR</Button>
                    </Body>
                </Div2>
            </Div>
        </Container>
        
        )
    }
}

export default Register