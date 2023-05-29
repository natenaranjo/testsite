import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

import Table from './Table/Index';
import TieEnd from './TieEnd/Index';

const Survey = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <Container maxWidth="xxl">
          <Typography variant='h3' component='h3'>Surveys</Typography>
        </Container>
        <Container maxWidth='xxl' sx={{ padding: 2 }}>
          <TieEnd />
        </Container>
      </Stack>
      <Divider />

      <Grid container style={{ padding: 10 }}>
        <Grid container>
          <Table />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Survey