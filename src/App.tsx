// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { PlanDetails } from './components/PlanDetails';

function App() {
  return (
    <BrowserRouter basename="/apni_meal/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-details" element={<PlanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
