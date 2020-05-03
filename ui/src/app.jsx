import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


import HeaderLogo from './saltcolorlab.svg';
import { FormLabel, FormGroup, FormControl, FormControlLabel, Checkbox } from "@material-ui/core";

const ContainerShell = styled.div`
  width: 1120px;
  margin: auto;
`;

const ColorListing = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000;
`;

export default function MainComponent() {
  return (
    <ContainerShell>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid xs={2}>
          <SideBar />
        </Grid>

        <Grid xs={10}>
          <ColorInventory />
        </Grid>

        <Grid xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </ContainerShell>
  );
}

function SideBar() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Browse Colors</FormLabel>
      <FormGroup>
        <Select
          size="small"
          variant="outlined"
          value=""
          displayEmpty
          style={{ height: '40px' }}
        >
          <MenuItem value="">All Colors</MenuItem>
          <MenuItem value="blues">Blues</MenuItem>
          <MenuItem value="blues">Reds</MenuItem>
          <MenuItem value="blues">Yellows</MenuItem>
        </Select>
      </FormGroup>
      <FormLabel component="legend">Lightfastness</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Excellent (I)" />
        <FormControlLabel control={<Checkbox />} label="Very Good (II)" />
        <FormControlLabel control={<Checkbox />} label="Fair (III)" />
        <FormControlLabel control={<Checkbox />} label="Poor (IV)" />
        <FormControlLabel control={<Checkbox />} label="Very Poor (V)" />
      </FormGroup>
    </FormControl>
  );
}

function ColorInventory() {
  return (
    <div>
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
      <ColorListing />
    </div>
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
