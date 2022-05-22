import React from "react";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Grid'
import Typography from '@mui/material/Typography'



const Me = () => {
  return <>
  
    <Grid container spacing={0} mt={8}>

      <Grid item xs={12} sm={8} md={9}>
        <Box border={2}>
          
          <Typography m={3} variant="h2" component="h1">Este proyecto es para recolectar API para desarrollo</Typography>
          
          <Typography m={3} variant="h3" component="h3">API: qué es y para qué sirve</Typography>
          
          <Typography m={3} variant="p" component="p">Vamos a explicarte qué son las API y para qué sirven estos protocolos que son una parte fundamental en el funcionamiento de las aplicaciones y webs actuales. Seguramente has oído hablar más de una vez sobre ellas, cuando determinado servicio popular pone límites en su API o crean nuevas para extender su uso en otras aplicaciones.</Typography>

          <Typography m={3} variant="p" component="p">Vamos a empezar explicándote de la forma más sencilla que podamos qué es exactamente una API y cuáles son sus principales usos. Luego, terminaremos con algunos ejemplos con los que vas a poder hacerte una idea de para qué sirven y cómo son utilizadas en la práctica</Typography>












          ¿Qué es una API y para qué sirve?

          ¿Qué significa API? Es el acrónimo de Application Programming Interface, o en español, Interfaz de Programación de Aplicaciones. Se puede definir como una interfaz que favorece la comunicación entre dos sistemas o plataformas diferentes, permitiendo agregar diversas funciones a sitios web y aplicaciones.26-01-2022




          ¿Qué es la API de una web?
          Una API web es una interfaz para páginas y aplicaciones web. Se utiliza en el intercambio y procesamiento de contenidos entre webs y permite a terceros acceder a grupos de datos y círculos de usuarios. La API de autorización y la API de autenticación son dos tipos especiales de API web.



          ¿Cómo se consume un API?
          Resultado de imagen
          Las tres principales son:
          Llamar a una API con Ajax (XMLHttpRequest) Ajax es la manera más tradicional y/o ”antigua” de llamar a una API. ...
          Consumir una API desde JavaScript con Fetch. Fetch nos proporciona una manera de recuperar recursos más potente y flexible que la anterior. ...
          Llamar a una API desde JS con Axios.

        </Box>
      </Grid>


      <Grid item xs={12} sm={4} md={3}>
        
        <Box 
          m={3} 
          p={3}
          border={1} 
          borderRadius={2} 
          borderColor='#ff7700' 
          boxShadow='2px 2px 2px 2px rgba(0,0,0,0.3)'>

          
          sLorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum rem, consequatur suscipit vitae eius est voluptas et quos eos asperiores recusandae eum ad molestiae quod earum? Dolorem, necessitatibus commodi?
        </Box>
      </Grid>

      
    </Grid>


    </>;
};

export default Me;
