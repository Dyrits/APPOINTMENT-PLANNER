import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
      <select name="contact" onChange={onChange} required>
          <option value="-Select a contact-" key={"--"} selected disabled>-Select a contact-</option>
          {contacts.map(({name}, index) => <option key={index} value={name}>{name}</option>)}
      </select>
  );
};
