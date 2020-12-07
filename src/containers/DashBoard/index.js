import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {Header, Ul, Li, A, SPAN} from './styles'
import { faHouseUser, faCommentAlt, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DashBoard extends Component {
    render(){
        return(
            <Header>
                <Ul>
                    <Li><A href="/home"><SPAN slect><FontAwesomeIcon icon={faHouseUser} color="grey" size="2x" style={{marginRight:"10px"}}/>HOME</SPAN></A></Li>
                    <Li><A href="/messages"><SPAN><FontAwesomeIcon icon={faCommentAlt} color="grey" size="2x" style={{marginRight:"10px"}}/>MENSAGENS</SPAN></A></Li>
                    <Li><A href="/location"><SPAN><FontAwesomeIcon icon={faMapMarkerAlt} color="grey" size="2x" style={{marginRight:"10px"}}/>LOCALIZAÇÃO</SPAN></A></Li>
                    <Li><A href="/favorites"><SPAN><FontAwesomeIcon icon={faHeart} color="grey" size="2x" style={{marginRight:"10px"}}/>FAVORITOS</SPAN></A></Li>
                </Ul>
            </Header>
        )
    }
}

export default DashBoard;