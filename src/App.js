import React from 'react'
import ButtonOurscreen from './components/ButtonOurscreen';
import FooterOurscreen from './components/FooterOurscreen';
import HeaderOurscreen from './components/HeaderOurscreen';
import LogoOurscreen from './components/LogoOurscreen';
import LinkOurscreen from './components/LinkOurscreen';

function App() {
  return (
    <>
      <HeaderOurscreen>
        <LogoOurscreen />
        <ButtonOurscreen>Novo Vídeo</ButtonOurscreen>
      </HeaderOurscreen>

      <FooterOurscreen>
        <LogoOurscreen />
        <p>Site feito na <strong>#Imersão React</strong> do {' '}
          <LinkOurscreen
            href="https://www.twitch.tv/collections/mUYv3gQ4JhZsnw?filter=collections"
            target="_blank"
          >marcobrunodev
          </LinkOurscreen>
        </p>
      </FooterOurscreen>
    </>
  );
}

export default App;
