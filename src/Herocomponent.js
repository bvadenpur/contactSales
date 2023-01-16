import React from 'react'
import "./Herocomponent.css";

export default function Herocomponent() {
  return (
<div>
    <main className='main'>
        <div className='hero-section'>
            <div className='container'>
     <div class="sales"> 
                 <div class="sale">
                    <h1 class="h-1">Contact sales</h1>
                    <p class="p-medium">Fill out the form to contact our sales team.</p>
                    <p class="p-normal">We're here to help:</p>
                   <ul class="sales-list">
                       <li class="list-items">Switch to faster-loading, beautiful maps</li>
                       <li class="list-items">Build turn-by-turn navigation into your app</li>
                       <li class="list-items">Design custom styles and visualize your data</li>
                     
                   </ul> 
                   <div class="divider"></div>
                   <blockquote class="quote">
                       ''
                       <strong>
                         <em>Mapbox Tiling Service (MTS) allows </em>
                       </strong>
                       <a href="#" class="small-link">
                           <em>AllTrails</em>
                       </a>
                       <em> to quickly upload and process thousands of custom trails for our users. It makes it extremely easy to provide our customers with up-to-date information of highly detailed trail maps for their hiking, biking, and camping adventures around the world!</em>
                       ''
                   </blockquote>
                   <img src="https://assets.website-files.com/5e870779d9def4583b128a66/5f934482d3283e06548f9aa0_logo-47cc9916.svg" loading="lazy" alt="" class="sales-logo" />
                   <p class="p-small">James Graham</p>
                   <p class="p-small">Head Of Engineering at AllTrails
                        <br />
                    </p>
                </div> 
            <p class="p-small">
                Have technical questions about Mapbox?
                <br/>
                Contact 
                <a href="#" class="link-text">support</a>
                for help.
            </p>
        </div>
        <div className="sales-form">
            <div className="form">
            <form className="email-form">
                <div className="email">
                  <label for="Email" className="LABEL">
                    <div className="work-email">*</div>
                    Work email
                  </label>
                  <input id="Email" type="email" placeholder="example@mail.com" className="email-input" />
                </div>
           
            <div className="field-wrap">
                <label for="Areas-of-interest" className="LABELS">
                    <div className="area">* </div>
                        Area of interest
                </label>
                <div id="Radiolist" className="radio-list">
                    <input type="radio" id="radio-1" className="radio" />
                    <label for="radio-1">BI &amp; analytics</label>
                    <input type="radio" id="radio-2" className="radio" />
                    <label for="radio-2">Consumer applications</label>
                    <input type="radio" id="radio-3" className="radio" />
                    <label for="radio-3">Transportation &amp; logistics</label>
                    <input type="radio" id="radio-4" className="radio" />
                    <label for="radio-4">Automotive</label>
                    <input type="radio" id="radio-5" className="radio" />
                    <label for="radio-5">Government, aerospace &amp; imagery</label>
                    <input type="radio" id="radio-6" className="radio" />
                    <label for="radio-6">Retail</label>
                    <input type="radio" id="radio-7" className="radio" />
                    <label for="radio-7">Other</label>
                </div>
            </div>
                <div className="messages" id="message-form">
                    <label for="Inbound-message" id="MESSAGE" className="message">
                        <div className="areas">*</div>
                        How can we help you?
                    </label>
                    <textarea name="Inbound-message" className="textareas" id="Inbound-message" rows="5" placeholder="Your message..."></textarea>
                </div>
                <div className="buttons">
                    <button className="sales-button">Contact sales</button>
               
            
        </div>
        </form>
            </div>   
       </div>
       </div>
       </div>
       </main>
      </div>
        )
}
