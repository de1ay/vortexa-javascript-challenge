import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import './App.css';

const Home = lazy(() => import('./modules/home/Home'));
const BoatRamps = lazy(() => import('./modules/boat_ramps/BoatRamps'));

const App = () => {
  return (
    <div className="App">
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
