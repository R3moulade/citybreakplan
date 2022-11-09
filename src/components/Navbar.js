import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

export default function Navbar() {
    return (

        <div>
          <nav className='nav1'>
            <NavLink to="/home" end>
              <HomeIcon size={30}/>
            </NavLink>
            <NavLink to="/list">
              <EventIcon size={30}/>
            </NavLink> 
            <NavLink to="/discount">
              <AccessibleForwardIcon size={30}/>
            </NavLink>
            <NavLink to="/profile">
              <BiUser size={30}/>
            </NavLink>
          </nav>
        </div>

    )
}