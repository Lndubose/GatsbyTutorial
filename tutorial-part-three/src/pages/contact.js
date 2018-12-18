import React from 'react';
import Layout from '../components/layout.js';
import Footer from '../components/footer.js';

export default () => (
  <Layout>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
    <Footer />
  </Layout>
);
