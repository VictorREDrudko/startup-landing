import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AboutMyApproachBlock } from './common/about-my-approach';
import { DescriptionBlock } from './common/description-block';
import { Footer } from './common/footer';
import { ForWhomBlock } from './common/for-whom-block';
import { FormBlock } from './common/form-block';
import { Header } from './common/header';
import { JobStructureBlock } from './common/job-structure-block';
import { MainBlock } from './common/main-block';
import { MyServicesBlock } from './common/my-services-block';
import { PrivacyPolicyPage } from './common/privacy-policy-page';
import { QuoteBlock } from './common/quote-block';
import { TrainingBlock } from './common/training-block';
import { WhatAmIDoing } from './common/what-am-I-doing';
import { GlobalStyles } from './global-styles';

function MainPage() {
  return (
    <>
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

function App() {
  // Базовый путь для GitHub Pages
  const basename = import.meta.env.BASE_URL;

  return (
    <Router basename={basename}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
