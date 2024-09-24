import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import { StrictMode } from 'react';

const App = () => {

  return (
    <StrictMode>
    <Container>
      <Header />
      <Products />
    </Container>
    </StrictMode>
  );
}

export default App;
