import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import AlertsSnackbar from './components/Snackbar';

import Dashboard from './pages/Dashboard/Index';
import Well from './pages/Well/Index';
import Wells from './pages/Wells/Index';
// import Survey from './pages/Survey/Index';
import Slide from './pages/Slide/Index';


function App() {


  return (
    <>
      <AlertsSnackbar />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route index element={<Dashboard />} />
            <Route path='/wells' element={<Wells />} />
            <Route path='/well/:wellId' element={<Well />} />
            <Route path='/well/:wellId/slides' element={<Slide />} />
            </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;