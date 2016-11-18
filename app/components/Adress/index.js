import React from 'react';

import styles from './styles.css';

const Adress = (props) => (
  <div className={styles.wrapper}>
    <p className={styles.name}>{props.name}</p>
    <p>
      <a href={props.adressURL} target="_blank">
        <span>
          {props.adress}
        </span>
        <span>
          {props.adress2}
        </span>
      </a>
    </p>
    <p>
      <a href={`tel:${props.phone}`}>{props.formatedPhone}</a>
    </p>
  </div>
);

Adress.propTypes = {
  name: React.PropTypes.string.isRequired,
  adress: React.PropTypes.string.isRequired,
  adress2: React.PropTypes.string.isRequired,
  adressURL: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  formatedPhone: React.PropTypes.string.isRequired,
};

export default Adress;
