import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: repeat(4,1fr);
    grid-gap: 10px;
`
const Title = styled.h2`
    grid-row: 1/2;
    grid-column: 2/5;
    text-align: center;
`

const IDtxt = styled.p`
    grid-row: 2/3;
    grid-column: 1/2;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    margin:0px;
`
const PassWordtxt = styled.p`
    grid-row: 3/4;
    grid-column: 1/2;
    text-align: right;
    line-height: 100px;
    font-size: 30px;
    margin:0px;
`

const Id = styled.input`
    grid-row: 2/3;
    grid-column: 2/5;
    padding: 10px 10px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: solid 1px black;
    color: white;
    background-color: CadetBlue;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 1px #999;
`
const PassWord = styled.input`
    grid-row: 3/4;
    grid-column: 2/5;
    padding: 10px 10px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: solid 1px black;
    color: white;
    background-color: CadetBlue;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 1px #999;
`

const Submit = styled.input`
    grid-row: 4/5;
    grid-column: 3/4;
    padding: 5px 5px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: solid 1px black;
    color: black;
    background-color: Ivory;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 1px #999;
    margin:30px;
`

function Login() {

    return (
        <div>
            <form action='https://localhost:5999/users/login' method='POST'>
                <Container >
                    <Title>3티어 로그인 연습</Title>
                    <IDtxt>ID : </IDtxt>
                    <PassWordtxt>PassWord : </PassWordtxt>
                    <Id type='text' name='id'/>
                    <PassWord type='password' name='pwd'/>
                    <Submit type='submit' value='로그인' ></Submit>
                </Container>
            </form>
        </div>
    );

}

export default Login