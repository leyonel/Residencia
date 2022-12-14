import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
`;


const Wrapper =  styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
flex:1;
`;

const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid ligthgray;
  border-radius: 10px
`;

const Right = styled.div`
flex:1;
`;
const Center = styled.div`
flex:1;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>

                <SearchContainer>
                  input
                  <Search></Search>
                </SearchContainer>

            </Left>
            <Center>Center</Center>
            <Right>Rigth</Right>
        </Wrapper>
       
    </Container>
  )
}

export default Navbar
