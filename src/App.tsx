import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './quickstart-router-basics/components/Header';
import Home from './quickstart-router-basics/pages/Home';
import About from './quickstart-router-basics/pages/About';
import Members from './quickstart-router-basics/pages/Members';
import SongList from './quickstart-router-basics/pages/SongList';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
            Home
          </Route>
          <Route path='/about' element={<About />}>
            About
          </Route>
          <Route path='/members' element={<Members />}>
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
