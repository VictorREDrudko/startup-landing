import './App.css';

import { Header } from './common/header';
import { MainBlock } from './common/main-block';
import { GlobalStyles } from './global-styles';


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainBlock />
    </>
  );
}

export default App;
