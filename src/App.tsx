import './App.css';

import { Button } from './components/button/button';
import { GlobalStyles } from './global-styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Button text={'запросить встречу'} />
    </>
  );
}

export default App;
