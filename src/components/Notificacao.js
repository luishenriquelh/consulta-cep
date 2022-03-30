import React from "react";

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { StyledEngineProvider } from '@mui/material/styles';

function Notificacao(){
    return(
        <>
            <Alert variant="filled" severity="error">
            This is an error alert — check it out!
            </Alert>
        </>
    );
}

export default Notificacao