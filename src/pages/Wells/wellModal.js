import React, { useState, useEffect } from 'react';
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
    gap: 8,
  },
  formButton: {
    marginTop: 20,
    width: 150,
  }
};

const WellModalB = (props) => {
  const [data, setData] = useState({});

 useEffect(() => {
    if (props.initialData !== undefined){
      setData(props.initialData)
    }
 },[props.initialData])

  const handleDelete = (data) => {
    props.delete(data);
    handleReset();
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values =>({ ...values, [name]: value }));
  };

  const handleUpdate = () => {
    props.onUpdate(data);
    handleReset();
  }

  const handleSubmit = () => {
    props.onData(data);
    handleReset();
  }

  const handleReset = () => {
    props.close();
    setData({})
  }

  return (
      <Modal
        open={props.open}
        onClose={handleReset}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Well Information
            </Typography>
            <Button variant='link' onClick={handleReset} style={{ fontSize: '1rem', fontWeight: 'bold' }}>X</Button>
          </Box>
          <Divider />
          <Box>
            <FormControl style={ style.form }>
              <Typography variant='h6' component='h6' style={ style.formTitle }>
                Well Information
              </Typography>
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
              {!props.initialData
                ? <Grid container style={style.formFooter}>
                    <Button variant='contained' onClick={handleSubmit} style={style.formButton}>Create Well</Button>
                  </Grid>
                : <Grid container style={style.formFooter}>
                    <Button variant='contained' onClick={handleDelete} color='error' style={style.formButton}>Delete Well</Button>
                    <Button variant='contained' onClick={handleUpdate} style={style.formButton}>Update Well</Button>
                  </Grid>
              }
            </FormControl>
          </Box>
        </Box>
      </Modal>
  )
};

export default WellModalB;