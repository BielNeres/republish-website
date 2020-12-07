import React from 'react'
import { Redirect } from 'react-router-dom'
import DashBoard from '../../../containers/DashBoard/index'
import Footer from '../../../containers/Footer/index'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../../styles'
import { faBuilding, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Home extends React.Component {
  handleClick() {

      document.location.href = "/user/message"     

  }
  
  render(){

    return(
      <Container>
        <DashBoard />
          <Div style={{height:"750px"}}>
              <Div2 style={{width:"80%", height:"100%"}}>
                <Header style={{display:"flex", justifyContent:"center", flexWrap:"wrap", height:"100%"}}>
                  <div onClick={() => this.handleClick()} style={{textAlign:"center", marginRight:"20px", borderRadius:"10%", border:"1px solid rgba(0,0,0,.125)", height:"30%", 
                  padding:"50px", boxShadow:"1px 1px 10px grey !important", cursor:"pointer", maxWidth:"15%"}}>
                  <FontAwesomeIcon style={{marginBottom:"10%"}} icon={faBuilding} color="orange" size="6x"/>
                  <p><b>Republica do Dennys</b></p>
                  <p style={{fontSize:"12px", color:"grey"}}>AAAAAA não aguento mais cara aaaaaaaaaaaaaaaaa  aaaaaaaa aaaaaaaaaaaa...</p>
                  <div style={{display:"flex", float:"right", marginTop:"5%"}}>
                    <b style={{fontSize:"14px"}}><FontAwesomeIcon style={{marginRight:"10px"}} icon={faUserAlt} color="green" size="1x"/>Online</b>
                  </div>
                  </div>
                </Header>
              </Div2>
          </Div>
      </Container>
    )
  }
}

export default Home;