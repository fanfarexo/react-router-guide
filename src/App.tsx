import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './quickstart-router-basics/components/Header';
import Home from './quickstart-router-basics/pages/Home';
import About from './quickstart-router-basics/pages/About';
import Members from './quickstart-router-basics/pages/Members';
import SongList from './quickstart-router-basics/pages/SongList';
import { useState } from 'react';
import Player from './quickstart-router-basics/pages/songs/Player';
import SongIndex from './quickstart-router-basics/pages/songs/Index';

export type MemberType = {
  name: string;
  photo: string;
};

export type SongType = {
  id: number;
  title: string;
  musician: string;
  youtube_link: string;
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

  const [songs] = useState<SongType[]>([
    { id: 1, title: "Fallin' for you", musician: 'Colbie callet', youtube_link: 'PABUl_EX_hw' },
    { id: 2, title: "Can't hurry love", musician: 'The supremes', youtube_link: 'EJDPhjQft04' },
    { id: 3, title: 'Landslide', musician: 'Dixie chicks', youtube_link: 'V2N7gYom9-A' },
    { id: 4, title: "Can't let go", musician: 'Linda ronstadt', youtube_link: 'P-EpGKXmoe4' },
    { id: 5, title: 'Doctor my eyes', musician: 'Jackson Browne', youtube_link: '7JlFKS_1oZk' },
    {
      id: 6,
      title: 'We gotta get you a woman',
      musician: 'Todd Rundgren',
      youtube_link: 'EyUjbBViAGE',
    },
    { id: 7, title: 'Hip to my heart', musician: 'Band Perry', youtube_link: 'vpLCFnD9LFo' },
    { id: 8, title: 'Rolling in the deep', musician: 'Adele', youtube_link: 'EvK8pDK6IQU' },
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
          <Route path='/songs' element={<SongList songs={songs} />}>
            <Route index element={<SongIndex />} />
            <Route path=':id' element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
