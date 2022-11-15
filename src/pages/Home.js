import SearchBar from "../components/SearchBar"
import Logo from "../img/logo.png"

export default function Home() {
    return (
        <div>
            <img src={Logo} alt="" style={{ width: "45vw"}}></img>
            <SearchBar/>
            <h1>Highlights</h1>
            
            <h1>Upcoming events</h1>
            <h1>Hidden treasures</h1>
        </div>
    );
}