import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Body, Input, Button} from '../../../../styles'
import HeaderClass from '../../../../containers/Header/index'
import api from '../../../../components/api'

class Register extends React.Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {name: '', age:'',male:'',doc:'',cpf:'',cepFac:'',email:'',password:'',password2:''}
    }

    handleSubmit(event) {
        event.preventDefault();
        document.location.href = "/register/republic/step/2"
        // const {name, age, male, doc, cpf, cepfac, email, password} = this.state;
        
        // api.post('/Locadors/NovoLocador', { 
        // nmLocatario: name, 
        // cdRG: doc,
        // cdCPF:cpf,
        // dsIdade:parseInt(age),
        // dsSexo:male,
        // dsSenha:password,
        // dsEmail:email,
        // })
        // .then(function(response){
        //     document.location.href = "/register/republic/step/2" 
        // })
        // .catch(error => {
        //     console.log(error)
        // });
    }

    handleTextChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        });     
    }

    render(){
        return (
            <Container>
            <Div>
                <Div2 style={{height:"850px"}}>
                    <HeaderClass/>
                    <Body style={{marginTop:"30px"}}>
                    <form action="submit" method="POST" onSubmit={this.handleSubmit}>
                                    <div>   
                                        <Input onChange={ this.handleTextChange } name="name" value={ this.state.name } 
                                        type="text" placeholder="Nome"></Input>
                                        <Input onChange={ this.handleTextChange } name="age" value={ this.state.age } 
                                        type="text"  placeholder="Idade"></Input>
                                        <Input onChange={ this.handleTextChange } name="male" value={ this.state.male } 
                                        type="text" placeholder="Sexo"></Input>
                                        <Input onChange={ this.handleTextChange } name="doc" value={ this.state.doc } 
                                        type="text" placeholder="RG"></Input>
                                        <Input onChange={ this.handleTextChange } name="cpf" value={ this.state.cpf } 
                                        type="text" placeholder="CPF"></Input>
                                        <Input onChange={ this.handleTextChange } name="email" value={ this.state.email } 
                                        type="text" placeholder="E-mail"></Input>
                                        <Input onChange={ this.handleTextChange } name="password" value={ this.state.password } 
                                        type="password" placeholder="Senha"></Input>
                                        <Input onChange={ this.handleTextChange } name="password2" value={ this.state.password2 } 
                                        type="password" placeholder="Confirmar Senha"></Input>
                                        <Button style={{color:"white", fontSize:"1.2rem"}}
                                        type="submit" value="send">CADASTRAR</Button>
                                    </div>
                                </form>
                    </Body>
                </Div2>
            </Div>
        </Container>
       
    )}
}

export default Register
