import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import WellModal from './wellModal';
// import WellForm from './WellForm';
import { fetchWells, createWell, updateWell, deleteWell } from '../../store/well/wellActions'
import { useTheme } from '@emotion/react';

const Well = ({ wellData, error, loading, fetchWells, createWell, updateWell, deleteWell, createdWellId }) => {
  const theme = useTheme();
  const [modalData, setModalData] = useState();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetchWells();
  }, [fetchWells])

  console.log('createdWellId: ', createdWellId);

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

  // const handleEdit = (well) => {
  //   setOpen(true);
  //   setModalData(well);
  // }

  const handleDelete = () => {
    deleteWell(modalData.id);
    setOpen(false);
    fetchWells();
    setModalData();
  };

  return (
    <Box component='section' sx={{ height: '90%', flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h1' noWrap component='h2' color='primary'>Wells</Typography>
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
                  <Card sx={{ maxWidth: 500, borderRadius: '1rem' }} key={well.id}>
                    <CardContent>
                      <Typography variant='h2' component='h2' color='text.main' gutterBottom>
                        {well.wname}
                      </Typography>
                      <Typography variant='h4' gutterBottom>VS of Well: <span style={{ color: theme.palette.primary.dark }}>{well.wvs}</span></Typography>
                      <Typography variant='h4' gutterBottom>Sensor to Bit: <span style={{ color: theme.palette.primary.dark }}>{well.wstb}</span></Typography>
                      <Typography variant='h4' gutterBottom>DLS Reference: <span style={{ color: theme.palette.primary.dark }}>{well.wdls}</span></Typography>
                      <Typography variant='h4' gutterBottom>Wellhead N/S: <span style={{ color: theme.palette.primary.dark }}>{well.wns}</span></Typography>
                      <Typography variant='h4' gutterBottom>wellhead E/W: <span style={{ color: theme.palette.primary.dark }}>{well.wew}</span></Typography>
                      <Typography variant='h4' gutterBottom>Target Information</Typography>
                      <Typography variant='h4' gutterBottom>MD: <span style={{ color: theme.palette.primary.dark }}>{well.tmd}</span></Typography>
                      <Typography variant='h4' gutterBottom>INC: <span style={{ color: theme.palette.primary.dark }}>{well.tinc}</span></Typography>
                      <Typography variant='h4' gutterBottom>AZI: <span style={{ color: theme.palette.primary.dark }}>{well.tazi}</span></Typography>
                      <Typography variant='h4' gutterBottom>TVD: <span style={{ color: theme.palette.primary.dark }}>{well.ttvd}</span></Typography>
                      <Typography variant='h4' gutterBottom>LAT N/S: <span style={{ color: theme.palette.primary.dark }}>{well.tns}</span></Typography>
                      <Typography variant='h4' gutterBottom>DEP E/W: <span style={{ color: theme.palette.primary.dark }}>{well.tew}</span></Typography>
                      <Typography variant='h4' gutterBottom>VS: <span style={{ color: theme.palette.primary.dark }}>{well.tvs}</span></Typography>
                      <Typography variant='h4' gutterBottom>Radius: <span style={{ color: theme.palette.primary.dark }}>{well.trad}</span></Typography>
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
    createdWellId: state.createdWellId,
  };
};

const mapDispatchToProps = {
  fetchWells,
  deleteWell,
  createWell,
  updateWell,
};

export default connect (mapStateToProps, mapDispatchToProps) (Well)