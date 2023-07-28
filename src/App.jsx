import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Admin, Analityc, Dashboard, Home, Landing } from './pages';
import { ProtectedPages } from './components/ProtectedPages';


function App() {
  const [user, setUser] = useState(null)

  const login = (e) => {
    e.preventDefault()
    setUser({
      id: 1,
      name: "Keyner",
      permissions: [ 'analize'  ],
      roles: [/* 'admin' */]
    })
  }
  const logaut = () => setUser(null)
  return (
    <BrowserRouter>
      <Navigation />

      {
        user ? (
          <button onClick={logaut}>Logaut</button>
        ) : (
          <button onClick={login}>Login</button>
        )
      }


      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route element={<ProtectedPages isAllowed={!!user} />} >
          <Route path='home' element={<Home />} />
          <Route path='dash' element={<Dashboard />} />
        </Route>

        <Route path='ana' element={
          <ProtectedPages
            isAllowed={!!user && user.permissions.includes('analize')}
            redirectTo='/home'
          >
            <Analityc />
          </ProtectedPages>
        } />

        <Route path='admin' element={
          <ProtectedPages
            isAllowed={!!user && user.roles.includes('admin')}
            redirectTo='/home'
          >
            <Admin />
          </ProtectedPages>
        } />

      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to='home'>Home</Link>
      </li>
      <li>
        <Link to='dash'>Dashboard</Link>
      </li>

      <li>
        <Link to='ana'>Analitica</Link>
      </li>
      <li>
        <Link to='admin'>Admin</Link>
      </li>
    </ul>
  </nav>
}

export default App;
