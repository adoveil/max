/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

export function NotFound() {
  return (
    <article>
      not found
    </article>
  );
}

// Wrap the component to inject dispatch and state into it
export default NotFound;
