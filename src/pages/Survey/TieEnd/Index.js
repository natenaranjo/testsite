import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { fetchTyend, createTyend, updateTyend, resetTyendRequest } from '../../../store/tyend/tyendActions';


const Tyend = ({ tyendData, error, fetchTyend, createTyend, updateTyend, resetTyendRequest }) => {
  const { wellId } = useParams();
  const [data, setData] = useState({});
  const [wellid, setWellid] = useState();
  const [buttons, setButtons] = useState(false);

  useEffect(() => {
    fetchTyend(wellId);

    const clearBeforeExit = () => {
      setData({});
    }

    window.addEventListener('beforeunload', clearBeforeExit);

    return () => {
      window.removeEventListener('beforeunload', clearBeforeExit);
      resetTyendRequest();
    }
  }, [fetchTyend]);

  if(!wellid) {
    setWellid(wellId);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tyendData) {
    return <CircularProgress />;
  }

  const isEmpty = Object.keys(data).length === 0;
  
  if(tyendData.tyends) {
    if (isEmpty) {
      console.log('id: ', tyendData.tyends)
      setData(tyendData.tyends);
      setButtons(true);
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(values => ({
      ...values, [name]: value,
      wellId: wellid 
    }));
  };

  const handleUpdate = () => {
    updateTyend(data)
  }

  const handleAdd = () => {
     createTyend(data);
  }

  console.log('data: ', data);
  console.log('tyendData: ', tyendData.tyends);
  console.log('wel: ', wellid);

  return (
    <>
        <form noValidate>
                <Stack direction='row' spacing={2}>
                  <Typography variant='h6' style={{ padding: 20 }}>Tie-End Point</Typography>
                    <TextField label='MD' name='tymd' variant='standard' required value={data.tymd || ''} onChange={handleChange} sx={{ width: 100 }} />
                    <TextField label='INC' name='tyinc' variant='standard' required value={data.tyinc || ''} onChange={handleChange} sx={{ width: 100 }} />
                    <TextField label='AZI' name='tyazi' variant='standard' required value={data.tyazi || ''} onChange={handleChange} sx={{ width: 100 }} />
                    <TextField label='TVD' name='tytvd' variant='standard' required value={data.tytvd || ''} onChange={handleChange} sx={{ width: 100 }} />
                    <TextField label='N/S' name='tyns' variant='standard' required value={data.tyns || ''} onChange={handleChange} sx={{ width: 100 }} />
                    <TextField label='E/W' name='tyew' variant='standard' required value={data.tyew || ''} onChange={handleChange} sx={{ width: 100 }} />
                    <TextField label='VS' name='tyvs' variant='standard' required value={data.tyvs || ''} onChange={handleChange} sx={{ width: 100 }} />
                    {buttons
                     ? <Button variant='contained' onClick={handleUpdate} size='small' style={{ margin: 20 }}>Save</Button>
                     : <Button variant='contained' onClick={handleAdd} size='small' style={{ margin: 20 }}>Add</Button>
                    }
                </Stack>
        </form>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    tyendData: state.tyend,
    error: state.error,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  fetchTyend,
  updateTyend,
  createTyend,
  resetTyendRequest,
};

export default connect (mapStateToProps, mapDispatchToProps) (Tyend);