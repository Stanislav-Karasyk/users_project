import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
        <Header />
      <Container>
        <Main />
      </Container>
    </>
  );
};

export default App;
