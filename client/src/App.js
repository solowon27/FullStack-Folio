import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App () {
  return (
    <main className='bg-gray-900 text-gray-100'>
    <div>
      <Header developerName= 'Solomon Tegegne' />
      <Footer />
    </div>
    </main>
  );
}

export default App;