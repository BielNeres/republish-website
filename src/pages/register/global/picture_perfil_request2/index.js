import React from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../../../styles'
import {Font} from './styles'
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from '../../../../components/api'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        

        document.location.href = "/register/republic/description"
        // api.put('Locadors/AtualizarDados', {
        //     cdLocador: 1,
        //     nmLocador: 'teste', 
        //     cdRG: '123456789',
        //     cdCPF:'75286557082',
        //     dsIdade:20,
        //     dsSexo:"M",
        //     dsSenha:"123456",
        //     dsEmail:"aviao@aviao.com",
        //     dsTelefone1:' ',
        //     dsTelefone2:' ',
        //     imgPerfil: `${this.fileInput.current.files[0].name}`,
        //     })
        //     .then(function(response){
        //         document.location.href = "/register/republic/description"
        //     })
        //     .catch(error => {
        //         console.log(error)
        // });
    }

    render(){
        return (
            <Container>
            <Div>
                <Div2>
                    <Header style={{display:"flex", justifyContent:"center", height:"100px"}}>
                        <FontAwesomeIcon icon={faUser} color="#993399" size="5x" style={{marginTop:"15px"}}/>
                    </Header>
                    <div>
                        <Font>Agora vamos tirar uma foto para seu perfil</Font>
                    </div>
                    <Body>
                        <div style={{backgroundColor:"#ffcc13", width:"20%", textAlign:"center", padding:"20px", 
                        borderRadius:"100%", height:"20%", marginTop:"10px", marginLeft: '34%', cursor:"pointer"}}>
                            <FontAwesomeIcon icon={faCamera} color="white" size="3x" style={{marginTop:"15px"}}/>
                        </div>
                        <div style={{borderBottom:"2px solid white", position:"relative", display:"flex", top:'15%', width:"40%"}}></div>
                        <div style={{borderBottom:"2px solid white", position:"relative", display:"flex", top:'15%', width:"40%", float:"right"}}></div>
                        <h3 style={{color:"grey", display:"flex", justifyContent:"center", position:"relative", top:"8%", fontSize:"18px"}}>OU</h3>
                        <div style={{marginTop:"20%"}}>
                            <form onSubmit={this.handleSubmit}>
                                <Input name="inputClick" type="file" ref={this.fileInput} style={{cursor:"pointer", width:"115%", marginLeft:"-15%"}}></Input>
                                <Button style={{color:"white", fontSize:"1.2rem", marginTop:"20%"}}
                                    type="submit">CONTINUAR</Button>
                            </form>
                        </div>
                    </Body>
                </Div2>
            </Div>
        </Container>
        
        )
    }
}

export default Register