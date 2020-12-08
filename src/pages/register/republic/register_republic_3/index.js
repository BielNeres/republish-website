import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Body, Input, Button, TextArea, Header} from '../../../../styles'
import HeaderClass from '../../../../containers/Header/index'
import {Font} from './styles'
import api from '../../../../components/api'

class Register extends React.Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.fileInput = React.createRef();
        this.state = {name: '', age:'',male:'',doc:'',cpf:'',cepFac:'',email:'',
        password:'',password2:''}
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, age, male, doc, cpf, cepfac, email, password, password2} = this.state;
        
       api.post('/Republica/NovaRepublica', { 
        cdLocador: 1, 
        cdCEP: name,
        dsEndereco:age,
        dsNumero:male,
        dsComplemento:' ',
        dsSenha:password,
        dsTipo:password2,
        dsDescricao:' ',
        imgFoto1:`${this.fileInput.current.files[0].name}`,
        imgFoto2: ' ',
        imgFoto3: ' ',
        imgFoto4: ' '
        })
        .then(function(response){
            document.location.href = "/register/republic/picture/doc"   
        })
        .catch(error => {
            console.log(error)
        });
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
                    <Header>
                    </Header>
                    <Body>
                    <form action="submit" method="POST" onSubmit={this.handleSubmit}>
                        <div>   
                            <Font>Adicione a foto da sua republica</Font>
                            <Input name="inputClick" type="file" ref={this.fileInput} style={{cursor:"pointer", width:"115%", marginLeft:"-15%"}}></Input>
                            <Input onChange={ this.handleTextChange } name="name" value={ this.state.name } 
                            type="text" placeholder="CEP"></Input>
                            <Input onChange={ this.handleTextChange } name="age" value={ this.state.age } 
                            type="text"  placeholder="Endereço"></Input>
                            <Input onChange={ this.handleTextChange } name="male" value={ this.state.male } 
                            type="text" placeholder="Número"></Input>
                            <Input onChange={ this.handleTextChange } name="doc" value={ this.state.doc } 
                            type="text" placeholder="Metros ²"></Input>
                            <Input onChange={ this.handleTextChange } name="cpf" value={ this.state.cpf } 
                            type="text" placeholder="N² de vagas"></Input>
                            <Input onChange={ this.handleTextChange } name="password2" value={ this.state.password2 } 
                            type="text" placeholder="Tipo de imovel"></Input>
                            <TextArea type="text" placeholder="Descrição da republica" 
                            style={{width:"80%", marginLeft:"8%", borderStyle:"solid", fontSize:"14px", textAlign:"start", paddingBottom:"80%"}}></TextArea>
                            <Input onChange={ this.handleTextChange } name="password" value={ this.state.password } 
                            type="text" placeholder="Valor Mensal"></Input>
                            <Button style={{color:"white", fontSize:"1.2rem"}}
                            type="submit" value="send">CONTINUAR</Button>
                        </div>
                    </form>
                    </Body>
                </Div2>
            </Div>
        </Container>
       
    )}
}

export default Register
