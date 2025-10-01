import './App.css';

import { Button } from './components/button';
import { H1, H2, H3, Text } from './components/text';
import { Widget } from './components/widget';
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

      <Widget text="Обычный виджет" />
      {/* Виджет с кастомным фоном */}
      <Widget 
        text="Виджет с hex фоном" 
        backgroundColor="red"
      />
      {/* Виджет с CSS переменной */}
      <Widget 
        text="Виджет с CSS переменной" 
        backgroundColor="--primary-color-20"
      />
      {/* Виджет с градиентом */}
      <Widget 
        text="Виджет с градиентом" 
        backgroundColor="linear-gradient(135deg, #EDEBE6 0%, #E8D6E3 87%)"
      />
      {/* Виджет с ограничением по ширине */}
      <Widget 
        // eslint-disable-next-line max-len
        text={'Очень длинный текст который будет переноситься на новую строку из-за ограничения максимальной ширины'}
        maxWidth="200px"
        fontSize={14}
      />
    </>
  );
}

export default App;
