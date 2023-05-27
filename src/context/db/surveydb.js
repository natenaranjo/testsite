/* eslint-disable no-undef */
import React, { useState } from 'react';
import db from './db';

export function AddSurvey() {
  const [survey, setSurvey] = useState({
    mdepth: '',
    inclination: '',
    azimuth: '',
  });
  const [status, setStatus] = useState('');

  async function addSurvey() {
    try {
      const id = await db.surveys.add({
        md,
        inc,
        azi,
        my,
        cl,
        tvd,
        ns,
        ew,
        chd,
        bear,
        vs,
        bur,
        rot,
        dls,
        tf,
        mb,
        bursvy,
        bitdepth,
        projinc,
        projazi,
        projtvd
      })
    } catch(e) {
      setStatus('Error: ' + e.message);
    }
  }
}