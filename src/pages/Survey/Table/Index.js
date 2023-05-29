import  React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Seen', Label: 'seen' },
  { field: 'Unseen' },
  { field: 'MD', editable: true },
  { field: 'INC', editable: true },
  { field: 'AZI', editable: true },
  { field: 'MY' },
  { field: 'CL' },
  { field: 'TVD' },
  { field: 'NS' },
  { field: 'EW' },
  { field: 'HD' },
  { field: 'Bearing' },
  { field: 'VS' },
  { field: 'BUR' },
  { field: 'ROT' },
  { field: 'DLS' },
  { field: 'TF' },
  { field: 'MBUR' },
  { field: 'TRG' },
  { field: 'BitDepth' },
  { field: 'ProjInc' },
  { field: 'ProjAzi' },
  { field: 'ProjTvd' },
]

const rows = [
  {id: 1, Seen: '', Unseen: '', MD: '1700.00', INC: '4.00', AZI: '259.47', MY: '', CL: '100.00', TVD: '1699.84', NS: '-1.28', EW: '-6.87', HD: '6.983', Bearing: '249.468', VS: '1.08', BUR: '2.00', ROT: '0.000', DLS: '1.880', TF: '0', MBUR: '0', TRG: '0.678', BitDepth: '1769.00', ProjInc: '5.47', ProjAzi: '0', ProjTvd: '1768.602' },
]

export default function Table() {

  return (
    <Box>
      <DataGrid  
        rows={ rows }
        columns={ columns }
        xs={{
          boxShadow: 0,
          border: 0,
          height: '75vh'
        }}
      />
    </Box>
  )
}