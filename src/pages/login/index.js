import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../styles'
import HeaderClass from '../../containers/Header/index'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {email:'',password:''}
    }
    handleSubmit(event) {
        event.preventDefault();
        const { email, password} = this.state;

        console.log(email)
        console.log(password)
        
    //    api.post('/Locatario/NovoLocatario', { 
    //     nmLocatario: name, 
    //     cdRG: doc,
    //     cdCPF:cpf,
    //     dsIdade:parseInt(age),
    //     dsSexo:male,
    //     dsSenha:password,
    //     dsEmail:email,
    //     dsTelefone1:' ',
    //     dsTelefone2:' ',
    //     imgPerfil: ' ',
    //     })
    //     .then(function(response){
    //         document.location.href = "/register/picture/doc"   
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
        document.location.href = "/home"   
    }

    handleTextChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        });     
    }
    render(){
            return(
                <Container>
                    <Div>
                        <Div2 style={{height:"700px"}}>
                            <HeaderClass/>
                            <Body style={{marginTop:'30px'}}>
                                <form onSubmit={this.handleSubmit}>
                                    <div>   
                                        <Input onChange={ this.handleTextChange } name="email" value={ this.state.email } 
                                        type="text" placeholder="E-mail"></Input>
                                        <Input onChange={ this.handleTextChange } name="password" value={ this.state.password } 
                                        type="password" placeholder="Senha"></Input>
                                        <Button style={{color:"white", 
                                            fontSize:"1.2rem", marginTop:"80px"}}
                                        type="submit" >ENTRAR</Button>
                                    </div>
                                </form>
                            </Body>
                        </Div2>
                    </Div>
                </Container>
            )
    }
}

export default Login;
