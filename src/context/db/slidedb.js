import React, { useState } from 'react';
import db from './db';

export function AddSlide() {
  const [status, setStatus] = useState('');
  const [slide, setSlide] = useState({
    md: '',
    sfrom: '',
    sto: '',
    seen: '',
    rfrom: '',
    rto: '',
    unseen: '',
    clength: '',
  })

  async function addSlide() {
    try {

    } catch (e) {
      setStatus(`Failed to add slide: ${e}`);
    }
  }
}