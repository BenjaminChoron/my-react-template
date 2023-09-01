import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Page from './pages/Page';
import PageNotFound from './pages/PageNotFound';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
