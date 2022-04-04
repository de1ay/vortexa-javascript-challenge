import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import BoatRamps from './modules/boat_ramps/BoatRamps';
import styles from './App.module.css';

const Home = lazy(() => import('./modules/home/Home'));

const App = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boat_ramps" element={<BoatRamps />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
