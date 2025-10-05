import { H2QuoteBlock } from '../../components/text';
import { Widget } from '../../components/widget';
import { Styled } from './styled';

type QuoteBlockData = {
  title: string;
  text1: string;
  text2: string;
};

export const QuoteBlock = ({ title, text1, text2 }: QuoteBlockData) => {
  return (
    <Styled.Container>
      <Widget text={title} fontSize={22} lineHeight={1.1} />
      <div>
        <H2QuoteBlock>{text1}</H2QuoteBlock>
        <H2QuoteBlock>{text2}</H2QuoteBlock>
      </div>
    </Styled.Container>
  );
};
