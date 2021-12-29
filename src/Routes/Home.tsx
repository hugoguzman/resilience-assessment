import React from 'react';
// import '../App.css';
import { TestForm } from '../Components/TestForm'

export default function HealthandWellbeing() {
    return (
      <div style={{ display: 'flex', flex: 1, marginTop: '10%'}}>
        <TestForm onSubmit={({email, firstName, lastName}) => {
          console.log(email, firstName, lastName)
        }} />
      </div>
    );
  }