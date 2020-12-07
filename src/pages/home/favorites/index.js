import React from 'react'
import { Redirect } from 'react-router-dom'
import DashBoard from '../../../containers/DashBoard/index'
import Footer from '../../../containers/Footer/index'
import {Container, Div, Div2, Header, Body, Input, Button} from '../../../styles'
import { faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends React.Component {
  handleClick() {

      document.location.href = "/republic/description"     

  }
  
  render(){
    let rows = []
    for(let i=0; i<1; i++){
      rows.push(
                <div style={{textAlign:"center", marginRight:"20px", borderRadius:"10%", border:"1px solid rgba(0,0,0,.125)", height:"30%", 
                padding:"50px", boxShadow:"1px 1px 10px grey !important", cursor:"pointer", margin:"10px"}} onClick={() => this.handleClick()}>
                <FontAwesomeIcon style={{marginBottom:"10%"}} icon={faBuilding} color="green" size="6x"/>
                <p><b>Republica do Dennys</b></p>
                <p>5 Quartos , 30 Pessoas</p>
                <p style={{color:"green", fontWeight:"600"}}>R$ 100</p>
                <p style={{color:"#cc7000"}}><FontAwesomeIcon style={{marginRight:"20px"}} icon={faMapMarkerAlt} color="orange"/>Casa do Pennys</p>
                </div>
              )
    }

    return(
      <Container>
        <DashBoard />
          <Div style={{height:"750px"}}>
              <Div2 style={{width:"80%", height:"100%"}}>
                <Header style={{display:"flex", justifyContent:"center", flexWrap:"wrap", height:"100%"}}>
                  {rows}
                </Header>
              </Div2>
          </Div>
      </Container>
    )
  }
}

export default Home;