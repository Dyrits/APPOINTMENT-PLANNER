import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
      <form onSubmit={handleSubmit}>
        <input
            required
            type="text"
            value={name}
            onChange={({target}) => setName(target.value)}
            placeholder="Name"
        />
        <input
            required
            type="tel"
            value={phone}
            onChange={({target}) => setPhone(target.value)}
            pattern={"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"}
            placeholder="Phone"
        />
        <input
            required
            type="email"
            value={email}
            onChange={({target}) => setEmail(target.value)}
            placeholder="E-mail"
        />
        <input
            type="submit"
            value="Add contact"
        />
      </form>
  );
};
