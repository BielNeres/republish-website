import React from 'react'
import { Redirect } from 'react-router-dom'
import DashBoard from '../../../containers/DashBoard/index'
import Footer from '../../../containers/Footer/index'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../../styles'
import { faBuilding, faMapMarkerAlt, faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends React.Component {
  handleClick() {

      document.location.href = "/messages"     

  }
  render(){
    return(
      <Container>
        <DashBoard />
          <Div style={{height:"750px"}}>
              <Div2 style={{width:"80%", height:"100%"}}>
                <Header style={{display:"flex", justifyContent:"center", flexWrap:"wrap", height:"100%"}}>
                  <div style={{textAlign:"center", marginRight:"20px", borderRadius:"10%", border:"1px solid rgba(0,0,0,.125)", height:"auto", 
                  padding:"50px", paddingTop:"10px", margin:"10px", maxWidth:"20%"}}>
                  <p><b>Dennys House</b></p>
                  <FontAwesomeIcon style={{marginBottom:"10%"}} icon={faBuilding} color="green" size="10x"/>
                  <p style={{color:"green", fontWeight:"600"}}>R$ 100</p>
                  <FontAwesomeIcon style={{float:"right", position:"relative", display:"flex"}} icon={faHeart} color="grey" />
                  <FontAwesomeIcon style={{float:"left", position:"relative", display:"flex"}} icon={faCommentAlt} color="grey"/>
                  <p style={{color:"#cc7000"}}><FontAwesomeIcon style={{marginRight:"20px", marginTop:"60px"}} icon={faMapMarkerAlt} 
                  color="orange"/>Rua dos misótis, 810, proximo ao SEFAP</p>
                  <p style={{textAlign:"justify"}}>alo galera de cowboy fsdfsf sdf sdfs dsf sdfdsf sd alo galera de cowboy fsdfsf sdf sdfs dsf sdfdsf 
                    sdalo galera de cowboy fsdfsf sdf sdfs dsf sdfdsf sdalo galera de cowboy fsdfsf sdf sdfs dsf sdfdsf 
                    sd alo galera de cowboy fsdfsf sdf sdfs dsf sdfdsf sd fsdalo galera de cowboy fsdfsf sdf sdfs dsf sdfdsf sd
                    alo galera de cowboy fsdfsf sdf sdfs dsf sdfdsf sd</p>
                  </div>
                </Header>
              </Div2>
          </Div>
      </Container>
    )
  }
}

export default Home;