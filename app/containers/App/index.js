/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import styles from './styles.css';

function App(props) {
  return (
    <div className={styles.wrapper}>
      <Helmet
        title="MAXFIELD"
        meta={[
          { name: 'name', content: 'Home' },
          { name: 'description', content: 'More than a destination: It is a state of mind. Luxury boutique with curated designer and vintage collections for men and women.' },
        ]}
      />
      {React.Children.toArray(props.children)}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
