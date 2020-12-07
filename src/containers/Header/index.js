import React, {Component} from 'react';
import {Header, Button} from '../../styles'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderClass extends Component {
    render(){
        return(
            <Header style={{height:"40%"}}>
                <div style={{position:"relative", display:"flex", top:"55%"}}>   
                    <div style={{width:'100%'}}>
                        <Button style={{width:"80%", backgroundColor:"#4267B2", color:'white', marginLeft:"8%"}}>
                            <FontAwesomeIcon icon={faFacebook} color="white" style={{marginRight:"2px"}}/> Entrar com Facebook</Button>
                        <Button style={{width:"80%", backgroundColor:"#EA4335", color:'white', marginLeft:"8%"}}>
                            <FontAwesomeIcon icon={faGoogle} color="white" style={{marginRight:"10px"}}/>Entrar com Google</Button>
                    </div>
                </div>
                <div style={{borderBottom:"2px solid white", position:"relative", display:"flex", top:'70%', width:"40%"}}></div>
                <div style={{borderBottom:"2px solid white", position:"relative", display:"flex", top:'70%', width:"40%", float:"right"}}></div>
                <h3 style={{color:"grey", display:"flex", justifyContent:"center", position:"relative", top:"60%", fontSize:"18px"}}>OU</h3>
            </Header>
        )
    }
}

export default HeaderClass;