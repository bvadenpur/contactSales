import React from "react";
import "./Radiobuttons.css";

export default function Radiobuttons() {
    return(
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
    )
}