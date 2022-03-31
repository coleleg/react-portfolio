import React, { useState } from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');

  const renderApp = () => {
    if (page === 'home') {
      return <About />
    }
    if (page === 'contact') {
      return <Contact />
    }
    if (page === 'projects') {
      return <Projects />
    }
    if (page === 'resume') {
      return <Resume />
    }
  }

  return (
    <body>
      <Nav
        page={page}
        setPage={setPage}>
      </Nav>
      <main>
        {renderApp()}
      </main>
      <Footer page={page}
        setPage={setPage}>
      </Footer>
    </body>
  );
}

export default App;
