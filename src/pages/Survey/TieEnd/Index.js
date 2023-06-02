/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, update } from '../../../context/db/tyendSlice';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { db } from '../../../context/db/db';
import { useLiveQuery } from 'dexie-react-hooks';

const TieEnd = () => {
  const [buttons, setButtons] = useState(false);
  const tyendData = useSelector((state) => state.tyendValues);
  const [data, setData] = useState(tyendData);
  const dispatch = useDispatch();

  console.log('tyendData: ', data);

  const updates = useLiveQuery(
    async () => {
      let updates = await db.tends.toArray();
        updates = updates.find(x => x.wellId === '1');

        console.log(tyendData)
          // : tyendData({
          //     tymd: {
          //       value: updates.tymd,
          //       error: false,
          //       errorMessage: 'Must enter a measure depth',
          //     },
          //     tyinc: {
          //       value: updates.tyinc,
          //       error: false,
          //       errorMessage: 'Must enter a inclination',
          //     },
          //     tyazi: {
          //       value: updates.tyazi,
          //       error: false,
          //       errorMessage: 'Must enter an azimuth',
          //     },
          //     tytvd: {
          //       value: updates.tytvd,
          //       error: false,
          //       errorMessage: 'Must enter a tvd',
          //     },
          //     tyns: {
          //       value: updates.tyns,
          //       error: false,
          //       errorMessage: 'Must enter a north or south',
          //     },
          //     tyew: {
          //       value: updates.tyew,
          //       error: false,
          //       errorMessage: 'Must enter a east or west',
          //     },
          //     tyvs: {
          //       value: updates.tyvs,
          //       error: false,
          //       errorMessage: 'Must enter a vertical section',
          //     }
            // })
          // || setButtons(true);

      return updates;
    }
  )

  // async function addTyEnd() {
  //    try {
  //     await db.tends.add({
  //       wellId: '1',
  //       tymd: formValues.tymd.value,
  //       tyinc: formValues.tyinc.value,
  //       tyazi: formValues.tyazi.value,
  //       tytvd: formValues.tytvd.value,
  //       tyns: formValues.tyns.value,
  //       tyew: formValues.tyew.value,
  //       tyvs: formValues.tyvs.value,
  //     })

  //     console.log('testing: ', formValues)
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(
      (prev) => ({ 
        ...prev, 
        [name]: { value, error: false } 
      })
    );
  };

  const handleUpdate = () => {
    console.log('updated!')
  }

  const handleSubmit = () => {
    const formFields = Object.keys(data);
    let newFormValues = { ...data };

    for ( let index = 0; index < formFields.length; index++ ) {
      const currentField = formFields[index];
      const currentValue = data[currentField].value;

      if (currentValue === '') {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true
          }
        }
      }
    }

    setData(newFormValues);
    
    if (Object.values(newFormValues).every((value) => value.error === false)) console.log(data);
  }
 

  return (
    <form noValidate>
      <Stack direction='row' spacing={2}>
        <Typography variant='h6' style={{ padding: 20 }}>Tie-End Point</Typography>
          <TextField label='MD' name='tymd' variant='standard' required value={data.tymd.value} onChange={handleChange} error={data.tymd.error} helperText={data.tymd.error && data.tymd.errorMessage} sx={{ width: 100 }} />
          <TextField label='INC' name='tyinc' variant='standard' required value={data.tyinc.value} onChange={handleChange} error={data.tyinc.error} helperText={data.tyinc.error && data.tyinc.errorMessage} sx={{ width: 100 }} />
          <TextField label='AZI' name='tyazi' variant='standard' required value={data.tyazi.value} onChange={handleChange} error={data.tyazi.error} helperText={data.tyazi.error && data.tyazi.errorMessage} sx={{ width: 100 }} />
          <TextField label='TVD' name='tytvd' variant='standard' required value={data.tytvd.value} onChange={handleChange} error={data.tytvd.error} helperText={data.tytvd.error && data.tytvd.errorMessage} sx={{ width: 100 }} />
          <TextField label='N/S' name='tyns' variant='standard' required value={data.tyns.value} onChange={handleChange} error={data.tyns.error} helperText={data.tyns.error && data.tyns.errorMessage} sx={{ width: 100 }} />
          <TextField label='E/W' name='tyew' variant='standard' required value={data.tyew.value} onChange={handleChange} error={data.tyew.error} helperText={data.tyew.error && data.tyew.errorMessage} sx={{ width: 100 }} />
          <TextField label='VS' name='tyvs' variant='standard' required value={data.tyvs.value} onChange={handleChange} error={data.tyvs.error} helperText={data.tyvs.error && data.tyvs.errorMessage} sx={{ width: 100 }} />
          {buttons ? (
            <Button variant='contained' onClick={handleUpdate} size='small' style={{ margin: 20 }}>Save</Button>
          ):(
            <Button variant='contained' onClick={handleSubmit} size='small' style={{ margin: 20 }}>Add</Button>
          )}
      </Stack>
    </form>
  )
}

export default TieEnd