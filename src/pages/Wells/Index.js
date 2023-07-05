import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import WellModal from './wellModal';
// import WellForm from './WellForm';
import { fetchWells, createWell, updateWell, deleteWell } from '../../store/well/wellActions'
import { useTheme } from '@emotion/react';

const Well = ({ wellData, error, loading, fetchWells, createWell, updateWell, deleteWell }) => {
  const theme = useTheme();
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
    <Box component='section' sx={{ height: '90%', flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h2' noWrap component='h2' color='primary'>Wells</Typography>
        <Button variant='contained' style={{ margin: '1rem' }} onClick={() => setOpen(true)}>New Well</Button>
      </Box>
      <Divider />
      <Box>
        <Grid container spacing={1} style={{ paddingTop: 20 }}>
          {wellData &&
            wellData.wells &&
              wellData.wells.map(well => 
              <Grid item key={well.id} xs={12} md={4} xl={2} style={{ padding: 10 }}>
                <Button href={`/well/${well.id}`}>
                  <Card sx={{ maxWidth: 500 }} key={well.id}>
                    <CardContent>
                      <Typography variant='h5' component='h5' color='secondary' gutterBottom>
                        {well.wname}
                      </Typography>
                      <Typography variant='p' component='h5' gutterBottom>VS of Well: <span style={{ color: theme.palette.secondary.main }}>{well.wvs}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>Sensor to Bit: <span style={{ color: theme.palette.secondary.main }}>{well.wstb}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>DLS Reference: <span style={{ color: theme.palette.secondary.main }}>{well.wdls}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>Wellhead N/S: <span style={{ color: theme.palette.secondary.main }}>{well.wns}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>wellhead E/W: <span style={{ color: theme.palette.secondary.main }}>{well.wew}</span></Typography>
                      <Typography variant='h6' component='h6' gutterBottom>Target Information</Typography>
                      <Typography variant='p' component='h5' gutterBottom>MD: <span style={{ color: theme.palette.secondary.main }}>{well.tmd}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>INC: <span style={{ color: theme.palette.secondary.main }}>{well.tinc}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>AZI: <span style={{ color: theme.palette.secondary.main }}>{well.tazi}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>TVD: <span style={{ color: theme.palette.secondary.main }}>{well.ttvd}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>LAT N/S: <span style={{ color: theme.palette.secondary.main }}>{well.tns}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>DEP E/W: <span style={{ color: theme.palette.secondary.main }}>{well.tew}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>VS: <span style={{ color: theme.palette.secondary.main }}>{well.tvs}</span></Typography>
                      <Typography variant='p' component='h5' gutterBottom>Radius: <span style={{ color: theme.palette.secondary.main }}>{well.trad}</span></Typography>
                    </CardContent>
                  </Card>
                </Button>
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
      {/* <WellForm
        open={open} 
        delete={handleDelete}
        close={handleClose}
        initialData={modalData}
        onData={handleModalData}
        onUpdate={handleUpdate}
        // onSubmit={handleSubmit}
      /> */}
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