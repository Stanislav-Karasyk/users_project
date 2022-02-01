import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Main />
      </Wrapper>
    </>
  );
};

export default App;
