/* eslint-disable global-require */

import React from 'react';
import Helmet from 'react-helmet';

import Logo from '../../components/Logo';
import Adress from '../../components/Adress';
import TemporaryShops from '../../components/TemporaryShops';
import UnderConstruction from '../../components/UnderConstruction';
import Footer from '../../components/Footer';

import styles from './styles.css';

const LandingPage = () => (
  <div className={styles.wrapper}>
    <Helmet
      title="MAXFIELD"
      meta={[
        { name: 'name', content: 'Home' },
        { name: 'description', content: 'More than a destination: It is a state of mind. Luxury boutique with curated designer and vintage collections for men and women.' },
        { name: 'twitter:title', content: 'Home' },
        { name: 'twitter:image', content: './static/logo-maxfield.png' },
        { name: 'twitter:url', content: 'http://www.maxfieldla.com/' },
        { name: 'twitter:card', content: 'summary' },
        { property: 'og:site_name', content: 'MAXFIELD' },
        { property: 'og:title', content: 'Home' },
        { property: 'og:url', content: 'http://www.maxfieldla.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: './static/logo-maxfield.png' },
        { itemprop: 'name', content: 'Home' },
        { itemprop: 'url', content: 'http://www.maxfieldla.com/' },
        { itemprop: 'thumbnailUrl', content: './static/logo-maxfield.png' },
        { itemprop: 'image', content: './static/logo-maxfield.png' },
      ]}
      link={[
        { rel: 'canonical', href: 'http://www.maxfieldla.com/' },
        { rel: 'image_src', href: './static/logo-maxfield.png' },
      ]}
    />
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.content}>
        <div className={styles.background}>
          <div className={styles.movie}>
            <video
              src={require('./static/maxfield01.mp4')}
              autoPlay
              loop
              muted
            />
          </div>
          <div className={styles.mask}></div>
        </div>
        <div className={styles.inner}>
          <div className={styles.underConstruction}>
            <UnderConstruction />
          </div>
          <div className={styles.temporaryShops}>
            <TemporaryShops />
          </div>
          <div className={styles.offices}>
            <Adress
              name="Los Angeles"
              adress="8825 Melrose Avenue"
              adress2="Los Angeles, CA 90069"
              adressURL="https://goo.gl/maps/y6U9uncB5f62"
              phone="+1-310-274-8800"
              formatedPhone="(310) 274 8800"
            />
            <Adress
              name="Malibu"
              adress="3939 Cross Creek Road"
              adress2="Malibu, CA 90265"
              adressURL="https://goo.gl/maps/WgJ8wyjYfm52"
              phone="+1-310-270-9009"
              formatedPhone="(310) 270 9009"
            />
            <Adress
              name="Maxfield Bleu"
              adress="301 North Canon Drive"
              adress2="Beverly Hills, CA 90210"
              adressURL="https://goo.gl/maps/cRsPCD19Kqo"
              phone="+1-310-275-8818"
              formatedPhone="(310) 275 8818"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </div>
);

export default LandingPage;
