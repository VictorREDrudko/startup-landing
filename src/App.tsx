import './App.css';

import { Button } from './components/button/button';
import { H1, H2, H3, Text } from './components/text';
import { GlobalStyles } from './global-styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Button text={'запросить встречу'} />
      <Text fontSize={18}>Variants</Text>
      <H1 color={'red'} fontSize={14}>Variants 22222222222222222222</H1>
      <H3 color={'--primary-color-text-grey'} fontSize={14}>Variants 333333333333333</H3>
      <H2 color={'#2D2D2D'} fontSize={14}>Variants 444444444444</H2>
    </>
  );
}

export default App;
