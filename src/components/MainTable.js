import { Table, Tr, Th, Thead, Tbody } from '@chakra-ui/react';
import React from 'react';
import { CandidateTableRow } from '.';

export const MainTable = (props) => {
    return( 
        <div>
            <Table color='white' bg='#191718b8' p={5} marginTop={10} >
                <Thead>
                    <Tr bgColor='white' color='magenta'>
                        <Th color='magenta' textAlign="center" colSpan='6'>
                            {props.title}
                        </Th>
                    </Tr>
                    <Tr color="magenta">
                        <Th color="white">Nome</Th>
                        <Th color="white">Profissão</Th>
                        <Th color="white">Idade</Th>
                        <Th color="white">País</Th>
                        <Th color="white">Texto</Th>
                        {props.showOptions && <Th color="white">Opções</Th>}
                    </Tr>
                </Thead>
                <Tbody>
                    {props.bodyTable && props.bodyTable.map((candidate) => {
                        return (
                            <>
                                <CandidateTableRow
                                    key={candidate.id}
                                    name={candidate.name}
                                    profession={candidate.profession}
                                    age={candidate.age}
                                    country={candidate.country}
                                    applicationText={candidate.applicationText}
                                    decideCandidate={props.decideCandidate}
                                    candidateId={candidate.id}
                                    tripId={candidate.tripId}
                                    showOptions={props.showOptions}
                                />
                            </>
                        )
                    })}
                </Tbody>
            </Table>
        </div>
    )   
}

