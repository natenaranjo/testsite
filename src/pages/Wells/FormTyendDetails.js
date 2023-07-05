import React, { useEffect, useState } from 'react';
import {Button, FormControl, Grid, TextField, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

const FormTyendDetails = (props) => {
  const [data, setData] = useState({});

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData(values =>({ ...values, [name]: value }));
    console.log('data: ', data);
  };

  const handlePrevious = (e) =>{
    e.preventDefault();
    props.onData(data);
    props.previousStep(e);
  }

  const handleNext = (e) =>{
    e.preventDefault();
    props.onData(data);
    props.nextStep(e);
  }

  return (
    <FormControl style={ style.form }>

      <Grid container spacing={2} style={style.formGrid}>
        <Grid item xs={4}>
          <TextField 
            id='standard-basic' 
            label='Measure Depth' 
            name='tymd' value={data.tymd || ''} 
            onChange={handleChange} 
            variant='standard' 
            style={style.formInput} 
          />
        </Grid>
        <Grid item xs={4}>
          <TextField 
            id='standard-basic' 
            label='Inclination' 
            name='tyinc'
            value={data.tyinc || ''} 
            onChange={handleChange} 
            variant='standard' 
            style={style.formInput} 
          />
        </Grid>
        <Grid item xs={4}>
          <TextField 
            id='standard-basic' 
            label='Azimuth'
            name='tyazi' 
            value={data.tyazi || ''} 
            onChange={handleChange} 
            variant='standard' 
            style={style.formInput} 
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={style.formGrid}>
        <Grid item xs={3}>
          <TextField 
            id='standard-basic' 
            label='True Vertical Depth' 
            name='tytvd' 
            value={data.tytvd || ''} 
            onChange={handleChange} 
            variant='standard' 
            style={style.formInput} 
          />
        </Grid>
        <Grid item xs={3}>
          <TextField 
            id='standard-basic' 
            label='North/South' 
            name='tyns' 
            value={data.tyns || ''} 
            onChange={handleChange} 
            variant='standard' 
            style={style.formInput} 
          />
        </Grid>
        <Grid item xs={3}>
          <TextField 
            id='standard-basic' 
            label='East/West' 
            name='tyew' 
            value={data.tyew || ''} 
            onChange={handleChange} 
            variant='standard' 
            style={style.formInput} 
          />
        </Grid>
        <Grid item xs={3}>
          <TextField 
            id='standard-basic' 
            label='Vertical Section' 
            name='tyvs' 
            value={data.tyvs || ''} 
            onChange={handleChange} 
            variant='standard' 
            style={style.formInput} 
          />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 2, justifyContent: 'space-between'}}>
        <Button variant='link' onClick={handlePrevious}>
          <ArrowBackIcon fontSize='medium' />
          <Typography variant='h6' component='h6'>Previous</Typography>
        </Button>
        <Button variant='link' onClick={handleNext}>
          <Typography variant='h6' component='h6'>Next</Typography>
          <ArrowForwardIcon fontSize='medium' />
        </Button>
      </Grid>
    </FormControl>
  )
}

export default FormTyendDetails