import React from 'react';
import HeroCover from './components/HeroCover';
import NavBar from './components/NavBar';
import DashboardPreview from './components/DashboardPreview';
import QuizPreview from './components/QuizPreview';
import CozyFooter from './components/CozyFooter';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0B1630' }}>
      <NavBar />
      <HeroCover />

      {/* Main preview sections */}
      <DashboardPreview />
      <QuizPreview />

      <CozyFooter />
    </div>
  );
}

export default App;
