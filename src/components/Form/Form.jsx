import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { AddressData } from './AddressData';
import { PersonalData } from './PersonalData';
import { UserData } from './UserData';

export const Form = ({ onSubmit, validations }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  useEffect(() => {
    if (currentStage === forms.length - 1) {
      onSubmit(collectedData);
    }
  });

  const nextStage = () => {
    setCurrentStage(currentStage + 1);
  };

  const collectData = (data) => {
    setCollectedData({ ...collectedData, ...data });
    nextStage();
  };

  const forms = [
    <UserData toSend={collectData} validations={validations} />,
    <PersonalData toSend={collectData} validations={validations} />,
    <AddressData toSend={collectData} validations={validations} />,
    <Typography variant="h5" align="center">
      Cadastro Realizado com Sucesso!
    </Typography>,
  ];
  return (
    <>
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <Stepper activeStep={currentStage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalizado</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStage]}
    </>
  );
};
