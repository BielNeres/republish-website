import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Header, Body, TextArea, Button} from '../../../../styles'
import {Font} from './styles'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends React.Component {
    handleClick() {

        document.location.href = "/home"     

    }
    render(){
        return (
            <Container>
            <Div>
                <Div2 style={{height:"700px"}}>
                    <Header style={{display:"flex", justifyContent:"center"}}>
                        <FontAwesomeIcon icon={faQuestionCircle} color="#993399 " size="5x" style={{marginTop:"15px"}}/>
                    </Header>
                    <div>
                        <Font>Quase feito!</Font>
                        <Font>
                            Agora, caso seja da sua vontade, descreva um pouco mais
                            sobre você. Isso vai deixar ajudar outros usuários a te
                            conhecer melhor!
                        </Font>
                    </div>
                    <Body>
                        <div >
                            <TextArea type="text" placeholder="Fale algo sobre você :)" style={{width:"90%", marginLeft:"3%", 
                                borderStyle:"solid", fontSize:"16px", textAlign:"start", paddingBottom:"80%"}}></TextArea>
                            <Button style={{color:"white", fontSize:"1.2rem"}}
                                type="submit" onClick={() => this.handleClick()}>CONCLUIR</Button>
                        </div>
                    </Body>
                </Div2>
            </Div>
        </Container>
        
        )
    }
}

export default Register