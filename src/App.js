import { Form } from './components/Form/Form';
import { Container } from '@material-ui/core';
import 'fontsource-roboto';
import { validateCPF, validatePassword } from './models/registrationForm';
import formValidations from './contexts/validationsContext';

function App() {
  const handleSubmit = (data) => {
    //send to api
  };

  return (
    <Container component="article" maxWidth="sm">
      <formValidations.Provider
        value={{ cpf: validateCPF, password: validatePassword }}
      >
        <Form onSubmit={handleSubmit} />
      </formValidations.Provider>
    </Container>
  );
}

export default App;
