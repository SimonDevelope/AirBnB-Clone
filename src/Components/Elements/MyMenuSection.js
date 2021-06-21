import React from 'react';
import styled from 'styled-components';

function My () {    
    const TotalWrapper = styled.div `
    -webkit-flex: 1 0 auto !important;
    -ms-flex: 1 0 auto !important;
    flex: 1 0 auto !important;
    `
    return(
        <TotalWrapper></TotalWrapper>
    );
}

export default My;