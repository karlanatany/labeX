import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Button, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { BoxButton } from '.';
import { Subtitle } from '.';

export const CardTripAdmin = (props) => {
  return (
    <Box
      width={500}
      maxW='md'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      bg='#191718b8'
      m={2}
      p={5}
      color='white'
      display='flex'
      alignItems="center"
      justifyContent="space-between">

      <Subtitle>{props.destino}</Subtitle>
      <BoxButton>
        <Tooltip placement='top' label='Ver detalhes' fontSize='md'>
          <Button variant='ghost' onClick={props.goToTripDetails} >
            <ViewIcon />
          </Button>
        </Tooltip>
        <Tooltip placement='top' label='Remover Viagem' fontSize='md'>
          <Button variant='ghost' onClick={props.deleteTrip}>
            <DeleteIcon />
          </Button>
        </Tooltip>
      </BoxButton>
    </Box>
  )
}
