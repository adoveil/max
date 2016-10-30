import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.css';

const LandingPage = () => (
  <article>
    <Helmet
      title="Home Page"
      meta={[
        { name: 'description', content: 'A React.js Boilerplate application homepage' },
      ]}
    />
    <div className={styles.wrapper}>
      Landing
    </div>
  </article>
);

export default LandingPage;
