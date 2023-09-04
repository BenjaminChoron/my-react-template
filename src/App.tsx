import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
