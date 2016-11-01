import React from 'react';

import styles from './styles.css';

const Adress = (props) => (
  <div className={styles.wrapper}>
    <p className={styles.name}>{props.name}</p>
    <p>{props.adress}</p>
    <p>{props.adress2}</p>
    <p>{props.phone}</p>
  </div>
);

Adress.propTypes = {
  name: React.PropTypes.string.isRequired,
  adress: React.PropTypes.string.isRequired,
  adress2: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
};

export default Adress;
