import React, { useState, useEffect } from 'react';
import { Box, Breadcrumbs, Button, Divider, Link, Modal, Stack} from '@mui/material';
import FormWellDetails from './FormWellDetails';
import FormTyendDetails from './FormTyendDetails';
import FormSuccess from './FormSuccess';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  form: {
    width: '100%',
    padding: 5,
  },
  formGrid: {
    paddingBottom: 10,
  },
  formInput: {
    width: '100%',
    padding: 5,
  },
  formTitle: {
    padding: 1,
  },
  formFooter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    gap: 8,
  },
  formButton: {
    marginTop: 20,
    width: 150,
  }
};


const WellModalB = (props) => {
  const [data, setData] = useState({});
  const [wellData, setWellData] = useState();
  const [tyendData, setTyendData] = useState();
  const [step, setStep] = useState(1);
  const breadcrumbs = [
    <Link underline="hover" key="1" color={step === 1 ? 'text.primary' : 'text.disabled'} onClick={() => setStep(1)}>Well Information</Link>,
    <Link underline="hover" key="2" color={step === 2 ? 'text.primary' : 'text.disabled'} onClick={() => setStep(2)}>Tie End Point</Link>,
    <Link underline="hover" key="3" color={step === 3 ? 'text.primary' : 'text.disabled'} onClick={() => setStep(3)}>Confirmation</Link>,
  ];

 useEffect(() => {
    if (props.initialData !== undefined){
      setData(props.initialData)
    }
 },[props.initialData])

  const handleWellData = (data) => {
    setWellData(data);
  }

  const handleTyendData = (data) => {
    setTyendData(data);
  }

  const handleSubmit = () => {
    props.onData(data);
    handleReset();
  }

  const handleReset = () => {
    props.close();
    setWellData();
    setTyendData();
    setStep(1);
  }

    // Go to next step on modal
  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  // Go back to prevous step on modal
  const previousStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  }

  console.log('wellData: ', wellData);
  console.log('tyendData: ', tyendData);

  const renderForm = () => {
    switch(step) {
      case 1:
        return (
          <FormWellDetails 
            nextStep={nextStep}
            initialData={wellData}
            onData={handleWellData}
          />
        );

      case 2: 
        return (
          <FormTyendDetails
            nextStep={nextStep}
            previousStep={previousStep}
            initialData={tyendData}
            onData={handleTyendData}
          />
        );

      case 3:
        return (
          <FormSuccess
            nextStep={nextStep}
            previousStep={previousStep}
          />
        );

      default: break;
    }
  }

  return (
      <Modal
        open={props.open}
        onClose={handleReset}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="xl"
      >
        <Box sx={style}>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ fontSize: '1rem'}}>
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
            <Button variant='link' onClick={handleReset} style={{ fontSize: '1rem', fontWeight: 'bold' }}>X</Button>
          </Box>
          <Divider />
          <Box>
            {renderForm()}
          </Box>
        </Box>
      </Modal>
  )
};

export default WellModalB;