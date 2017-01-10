import React from 'react';
import styles from './styles.css';

export default class TemporaryShops extends React.Component {

  componentWillMount() {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Temporary Shops
        </div>
        <ul className={styles.list}>
          <li>
            <span>Off-White C/o Virgil Abloh</span>
            <sup>TM</sup>
          </li>
          <li>Daft Punk</li>
          <li>Mathieu Cesar</li>
          <li>Mike Amiri</li>
          <li>Enfants Riches Déprimés</li>
          <li>Fear of God</li>
        </ul>
        <div id="mc_embed_signup" className={styles.form}>
          <form
            action="//maxfieldla.us11.list-manage.com/subscribe/post?u=0282d9dcd0f4c4b8d49ae8b33&amp;id=b311603328&amp;MERGE8=TemporaryShops"
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
                    name="b_0282d9dcd0f4c4b8d49ae8b33_b311603328"
                    tabIndex="-1"
                  />
                </div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                <input
                  type="submit"
                  value="Submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
        <script dangerouslySetInnerHTML={{ __html: '(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]="EMAIL";ftypes[0]="email";}(jQuery));var $mcj = jQuery.noConflict(true);' }}></script>
      </div>
    );
  }
}
