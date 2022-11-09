/*Places
*
*Component Functions to fetch and parse json data, example showing and writing filtering of categors
*Importing and Calling each place in a list of places to be rendered
*
*Author Jeffrey Serio
*/

import React, { useEffect, useState } from 'react'
import EventsItem from "./EventsItem";

export default function Events()
{
    const[events, setEvents] = useState([]);

    useEffect(() => {

        async function getEvents()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
            const response = await fetch(url);
            const data = await response.json();
            const filteredrest = [];
          
           try{
                for (var i = 0; i < data.length; i++) {
                var events= data[i];
               if(events.MainCategory.Id == '58')
               {
                   // console.log(place.Name + ' ' + place.MainCategory.Name);
                    filteredrest.push(Events)
               }
            }
           }catch (error) {
            console.log('Oh come on! These should be easy peeps! What')
          }
            setEvents(filteredrest);
        }
        getEvents();

    }, []);

    return(
    <>
    <h2>Places That are Events</h2>
        {
           events.map(place =>(<EventsItem events={events} key={events.id} />))
        }
    </>
    )    
}