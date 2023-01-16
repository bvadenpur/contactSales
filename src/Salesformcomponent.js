import React from "react"
import "./Salesformcomponent.css"

export default function SalesformComponent (){
    return (
   

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

)}