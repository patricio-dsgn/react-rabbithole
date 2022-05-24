import React from "react";

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'

import { ReactComponent as Isotipo } from "../../assets/brand/isotipo.svg";
import "./footer.styles.scss";

const Footer = () => {

  const links = [
    'https://github.com/patricio-dsgn/rabbithole',
    'https://rabbithole-rho.vercel.app/'
  ]

  return (
    <footer>
      <Grid container spacing={0} marginTop={1} marginBottom={1} >
        
        <Grid item xs={12} md={8} padding={1}>
          <nav>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <Link href={link} color="#f07" underline="hover">{link}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Typography variant="body1" color="#fff">© 2022</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Isotipo width="70%" height="70%" />
        </Grid>

      </Grid>
    </footer>
  );
};

export default Footer;