import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    position: relative;
    min-height: 70px;
    z-index: 800;
    transition: all 0.3s ease-in-out 0s;
    border-bottom: 1px solid rgb(56, 52, 69);
`;

export const HeaderWrapper = styled.div`
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 16px calc(0.7rem);
    width: 1264px;
    max-width: 100vw;
    height: 64px;
    flex-direction: row;
`;

export const Ul = styled.ul`
    position: relative;
    display: flex;
    width: 75%;
    height: 100%;
    margin: 0px auto;
    padding: 0;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const Li = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
`;

export const A = styled.a`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    text-decoration: inherit;
    color: inherit;
`;

export const SPAN = styled.span`
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    color: grey;
`;

