import React from 'react';
import { Box } from '@chakra-ui/react'
import styled from 'styled-components';

const Logo = styled.p ` 
font-family: "Courier New", Courier, monospace;
font-size: 60px;
`
export const Header = () => {
    return ( 
        <Box bg='black'  width="100%" textAlign='center' color='#FD1E6A' position='relative'>
            <Logo>LabeX</Logo>        
        </Box>
    )
};

