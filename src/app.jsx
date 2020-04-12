import * as React from "react";
import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


import HeaderLogo from './saltcolorlab.svg';

const ContainerShell = styled.ul`
  width: 1120px;
  margin: auto;
`;

export default function MainComponent() {
  return (
    <ContainerShell>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid xs={3}>
          Left Column
        </Grid>

        <Grid xs={9}>
          <ColorInventory />
        </Grid>

        <Grid xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </ContainerShell>
  );
}

function ColorInventory() {
  return (
    <Box display="flex">
      <Box p={1} flexGrow={1}>
        <TextField
          placeholder="Search color..."
          variant="outlined"
          size="small"
        />
      </Box>

      <Box p={1}>
        Sort by:

        <Select
          size="small"
          variant="outlined"
          value=""
          displayEmpty
          style={{ height: '40px' }}
        >
          <MenuItem value="">Most Permanent</MenuItem>
          <MenuItem value="least-expensive">Least Expensive</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <h1><HeaderLogo /></h1>
  );
}

const StyledFooter = styled.div`
  background-color: #45464a;
  color: #fff;
  padding: 20px;
`;

function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>About us</li>
      </ul>
    </StyledFooter>
  );
}
