import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='card bg-light'>
      <div className='card-heading'>
        <h2 className='text-center m-3'>Foxes and Fossils</h2>
        <p>
          <a href='http://foxesandfossils.com'>http://foxesandfossils.com</a>
        </p>
        <div className='row'>
          <div className='col-12'>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'btn menu btn-dark' : 'btn btn-success menu';
              }}
              to='/home'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'btn menu btn-dark' : 'btn btn-success menu';
              }}
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'btn menu btn-dark' : 'btn btn-success menu';
              }}
              to='/members'
            >
              Members
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'btn menu btn-dark' : 'btn btn-success menu';
              }}
              to='/songs'
            >
              Songs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
