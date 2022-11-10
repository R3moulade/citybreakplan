/*Places
*
*Component Functions to fetch and parse json data, example showing and writing filtering of categors
*Importing and Calling each place in a list of places to be rendered
*
*Author Jeffrey Serio
*/

import React, { useEffect, useState } from 'react'
import EventsItem from "./EventsItem";
import Category from '../components/Category';

export default function Categories() {
    return (
        <div>
            <Category title="Cafe" />
        </div>
    )
}