import React from 'react';
import Helmet from 'react-helmet';
import Video from 'react-html5video';

import Logo from '../../components/Logo';
import Adress from '../../components/Adress';
import PopupStore from '../../components/PopupStore';
import UnderConstruction from '../../components/UnderConstruction';
import Footer from '../../components/Footer';

import styles from './styles.css';

const LandingPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.background}>
      <div className={styles.asset}>
        <div className={styles.movie}>
          <video
            src={require('./static/12_STILL_D_A.mp4')}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <div className={styles.mask}></div>
    </div>
    <div className={styles.container}>
      <Helmet
        title="Home Page"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application homepage' },
        ]}
      />
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.offices}>
        <Adress
          name="Los Angeles"
          adress="8825 Melrose Avenue"
          adress2="Los Angeles, CA 90069"
          phone="(310) 274 8800"
        />
        <Adress
          name="Malibu"
          adress="3939 Cross Creek Road"
          adress2="Malibu, CA 90265"
          phone="(310) 270 9009"
        />
        <Adress
          name="maxfield bleu"
          adress="301 North Canon Drive"
          adress2="Beverly Hills, CA 90210"
          phone="(310) 275 8818"
        />
      </div>
      <div className={styles.underConstruction}>
        <UnderConstruction />
      </div>
      <div className={styles.popupStore}>
        <PopupStore />
      </div>
      <Footer />
    </div>
  </div>
);

export default LandingPage;
