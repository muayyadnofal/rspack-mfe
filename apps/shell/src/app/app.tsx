import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Availability = React.lazy(() => import('availability/Module'));
const Logs = React.lazy(() => import('logs/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/availability">Availability</Link>
        </li>
        <li>
          <Link to="/logs">Logs</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
