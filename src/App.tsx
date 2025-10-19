import { StackProvider, StackTheme, StackHandler } from '@stackframe/react';
import { stackClientApp } from './stack';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import AuthHandler from './AuthHandler';

function HandlerPage() {
  const location = useLocation();
  return (
    <>
      <AuthHandler />
      <StackHandler app={stackClientApp} location={location.pathname} fullPage />
    </>
  );
}

function App() {
  return (
    <StackProvider app={stackClientApp}>
      <StackTheme>
        <BrowserRouter>
          <Routes>
            <Route path="/handler/*" element={<HandlerPage />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </StackTheme>
    </StackProvider>
  );
}

export default App;
