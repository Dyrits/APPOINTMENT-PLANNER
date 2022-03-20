import React, {useEffect, useState} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [duplicate, setDuplicate] = useState(false);

    const resetForm = () => {
        setName("");
        setPhone("");
        setEmail("");
    }

    const handleSubmit = ($event) => {
        $event.preventDefault();
        if (!duplicate) {
            addContact(name, phone, email);
            resetForm();
        }
    };

    useEffect(() => {
        contacts.find(contact => contact.name === name) && setDuplicate(true);
    }, [name]);

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                />
            </section>
            <hr/>
            <section>
                <h2>Contacts</h2>
                <TileList dataset={contacts}/>
            </section>
        </div>
    );
};
