import "../App.css"
import { NavLink } from 'react-router-dom';

import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function NavBar () {

return(

  <nav id="nav" className='nav'>
    <NavLink to="/explore" end>
      <ExploreIcon/>
    </NavLink>
    <NavLink to="/categories">
      <CategoryIcon/>
    </NavLink>
    <NavLink to="/calender">
      <FavoriteBorderOutlinedIcon/>
    </NavLink>
    <NavLink to="/more">
      <CalendarTodayIcon/>
    </NavLink>
  </nav>
)


}
