import { StackProvider, StackTheme, StackHandler } from '@stackframe/react';
import { stackClientApp } from './stack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <StackProvider app={stackClientApp}>
      <StackTheme>
        <BrowserRouter>
          <Routes>
            <Route path="/handler/*" element={<StackHandler fullPage />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </StackTheme>
    </StackProvider>
  );
}

export default App;
