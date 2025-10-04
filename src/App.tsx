import './App.css';

import { AboutMyApproachBlock } from './common/about-my-approach';
import { Header } from './common/header';
import { MainBlock } from './common/main-block';
import { QuoteBlock } from './common/quote-block';
import { GlobalStyles } from './global-styles';


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainBlock />
      <QuoteBlock />
      <AboutMyApproachBlock />
    </>
  );
}

export default App;
