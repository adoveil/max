import React from 'react';
import Helmet from 'react-helmet';

import Logo from '../../components/Logo';
import PopupStore from '../../components/PopupStore';

import styles from './styles.css';

const LandingPage = () => (
  <div className={styles.wrapper}>
    <Helmet
      title="Home Page"
      meta={[
        { name: 'description', content: 'A React.js Boilerplate application homepage' },
      ]}
    />
    <Logo />
    <PopupStore />
  </div>
);

export default LandingPage;
