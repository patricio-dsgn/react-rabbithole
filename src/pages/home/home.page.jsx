import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



import { ReactComponent as Rabbit1 } from '../../assets/icons/rabbit-07.svg';
import { ReactComponent as Rabbit2 } from '../../assets/icons/rabbit-03.svg';
import { ReactComponent as Rabbit3 } from '../../assets/icons/rabbit-06.svg';

// import {ReactComponent as Info} from '../../assets/icons/rabbit-07.svg';

import "./home.styles.scss"

import infoapi from '../../assets/api/api2.png'



const Me = () => {

  const styles = {
    media: {
      height: '300px',
      width: '98%',
      borderRadius: '10px',
      margin: '1%',
    }
  };

  return (

    <div className="page page-home">


      <Grid container justifyContent={'center'} p={3}>

        <Grid item xs={12} pt={40} align="center">
          <Typography m={3} sx={{ fontSize: { md: 60, sm: 50, xs: 40 } }} variant="h2" component="h1" color="#fff">Este es un proyecto sobre APIs</Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={7} component="div">
          <Box className="roti-2">
            <CardMedia
              // className={classes.media}
              image={require('../../assets/api/machine.gif')} // require image
              title="Contemplative Reptile"
              style={styles.media} // specify styles
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={5} component="div">
          <Box className="boxi roti2">
            <Typography m={3} variant="h4" component="h1">API: qué es y para qué sirve</Typography>
            <Typography m={3} variant="p" component="p">Te explicaremos, qué son las API y para qué sirven estos protocolos, que son una parte fundamental en el funcionamiento de las aplicaciones y webs actuales. Seguramente, has oído hablar más de una vez sobre ellas cuando determinado servicio popular pone límites en su API o crean nuevas para extender su uso en otras aplicaciones.</Typography>
            <Typography m={3} variant="p" component="p">Comenzaremos explicándote de forma sencilla qué es exactamente una API y cuáles son sus principales usos, para terminar con ejemplos prácticos de las ventajas de su uso.</Typography>
          </Box>
        </Grid>


        <Grid item xs={12} sm={10} md={6}>
          <Box className="boxi roti-2">

            <p className="txt">¿Qué es una API y para qué sirve?</p>

            <Typography m={3} variant="h4" component="h2">¿Qué es una API y para qué sirve?</Typography>
            <Typography m={3} variant="p" component="p">
              API, es el acronimoApplication Programming Interface, o en español, Interfaz de Programación de Aplicaciones</Typography>
            <Typography m={3} variant="p" component="p">
              Se puede definir como una interfaz que favorece la comunicación entre dos sistemas o plataformas diferentes, permitiendo agregar diversas funciones a sitios web y aplicaciones.</Typography>
          </Box>
        </Grid>


        <Grid m={0} item xs={12} md={6}>
          <Box className="boxi roti6">
            <Typography m={3} variant="h4" component="h2">¿Qué es la API de una web?</Typography>
            <Typography m={3} variant="p" component="p">Una API web es una interfaz para páginas y aplicaciones web. Se utiliza en el intercambio y procesamiento de contenidos entre webs y permite a terceros acceder a grupos de datos y círculos de usuarios. La API de autorización y la API de autenticación son dos tipos especiales de API web.</Typography>
          </Box>
        </Grid>

        <Grid m={0} item xs={12} md={8}>
          <Box>
            <img className="info" src={infoapi} alt="" />
          </Box>
        </Grid>

        <Grid m={0} item xs={12} md={4}>
          <Box className="boxi roti-2">
            <Typography m={3} variant="h4" component="h2">¿Cómo se consume un API?</Typography>
            <Typography m={3} variant="p" component="p">Las tres principales son:</Typography>
            <ul className="list">
              <li>
                <Rabbit1 width='20%' />
                <span>Llamar a una API con Ajax (XMLHttpRequest) Ajax es la manera más tradicional y/o ”antigua” de llamar a una API."</span>
              </li>
              <li>
                <Rabbit2 width='20%' />
                <span>Consumir una API desde JavaScript con Fetch. Fetch nos proporciona una manera de recuperar recursos más potente y flexible que la anterior.</span>
              </li>
              <li>
                <Rabbit3 width='20%' />
                <span>Llamar a una API desde JS con Axios.</span>
              </li>
            </ul>
          </Box>
        </Grid>

      </Grid>



  </div>

  );
};

export default Me;
