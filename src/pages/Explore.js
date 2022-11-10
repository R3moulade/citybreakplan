import Events from "../components/Events"
import React, { useEffect, useState } from 'react'
import EventsItem from "../components/EventsItem";
import Category from '../components/Category';



export default function Explore() {
      
  const[events, setEvents] = useState([]);
  useEffect(() => {

    async function getEvents()
    {
        const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
        const response = await fetch(url);
        const data = await response.json();
        const filteredrest = [];
        console.log(data);
      
       try{
            for (var i = 0; i < data.length; i++) {
            var event = data[i];
           if(event.MainCategory.Id == '62')
           {
               // console.log(place.Name + ' ' + place.MainCategory.Name);
                filteredrest.push(event)
           }
        }
       }catch (error) {
        console.log('Oh come on! These should be easy peeps! What')
      }
        setEvents(filteredrest);
    }
    getEvents();

}, []);
  
      return (
        <div className="exploreGRID">
            <Category title="{data1.Name}" />
            <Category title="Museum" />
            <Category title="Motion" />
            <Category title="Park" />
            <Category title="Cafe" />
            <Category title="Cafe" background="" />


            {
           events.map(event =>(<EventsItem event={event} key={event.id} />))
        }


        </div>
    )


}