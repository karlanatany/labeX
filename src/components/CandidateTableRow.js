import { Tr, Td, Button, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { BoxButton } from '.';


export const CandidateTableRow = (props) => {
  return (
    <Tr key={props.id + props.candidateId}>
      <Td>{props.name}</Td>
      <Td>{props.profession}</Td>
      <Td>{props.age}</Td>
      <Td>{props.country}</Td>
      <Td>{props.applicationText}</Td>
      {props.showOptions &&
        <Td>
          <BoxButton>
            <Tooltip placement='top' label='Aprovar' fontSize='md'>
              <Button variant='ghost' onClick={() => props.decideCandidate(props.tripId, props.candidateId, true)}>
                <CheckIcon/>
              </Button>
            </Tooltip>
            <Tooltip placement='top' label='Reprovar' fontSize='md'>
              <Button variant='ghost' onClick={() => props.decideCandidate(props.tripId, props.candidateId, false)}>
                <CloseIcon/>
              </Button>
            </Tooltip>
          </BoxButton>
        </Td>
      }
    </Tr>
  )
}
