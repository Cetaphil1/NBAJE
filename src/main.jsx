import React from 'react';
import ReactDOM from 'react-dom/client';
import './tokens.css';
import './landing.css';
import './survey.css';
import SurveyApp from './survey';
import IcebergScene from './iceberg';

const surveyMount = document.getElementById('survey-mount');
if (surveyMount) {
  ReactDOM.createRoot(surveyMount).render(<SurveyApp />);
}

const icebergMount = document.getElementById('iceberg-mount');
if (icebergMount) {
  ReactDOM.createRoot(icebergMount).render(<IcebergScene />);
}
