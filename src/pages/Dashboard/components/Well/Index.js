import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import WellModal from './wellModal';
import { db } from '../../../../context/db/db';
import { useLiveQuery } from 'dexie-react-hooks';

const Well = () => {
  const [open, setOpen] = useState(false);

  const wells = useLiveQuery(
    async () => {
      const wells = await db.wells.toArray();

      return wells;
    },
  );

  return (
    <Box component='section' sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h2' noWrap component='h2'>Wells</Typography>
        <Button variant='contained' style={{ margin: '1rem' }} onClick={() => setOpen(true)}>New Well</Button>
      </Box>
      <Divider />
      <Box>
        <Grid container spacing={1} style={{ paddingTop: 20 }}>
          {wells?.map(well => 
            <Grid items key={well.id} xs={12} md={4} xl={2} style={{ padding: 10 }}>
              <Card sx={{ maxWidth: 300, bgcolor: '#F8F8F7' }}>
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
                      <Link to={`/well/${well.id}/survey`}>
                        <Button variant='text'>Surveys</Button>
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Button variant='text'>Edit</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
      <WellModal open={open} close={() => setOpen(false)} />
    </Box>
  )
}

export default Well