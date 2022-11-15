
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SaveItem from "./SaveItem";
import "./Calendar.css"

export default function Save() {
    const[saves, setSaves] = useState([]);

    useEffect(() => {

        async function getSaves()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
            const response = await fetch(url);
            const data = await response.json();
            const filteredrest = [];
          
           try{
                for (var i = 0; i < data.length; i++) {
                var place = data[i];
               if(data)
               {
                   // console.log(place.Name + ' ' + place.MainCategory.Name);
                    filteredrest.push(place)
               }
            }
           }catch (error) {
            console.log('Oh come on! These should be easy peeps! What')
          }
            setSaves(filteredrest);
        }
        getSaves();

    }, []);

    window.onload=function()
        {document.getElementById("breakfast2")
        .addEventListener('click', function(event) {
          document.getElementById("mealTableContainer2").classList.remove('hidden');
        });}

            return (
<div>
<button id="breakfast2">Save</button>
<table id="mealTableContainer2" className="hidden">
  <thead>
    <tr>
      <th id="mealname">
        {
           saves.map(save =>(<SaveItem save={save} key={save.id}/>))
        }
        </th>
    </tr>
  </thead>
  <tbody id="mealContainer2"></tbody>
</table>
</div>
            );
// onclick - add saved class
// filter saved class, includes
}