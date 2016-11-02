/* eslint-disable global-require */

import React from 'react';

import styles from './styles.css';

const Logo = () => (
  <div className={styles.wrapper}>
    <img src={require('./assets/maxfield-logo-2016.svg')} alt="maxfield" />
  </div>
);

export default Logo;
