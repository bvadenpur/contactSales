import React from "react";
import Button from "../ui/Button";
import Radiobuttons from "./Radiobuttons";
import "./Salesformcomponent.css";

export default function SalesformComponent() {
  return (
    <div className="sales-form">
      <div className="form">
        <form className="email-form">
          <div className="email">
            <label for="Email" className="LABEL">
              <div className="work-email">*</div>
              Work email
            </label>
            <input
              id="Email"
              type="email"
              placeholder="example@mail.com"
              className="email-input"
            />
          </div>

          <div className="field-wrap">
            <label for="Areas-of-interest" className="LABELS">
              <div className="area">* </div>
              Area of interest
            </label>
           <Radiobuttons/>
          </div>
          <div className="messages" id="message-form">
            <label for="Inbound-message" id="MESSAGE" className="message">
              <div className="areas">*</div>
              How can we help you?
            </label>
            <textarea
              name="Inbound-message"
              className="textareas"
              id="Inbound-message"
              rows="5"
              placeholder="Your message..."
            ></textarea>
          </div>
          <Button/>
        </form>
      </div>
    </div>
  );
}
