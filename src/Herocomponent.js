import React from 'react'
import "./Herocomponent.css";
import SalesComponent from './Salescomponent';
import SalesformComponent from './Salesformcomponent';


export default function Herocomponent() {
  return (
<div>
    <main className='main'>
        <div className='hero-section'>
            <div className='container'>
             <SalesComponent/>
             <SalesformComponent/>
        
       </div>
       </div>
       </main>
      </div>
        )
}
