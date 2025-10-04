import { AboutMyApproachBlock } from './common/about-my-approach';
import { ForWhomBlock } from './common/for-whom-block';
import { Header } from './common/header';
import { MainBlock } from './common/main-block';
import { MyServicesBlock } from './common/my-services-block';
import { QuoteBlock } from './common/quote-block';
import { WhatAmIDoing } from './common/what-am-I-doing';
import { GlobalStyles } from './global-styles';


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainBlock />
      <QuoteBlock />
      <AboutMyApproachBlock />
      <ForWhomBlock />
      <WhatAmIDoing/>
      <MyServicesBlock/>
    </>
  );
}

export default App;
