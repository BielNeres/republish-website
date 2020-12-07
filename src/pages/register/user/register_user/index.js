import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Body, Input, Button} from '../../../../styles'
import HeaderClass from '../../../../containers/Header/index'
import { useState } from "react";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {name: '', age:'',male:'',doc:'',cpf:'',cepFac:'',email:'',password:'',password:''}
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    handleTextChange(event) {
        this.setState({name: event.target.value});      
    }
    handleClick() {

        document.location.href = "/register/picture/doc"     

    }
    render(){
            return(
                <Container>
                    <Div>
                        <Div2 style={{height:"900px"}}>
                            <HeaderClass/>
                            <Body style={{marginTop:"30px"}}>
                                <form action="submit" method="POST" onSubmit={this.handleSubmit}>
                                    <div>   
                                        <Input onChange={ this.handleTextChange } value={ this.state.name } type="text" placeholder="Nome"></Input>
                                        <Input value={ this.state.age } type="text"  placeholder="Idade"></Input>
                                        <Input value={ this.state.male } type="text" placeholder="Sexo"></Input>
                                        <Input value={ this.state.doc } type="text" placeholder="RG"></Input>
                                        <Input value={ this.state.cpf } type="text" placeholder="CPF"></Input>
                                        <Input value={ this.state.cepFac } type="text" placeholder="CEP da faculdade"></Input>
                                        <Input value={ this.state.email } type="text" placeholder="E-mail"></Input>
                                        <Input value={ this.state.password } type="text" placeholder="Senha"></Input>
                                        <Input value={ this.state.password2 } type="text" placeholder="Confirmar Senha"></Input>
                                        <Button style={{color:"white", fontSize:"1.2rem"}}
                                        type="submit" value="send" onClick={() => this.handleClick()}>CADASTRAR</Button>
                                    </div>
                                </form>
                            </Body>
                        </Div2>
                    </Div>
                </Container>
            )
    }
}

export default Register
