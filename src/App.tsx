import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './quickstart-router-basics/components/Header';
import Home from './quickstart-router-basics/pages/Home';
import About from './quickstart-router-basics/pages/About';
import Members from './quickstart-router-basics/pages/Members';
import SongList from './quickstart-router-basics/pages/SongList';
import { useState } from 'react';

export type MemberType = {
  name: string;
  photo: string;
};

const App = () => {
  const [members] = useState<MemberType[]>([
    { name: 'Maggie Adams', photo: 'photos/Mag.png' },
    { name: 'Sammie Purcell', photo: 'photos/Sam.png' },
    { name: 'Tim Purcell', photo: 'photos/Tim.png' },
    { name: 'Scott King', photo: 'photos/King.png' },
    { name: 'Johnny Pike', photo: 'photos/JPike.jpg' },
    { name: 'Toby Ruckert', photo: 'photos/Toby.jpg' },
  ]);

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
            Home
          </Route>
          <Route path='/about' element={<About title={'여우와 늙다리들'} />}>
            About
          </Route>
          <Route path='/members' element={<Members members={members} />}>
            Members
          </Route>
          <Route path='/songs' element={<SongList />}>
            SongList
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
