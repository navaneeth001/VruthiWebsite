import { useEffect } from 'react';
import '@/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import HomePage from '@/pages/HomePage';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
      <Toaster />
    </div>
  );
}

export default App;