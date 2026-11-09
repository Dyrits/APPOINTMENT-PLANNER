import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
      <select defaultValue="-Select a contact-" name="contact" onChange={onChange} required>
          <option value="-Select a contact-" key={"--"} disabled>-Select a contact-</option>
          {contacts.map(({name}, index) => <option key={index} value={name}>{name}</option>)}
      </select>
  );
};
