import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ResultadoCep(props) {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="CEP: "
          secondary={
            <React.Fragment>
              {props.data.cep}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />       
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Complemento: "
          secondary={
            <React.Fragment>
              {props.data.complemento}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />         
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Bairro: "
          secondary={
            <React.Fragment>
              {props.data.bairro}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Cidade: "
          secondary={
            <React.Fragment>
              {props.data.localidade}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Estado: "
          secondary={
            <React.Fragment>
              {props.data.uf}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default ResultadoCep