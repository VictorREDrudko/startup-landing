import { AboutMyApproachBlock } from './common/about-my-approach';
import { DescriptionBlock } from './common/description-block';
import { Footer } from './common/footer';
import { ForWhomBlock } from './common/for-whom-block';
import { FormBlock } from './common/form-block';
import { Header } from './common/header';
import { JobStructureBlock } from './common/job-structure-block';
import { MainBlock } from './common/main-block';
import { MyServicesBlock } from './common/my-services-block';
import { QuoteBlock } from './common/quote-block';
import { TrainingBlock } from './common/training-block';
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
      <WhatAmIDoing />
      <MyServicesBlock />
      <TrainingBlock />
      <JobStructureBlock />
      <DescriptionBlock />
      <FormBlock />
      <Footer />
    </>
  );
}

export default App;
