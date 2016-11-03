import React from 'react';
import styles from './styles.css';

const PopupStore = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <span>Popup</span>
      <span>stores</span>
    </div>
    <ul className={styles.list}>
      <li>Fear Of God</li>
      <li>
        <span>Off-White C/o Virgil Abloh</span>
        <sup>TM</sup>
      </li>
      <li>Mike Amiri</li>
      <li>Vetements</li>
      <li>Enfants Riches Déprimés</li>
    </ul>
    <div id="mc_embed_signup" className={styles.form}>
      <form
        action="//doveil.us4.list-manage.com/subscribe/post?u=418842c9c77d6dd26c53b80bf&amp;id=a047d273df"
        method="post" id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL" className={styles.label}>
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder="Sign up for opening dates"
              />
            </label>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_418842c9c77d6dd26c53b80bf_a047d273df"
                tabIndex="-1"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
        <div id="mce-responses">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
      </form>
    </div>
  </div>
);

export default PopupStore;
