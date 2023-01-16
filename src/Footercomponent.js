import React from 'react'
import "./Footercomponent.css";
import SociallinkComponent from './Sociallinkcomponent';
import BottomlinksComponent from './Bottomlinkscomponent'
export default function Footercomponent() {
  return ( 
<div>

<div class="footer">
        <div class="footer-container">
            <a href="#" class="footer-logo-1">
                <img src="https://assets.website-files.com/5e870779d9def4583b128a66/5e870779e18b0e2eaaa63ca6_logo-dark.svg" width="94" alt="" class="bottom-logo"></img>
             </a>
            <div class="footer-grid">
                <a href="#" class="footer-logo">
                    <img src="https://assets.website-files.com/5e870779d9def4583b128a66/5e870779e18b0e2eaaa63ca6_logo-dark.svg" width="94" alt="" class="bottom-logo"></img>
                 </a>
             <ul class="footer-list" id="fl-1">
                   <li class="list-item">
                       <div class="title">Products</div>
                   </li>
                   <li class="list-item">
                       <a href="#" class="footer-link">Fleet</a>
                   </li>
                   <li class="list-item">
                    <a href="#" class="footer-link">Address Autofill</a>
                 </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Navigation SDK</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Dash</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Search</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Maps</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Mobile Maps SDK</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Studio</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Data</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Vision</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Atlas</a>
                </li>
                <li class="list-item">
                   <div class="separator">—</div>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Pricing</a>
                </li>   
             </ul>
             <ul class="footer-list" id="fl-2">
                <li class="list-item">
                    <div class="title">company</div>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">About</a>
                </li>
                <li class="list-item">
                 <a href="#" class="footer-link">Customers</a>
              </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Community</a>
             </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Careers</a>
             </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Sustainability</a>
             </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Diversity &amp; Inclusion</a>
             </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Team</a>
             </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Blog</a>
             </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Press</a>
             </li>
             <li class="list-item">
                 <a href="#" class="footer-link">Contact</a>
             </li>
             
             </ul>
             <ul class="footer-list" id="fl-3">
                <li class="list-item">
                   <div class="title">Resources</div>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Industries</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Use Cases</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">How-to Videos</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Webinars</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Events</a>
                </li> 
             </ul>
             <ul class="footer-list" id="fl-4">
                <li class="list-item">
                     <div class="title"><strong>SUPPORT</strong></div>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Help</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Documentation</a>
                </li>
                <li class="list-item">
                    <a href="#" class="footer-link">Open source</a>
                </li> 
             </ul>
            <BottomlinksComponent/>
             <SociallinkComponent/>
            </div>
        </div>
    </div>


</div>

  )}