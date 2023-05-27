/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import {db} from '../../../../context/db/db';
import { Box, Button, Divider, FormControl, Grid, Modal, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  form: {
    width: '100%',
    padding: 5,
  },
  formGrid: {
    paddingBottom: 10,
  },
  formInput: {
    width: '100%',
    padding: 5,
  },
  formTitle: {
    padding: 1,
  },
  formFooter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
  },
  formButton: {
    marginTop: 10,
    width: 200,
  }
};

const WellModal = (props) => {
  const [inputs, setInputs] = useState({});

  async function addWell() {
    try {
      const id = await db.wells.add({
        wname: inputs.wname,
        wstb: inputs.wstb,
        wdls: inputs.wdls,
        wns: inputs.wns,
        wew: inputs.wew,
        tmd: inputs.tmd,
        tinc: inputs.tinc,
        tazi: inputs.tazi,
        ttvd: inputs.ttvd,
        tns: inputs.tns,
        tew: inputs.tew,
        tvs: inputs.tvs,
        trad: inputs.trad
      })
      props.close();
    } catch(e) {
      console.error(e);
    }

    setInputs({});
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inputs: ', inputs);
  }

  return (
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Well Information
            </Typography>
            <Button variant='link' onClick={props.close} style={{ fontSize: '1rem', fontWeight: 'bold' }}>X</Button>
          </Box>
          <Divider />
          <Box>
            <FormControl onSubmit={handleSubmit} style={ style.form }>
              <Typography variant='h6' component='h6' style={ style.formTitle }>
                Well Information
              </Typography>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={8}>
                  <TextField id='standard-basic' label='Well Name' name='wname' value={inputs.wname || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='Sensor to Bit' name='wstb' value={inputs.wstb || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='DLS Reference Length' name='wdls' value={inputs.wdls || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='Wellhead N/S Offset Pad' name='wns' value={inputs.wns || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='Wellhead E/W Offset Pad' name='wew' value={inputs.wew || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Typography variant='h6' component='h6' style={ style.formTitle }>
                Target Information
              </Typography>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='MD' name='tmd' value={inputs.tmd || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='INC' name='tinc' value={inputs.tinc || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='AZI' name='tazi' value={inputs.tazi || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='TVD' name='ttvd' value={inputs.ttvd || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='LAT N/S' name='tns' value={inputs.tns || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='DEP E/W' name='tew' value={inputs.tew || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='VS' name='tvs' value={inputs.tvs || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Radius' name='trad' value={inputs.trad || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Grid container style={style.formFooter}>
                <Button variant='contained' onClick={addWell} style={style.formButton}>Create Well</Button>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Modal>
  )
}

export default WellModal;