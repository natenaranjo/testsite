/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { db } from '../../../context/db/db';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useLiveQuery } from 'dexie-react-hooks';

const TieEnd = () => {
  const [buttons, setButtons] = useState(false);
  const [formValues, setFormValues] = useState({
    tymd: {
      value: '',
      error: false,
      errorMessage: 'Must enter a measure depth',
    },
    tyinc: {
      value: '',
      error: false,
      errorMessage: 'Must enter a inclination',
    },
    tyazi: {
      value: '',
      error: false,
      errorMessage: 'Must enter an azimuth',
    },
    tytvd: {
      value: '',
      error: false,
      errorMessage: 'Must enter a tvd',
    },
    tyns: {
      value: '',
      error: false,
      errorMessage: 'Must enter a north or south',
    },
    tyew: {
      value: '',
      error: false,
      errorMessage: 'Must enter a east or west',
    },
    tyvs: {
      value: '',
      error: false,
      errorMessage: 'Must enter a vertical section',
    }
  });

  const updates = useLiveQuery(
    async () => {
      let updates = await db.tends.toArray();
        updates = updates.find(x => x.wellId === '1');

        console.log(formValues)

        !updates
          ? setButtons(false)
          : setFormValues({
              tymd: {
                value: updates.tymd,
                error: false,
                errorMessage: 'Must enter a measure depth',
              },
              tyinc: {
                value: updates.tyinc,
                error: false,
                errorMessage: 'Must enter a inclination',
              },
              tyazi: {
                value: updates.tyazi,
                error: false,
                errorMessage: 'Must enter an azimuth',
              },
              tytvd: {
                value: updates.tytvd,
                error: false,
                errorMessage: 'Must enter a tvd',
              },
              tyns: {
                value: updates.tyns,
                error: false,
                errorMessage: 'Must enter a north or south',
              },
              tyew: {
                value: updates.tyew,
                error: false,
                errorMessage: 'Must enter a east or west',
              },
              tyvs: {
                value: updates.tyvs,
                error: false,
                errorMessage: 'Must enter a vertical section',
              }
            })
          || setButtons(true);

      return updates;
    }
  )

  async function addTyEnd() {
     try {
      await db.tends.add({
        wellId: '1',
        tymd: formValues.tymd.value,
        tyinc: formValues.tyinc.value,
        tyazi: formValues.tyazi.value,
        tytvd: formValues.tytvd.value,
        tyns: formValues.tyns.value,
        tyew: formValues.tyew.value,
        tyvs: formValues.tyvs.value,
      })

      console.log('testing: ', formValues)
    } catch (e) {
      console.error(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues(
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
    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for ( let index = 0; index < formFields.length; index++ ) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

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

    setFormValues(newFormValues);
    
    if (Object.values(newFormValues).every((value) => value.error === false)) console.log(formValues);

    addTyEnd();
  }
 

  return (
    <form noValidate>
      <Stack direction='row' spacing={2}>
        <Typography variant='h6' style={{ padding: 20 }}>Tie-End Point</Typography>
          <TextField label='MD' name='tymd' variant='standard' required value={formValues.tymd.value} onChange={handleChange} error={formValues.tymd.error} helperText={formValues.tymd.error && formValues.tymd.errorMessage} sx={{ width: 100 }} />
          <TextField label='INC' name='tyinc' variant='standard' required value={formValues.tyinc.value} onChange={handleChange} error={formValues.tyinc.error} helperText={formValues.tyinc.error && formValues.tyinc.errorMessage} sx={{ width: 100 }} />
          <TextField label='AZI' name='tyazi' variant='standard' required value={formValues.tyazi.value} onChange={handleChange} error={formValues.tyazi.error} helperText={formValues.tyazi.error && formValues.tyazi.errorMessage} sx={{ width: 100 }} />
          <TextField label='TVD' name='tytvd' variant='standard' required value={formValues.tytvd.value} onChange={handleChange} error={formValues.tytvd.error} helperText={formValues.tytvd.error && formValues.tytvd.errorMessage} sx={{ width: 100 }} />
          <TextField label='N/S' name='tyns' variant='standard' required value={formValues.tyns.value} onChange={handleChange} error={formValues.tyns.error} helperText={formValues.tyns.error && formValues.tyns.errorMessage} sx={{ width: 100 }} />
          <TextField label='E/W' name='tyew' variant='standard' required value={formValues.tyew.value} onChange={handleChange} error={formValues.tyew.error} helperText={formValues.tyew.error && formValues.tyew.errorMessage} sx={{ width: 100 }} />
          <TextField label='VS' name='tyvs' variant='standard' required value={formValues.tyvs.value} onChange={handleChange} error={formValues.tyvs.error} helperText={formValues.tyvs.error && formValues.tyvs.errorMessage} sx={{ width: 100 }} />
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