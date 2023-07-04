import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import WellModal from './wellModal';
import { fetchWells, createWell, updateWell, deleteWell } from '../../store/well/wellActions'

const Well = ({ wellData, error, loading, fetchWells, createWell, updateWell, deleteWell }) => {
  const [modalData, setModalData] = useState();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetchWells();
  }, [fetchWells])

  const handleClose = () => {
    setOpen(false);
  }

  const handleModalData = (data) => {
    createWell(data);
    setOpen(false);
    fetchWells();
  }

  const handleUpdate = (data) => {
      updateWell(data);
      setOpen(false);
      fetchWells();
      setModalData();
  }

  const handleEdit = (well) => {
    setOpen(true);
    setModalData(well);
  }

  const handleDelete = () => {
    deleteWell(modalData.id);
    setOpen(false);
    fetchWells();
    setModalData();
  };

  return (
    <Box component='section' sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h2' noWrap component='h2'>Wells</Typography>
        <Button variant='contained' style={{ margin: '1rem' }} onClick={() => setOpen(true)}>New Well</Button>
      </Box>
      <Divider />
      <Box>
        <Grid container spacing={1} style={{ paddingTop: 20 }}>
          {wellData &&
            wellData.wells &&
              wellData.wells.map(well => 
              <Grid item key={well.id} xs={12} md={4} xl={2} style={{ padding: 10 }}>
                <Link to={`/well/${well.id}`} relative='path'>
                  <Card sx={{ maxWidth: 300, bgcolor: '#F8F8F7' }} key={well.id}>
                    <CardContent>
                      <Typography variant='h6' component='h6' color='text.secondary' gutterBottom>
                        {well.wname}
                      </Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>VS of Well: {well.wvs}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>Sensor to Bit: {well.wstb}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>DLS Reference: {well.wdls}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>Wellhead N/S: {well.wns}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>wellhead E/W: {well.wew}</Typography>
                      <Typography variant='h6' component='h6' color='text.secondary' gutterBottom>Target Information</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>MD: {well.tmd}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>INC: {well.tinc}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>AZI: {well.tazi}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>TVD: {well.ttvd}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>LAT N/S: {well.tns}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>DEP E/W: {well.tew}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>VS: {well.tvs}</Typography>
                      <Typography variant='p' component='h5' color='text.secondary' gutterBottom>Radius: {well.trad}</Typography>
                      <Divider />
                      <Grid container spacing={4} style={{ paddingTop: 10 }}>
                        <Grid item xs={8}>
                          <Link to={`/well/${well.id}/surveys`}>
                            <Button variant='text'>Surveys</Button>
                          </Link>
                        </Grid>
                        <Grid item xs={4}>
                          <Button variant='text' onClick={() => handleEdit(well)}>Edit</Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
              )
          }
        </Grid>
      </Box>
      <WellModal 
        open={open} 
        delete={handleDelete}
        close={handleClose}
        initialData={modalData}
        onData={handleModalData}
        onUpdate={handleUpdate}
        // onSubmit={handleSubmit}
      />
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    wellData: state.well,
    error: state.error,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  fetchWells,
  deleteWell,
  createWell,
  updateWell,
};

export default connect (mapStateToProps, mapDispatchToProps) (Well)