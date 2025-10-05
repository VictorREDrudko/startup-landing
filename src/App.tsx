import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AboutMyApproachBlock } from './common/about-my-approach';
import { Footer } from './common/footer';
import { ForWhomBlock } from './common/for-whom-block';
import { FormBlock } from './common/form-block';
import { Header } from './common/header';
import { JobStructureBlock } from './common/job-structure-block';
import { MainBlock } from './common/main-block';
import { MyIdeaBlock } from './common/my-idea-block';
import { MyServicesBlock } from './common/my-services-block';
import { PrivacyPolicyPage } from './common/privacy-policy-page';
import { QuoteBlock } from './common/quote-block';
import { TrainingBlock } from './common/training-block';
import { WhatAmIDoing } from './common/what-am-I-doing';
import { GlobalStyles } from './global-styles';


function MainPage() {
const TITLE1 = 'БИЗНЕС С ЧЕЛОВЕЧЕСКИМ ЛИЦОМ';
const QUOTE_TEXT1 = 'Когда в центре — не контроль, а смыслы.';
const QUOTE_TEXT2 = 'И не борьба, а согласованность.';

const TITLE2 = 'С УВАЖЕНИЕМ К УЖЕ СУЩЕСТВУЮЩЕЙ СИСТЕМЕ';
const QUOTE_TEXT3 = 'Всегда начинается с понимания контекста.';
const QUOTE_TEXT4 = 'Не «внедрение», а выстраивание вместе с вами.';

  return (
    <>
      <Header />
      <MainBlock />
      <QuoteBlock title={TITLE1} text1={QUOTE_TEXT1} text2={QUOTE_TEXT2} />
      <AboutMyApproachBlock />
      <ForWhomBlock />
      <WhatAmIDoing />
      <MyServicesBlock />
      <TrainingBlock />
      <JobStructureBlock />
      <QuoteBlock title={TITLE2} text1={QUOTE_TEXT3} text2={QUOTE_TEXT4} />
      <MyIdeaBlock />
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
