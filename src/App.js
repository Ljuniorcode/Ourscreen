import React from 'react';
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
import pele from './assets/img/pele.png';
import peleplay from './assets/img/peleplay.jpg';
// import { Title } from './components/ThumbOurscreen/styles';
import SectionOurscreen from './components/SectionOurscreen';
import CarouselOurscreen from './components/CarouselOurscreen';

const videos = [
  {
    src: pele,
    alt: "Pelé fazendo gol de bicicleta",
    title: "Amistoso contra Bélgica, 1965, Pelé e suas bicicletas",
    avatar: peleplay,
    channelName: "Futebol Nacional",
    timer: "8 min",
    link: 'https://www.youtube.com/watch?v=wFHZWpHoKTQ'
  },
  {
    src: pele,
    alt: "Pelé fazendo gol de bicicleta",
    title: "Amistoso contra Bélgica, 1965, Pelé e suas bicicletas",
    avatar: peleplay,
    channelName: "Futebol Nacional",
    timer: "8 min",
    link: 'https://www.youtube.com/watch?v=wFHZWpHoKTQ'
  },
  {
    src: pele,
    alt: "Pelé fazendo gol de bicicleta",
    title: "Amistoso contra Bélgica, 1965, Pelé e suas bicicletas",
    avatar: peleplay,
    channelName: "Futebol Nacional",
    timer: "8 min",
    link: 'https://www.youtube.com/watch?v=wFHZWpHoKTQ'
  },
  {
    src: pele,
    alt: "Pelé fazendo gol de bicicleta",
    title: "Amistoso contra Bélgica, 1965, Pelé e suas bicicletas",
    avatar: peleplay,
    channelName: "Futebol Nacional",
    timer: "8 min",
    link: 'https://www.youtube.com/watch?v=wFHZWpHoKTQ'
  },
  {
    src: pele,
    alt: "Pelé fazendo gol de bicicleta",
    title: "Amistoso contra Bélgica, 1965, Pelé e suas bicicletas",
    avatar: peleplay,
    channelName: "Futebol Nacional",
    timer: "8 min",
    link: 'https://www.youtube.com/watch?v=wFHZWpHoKTQ'
  },


]

function App() {
  return (
    <>
      <HeaderOurscreen>
        <Wrapper>
          <LogoOurscreen />

          <ButtonOurscreen as="a" href="/video/new">Novo Vídeo</ButtonOurscreen>
        </Wrapper>
      </HeaderOurscreen>

      <BannerOurscreen>
        <Text>
          <TagOurscreen>Dribles e Gols</TagOurscreen>
          <TitleOurscreen>A história de dribles e gols desde 1950 até hoje</TitleOurscreen>
          <DescriptionOurscreen>
            A arte de confundir o adversário gingando o corpo,controlando a bola e fazendo gols
            espetaculares.
          </DescriptionOurscreen>
        </Text>
        <ThumbOurscreen
          src={pele}
          alt="Pelé fazendo gol de bicicleta"
          title="Amistoso contra Bélgica, 1965, Pelé e suas bicicletas"
          avatar={peleplay}
          channelName="Futebol Nacional"
          timer="8 min"
        />
      </BannerOurscreen>

      <SectionOurscreen>
        <TagOurscreen>Futebol Nacional</TagOurscreen>
        <DescriptionOurscreen>
          #Finta, ginga, dribles e malabares dentro de campo
          #Finta, ginga, dribles e malabares dentro de campo
          #Finta, ginga, dribles e malabares dentro de campo

        </DescriptionOurscreen>
        <TagOurscreen small>Pelo - rei do futebol</TagOurscreen>
        <CarouselOurscreen videos={videos} />
      </SectionOurscreen>


      <FooterOurscreen>
        <LogoOurscreen />
        <p>
          <HighlightOurscreen>#Imersão React</HighlightOurscreen>
          {' '}
          com
          {' '}
          {' '}
          <LinkOurscreen
            href="https://www.twitch.tv/collections/mUYv3gQ4JhZsnw?filter=collections"
            target="_blank"
          >
            marcobrunodev
            {' '}
            {' '}
            <LogoImersao />
          </LinkOurscreen>
        </p>
      </FooterOurscreen>
    </>
  );
}

export default App;
