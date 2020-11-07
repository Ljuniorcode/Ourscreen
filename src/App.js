import React from 'react'
import ButtonOurscreen from './components/ButtonOurscreen';
import FooterOurscreen from './components/FooterOurscreen';
import { HeaderOurscreen, Wrapper } from './components/HeaderOurscreen';
import LogoOurscreen from './components/LogoOurscreen';
import LinkOurscreen from './components/LinkOurscreen';
import HighlightOurscreen from './components/HighlightOurscreen';
import LogoImersao from './components/LogoImersao';
import TagOurscreen from './components/TagOurscreen';
import { Text, BannerOurscreen } from './components/BannerOurscreen';
import TitleOurscreen from './components/TitleOurscreen';
import DescriptionOurscreen from './components/DescriptionOurscreen';
import ThumbOurscreen from './components/ThumbOurscreen';
import pele from './assets/img/pele.png'

function App() {
  return (
    <>
      <HeaderOurscreen>
        <Wrapper>
          <LogoOurscreen />

          <ButtonOurscreen>Novo Vídeo</ButtonOurscreen>
        </Wrapper>
      </HeaderOurscreen>

      <BannerOurscreen>
        <Text>
          <TagOurscreen>Dribles e Gols</TagOurscreen>
          <TitleOurscreen>A história de dribles e gols desde 1950</TitleOurscreen>
          <DescriptionOurscreen>
            A arte de confundir o adversário gingando o corpo,controlando a bola e fazendo gols
            espetaculares.
          </DescriptionOurscreen>
        </Text>
        <ThumbOurscreen src={pele} alt='Pelé fazendo gol de bicicleta' />
      </BannerOurscreen>

      <FooterOurscreen>
        <LogoOurscreen />
        <p><HighlightOurscreen>#Imersão React</HighlightOurscreen> com {' '}
          <LinkOurscreen
            href="https://www.twitch.tv/collections/mUYv3gQ4JhZsnw?filter=collections"
            target="_blank"
          >marcobrunodev {' '}
            <LogoImersao />
          </LinkOurscreen>
        </p>
      </FooterOurscreen>
    </>
  );
}

export default App;
