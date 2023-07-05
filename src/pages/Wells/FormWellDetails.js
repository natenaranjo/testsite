import React, { useEffect, useState } from 'react';
import {Button, FormControl, Grid, TextField, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
    gap: 8,
  },
  formButton: {
    marginTop: 20,
    width: 150,
  }
};

export default function FormWellDetails(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    if(props.initialData !== undefined) {
      console.log("Initial Data", props.initialData );
      setData(props.initialData);
    }
  },[])

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData(values =>({ ...values, [name]: value }));
    console.log('data: ', data);
  };

  const handleNext = (e) =>{
    e.preventDefault();
    props.onData(data);
    props.nextStep(e);
  }

    return (
      <FormControl style={ style.form }>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={6}>
                  <TextField id='standard-basic' label='Well Name' name='wname' value={data.wname || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='VS of Well' name='wvs' value={data.wvs || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={2}>
                  <TextField id='standard-basic' label='Sensor to Bit' name='wstb' value={data.wstb || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='DLS Reference Length' name='wdls' value={data.wdls || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='Wellhead N/S Offset Pad' name='wns' value={data.wns || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id='standard-basic' label='Wellhead E/W Offset Pad' name='wew' value={data.wew || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Start Date' name='startDate' value={data.startDate || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Landing Date' name='landDate' value={data.landDate || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>

              <Typography variant='h6' component='h6' style={ style.formTitle }>
                Target Information
              </Typography>
              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='MD' name='tmd' value={data.tmd || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='INC' name='tinc' value={data.tinc || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='AZI' name='tazi' value={data.tazi || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='TVD' name='ttvd' value={data.ttvd || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>

              <Grid container spacing={2} style={style.formGrid}>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='LAT N/S' name='tns' value={data.tns || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='DEP E/W' name='tew' value={data.tew || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='VS' name='tvs' value={data.tvs || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Radius' name='trad' value={data.trad || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Typography variant='h6' component='h6' style={ style.formTitle }>
                Final Depth of each Well Section
              </Typography>
              <Grid container spacing={4} style={style.formGrid}>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Surface' name='surface' value={data.surface || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Vertical/Tanget' name='tanget' value={data.tanget || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Curve' name='curve' value={data.curve || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
                <Grid item xs={3}>
                  <TextField id='standard-basic' label='Lateral' name='lateral' value={data.lateral || ''} onChange={handleChange} variant='standard' style={style.formInput} />
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 2, justifyContent: 'flex-end'}}>
                <Button variant='link' onClick={handleNext}>
                  <Typography variant='h6' component='h6'>Next</Typography>
                  <ArrowForwardIcon fontSize='medium' />
                </Button>
              </Grid>
            </FormControl>  
  )
}