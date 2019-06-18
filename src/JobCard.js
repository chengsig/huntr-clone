import React from 'react';
import styled from 'styled-components';

var rand = Math.floor(Math.random() * 10);
var colorQ = "rgb(" + (215 - rand * 3) + "," + (185 - rand * 5) + "," + (185 - rand * 10) + " )"; 


const JobCard = styled.div`
    width: 100%;
    padding: 8px;
    color: #555;
    backgroundColor: ${colorQ};
    border-radius: 3px;
`;

export default function Job() {
    return (
        <JobCard>
            randomJob
        </JobCard>
    )
}



