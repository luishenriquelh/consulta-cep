import React from "react";

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { StyledEngineProvider } from '@mui/material/styles';

function Notificacao(props: {texto: string, type: string}){

    return(
        <>
            <Alert variant="filled" severity={props.type} >
            {props.texto}!
            </Alert>
        </>
    );
}

export default Notificacao