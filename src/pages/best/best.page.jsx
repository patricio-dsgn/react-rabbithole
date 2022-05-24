import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import "./best.styles.scss"
import { listApiData } from "../../assets/listApiData";

const Best = () => {

  return (

    <div className="page-best">

      <Grid container justifyContent={'center'} p={3}>

        <Grid item xs={12} pt={30} align="center">
          <Typography m={3} sx={{ fontSize: { md: 60, sm: 50, xs: 40 } }} variant="h2" component="h1" color="#fff">
            Recolección de API para desarrollo
          </Typography>

          <Typography m={3} sx={{ fontSize: { md: 20, sm: 15, xs: 10 } }} variant="body1" component="p" color="#fff">
            Estas API son unas APIs divertidas, interesantes y diferentes.
          </Typography>

          <Typography m={3} sx={{ fontSize: { md: 20, sm: 15, xs: 10 } }} variant="body1" component="p" color="#fff">
            Son gratuitos, no requieren que sepas cómo manejar OAuth.
          </Typography>

          <Typography m={3} sx={{ fontSize: { md: 20, sm: 15, xs: 10 } }} variant="body1" component="p" color="#fff">
            Estas son las categorías en las que se encuentran estas API, en este orden:
          </Typography>

        </Grid>

        <Grid item xs={12} sm={10} md={7}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

              <TableHead>
                <TableRow>
                  <TableCell align="center">n</TableCell>
                  <TableCell align="center">categoria</TableCell>
                  <TableCell>nombre</TableCell>
                  <TableCell>descripción</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {listApiData.map((row, idx) => (
                  <TableRow
                    key={row.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>{idx + 1}</TableCell>
                    <TableCell align="center">
                      <img width="50px" src={require('../../assets/icons/' + row.type + '.svg')} alt={row.type_txt} />
                      <Typography variant="caption" component="p" mb={3}>{row.type_txt}</Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        variant="text"
                        href={row.url}
                      >{row.title}</Button>
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>

        </Grid>
      </Grid>
    </div>
  );
};

export default Best;