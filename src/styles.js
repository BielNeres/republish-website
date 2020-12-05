import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    align-content:center;
    width:100%;
    padding-right:15px;
    padding-left:15px;
    margin-right:auto;
    margin-left:auto;
`;

export const Div = styled.div`
    height:100%;
    justify-content:center;
    display:flex;
`;

export const Div2 = styled.div`
    height:620px;
    margin-top:auto;
    margin-bottom:auto;
    width:400px;
    /* background-color:grey; */
    position:relative;
    display:flex;
    flex-direction:column;
    min-width:0;
    background-clip:border-box;
    border:1px solid rgba(0,0,0,.125);
    border-radius:.25rem;
`;

export const Header = styled.div`
    padding:.75rem 1.25rem;
    margin-bottom:0;
    background-color:rgba(0,0,0,.03);
    border-bottom:1px solid rgba(0,0,0,.125);
    height:25%;
`;

export const Body = styled.div`
    flex: 1 1 auto;
    padding: 1.25rem;
`;

export const Input = styled.div`
    display:block;
    width:80%;
    height:calc(2.00rem + 2px);
    padding: .250rem .25rem;
    font-size: 1rem;
    line-height:1.5;
    color: #495057;
    background-color: #fff;
    background-clip:padding-box;
    border-radius: .50rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    margin-left: 8%;
`;

export const Button = styled.div`
    display:block;
    width:40%;
    height:calc(2.00rem + 2px);
    padding: .250rem .25rem;
    font-size: 1rem;
    line-height:1.5;
    color: #495057;
    background-color: green;
    background-clip:padding-box;
    border-radius: .50rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    margin-left: 28%;
`;


