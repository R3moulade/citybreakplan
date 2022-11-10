/*
*PlaceItem
*Simple Component Function to stype and return a place to eat
*
*/


export default function EventsItem({event}){
    return <div style={{display:"float"}}>
            <div style={{float:"left", width:"25%"}}>{event.Name}</div>
            <div style={{float:"left", width:"75%"}}>{event.Category.Name}</div>
        </div>;
}