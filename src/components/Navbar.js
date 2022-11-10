import { NavLink } from 'react-router-dom';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

// CSS
import styles from './Navbar.module.css'

export default function Navbar() {
    return (

        <div>
          <nav className={styles.nav1}>
            <NavLink to="/home" end>
              <HomeIcon />
            </NavLink>
            <NavLink to="/explore">
              <EventIcon />
            </NavLink> 
            <NavLink to="/calendar">
              <AccessibleForwardIcon />
            </NavLink>
            <NavLink to="/settings">
              <MoreVertIcon />
            </NavLink>
          </nav>
        </div>

    )
}