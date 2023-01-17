import React from "react";
import "./Salescomponent.css";

export default function SalesComponent() {
  return (
    <div class="sales">
      <div class="sale">
        <h1 class="h-1">Contact sales</h1>
        <p class="p-medium">Fill out the form to contact our sales team.</p>
        <p class="p-normal">We're here to help:</p>
        <ul class="sales-list">
          <li class="list-items">Switch to faster-loading, beautiful maps</li>
          <li class="list-items">
            Build turn-by-turn navigation into your app
          </li>
          <li class="list-items">
            Design custom styles and visualize your data
          </li>
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
          <em>
            {" "}
            to quickly upload and process thousands of custom trails for our
            users. It makes it extremely easy to provide our customers with
            up-to-date information of highly detailed trail maps for their
            hiking, biking, and camping adventures around the world!
          </em>
          ''
        </blockquote>
        <img
          src="https://assets.website-files.com/5e870779d9def4583b128a66/5f934482d3283e06548f9aa0_logo-47cc9916.svg"
          loading="lazy"
          alt=""
          class="sales-logo"
        />
        <p class="p-small">James Graham</p>
        <p class="p-small">
          Head Of Engineering at AllTrails
          <br />
        </p>
      </div>
      <p class="p-small">
        Have technical questions about Mapbox?
        <br />
        Contact
        <a href="#" class="link-text">
          support
        </a>
        for help.
      </p>
    </div>
  );
}
