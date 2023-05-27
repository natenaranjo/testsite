import React, { useState } from 'react';
import { Box, Button, Divider, Modal, Typography } from '@mui/material';
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
        <ul>
          {wells?.map(well => <li key={well.id}>
            {well.id}, {well.wname}
          </li>)}
        </ul>
      </Box>
      <WellModal open={open} close={() => setOpen(false)} />
    </Box>
  )
}

export default Well