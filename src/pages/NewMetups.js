import React from "react";
import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { BASE_URL } from "./consonants";
import { useNavigate } from "react-router-dom";

const NewMetups = () => {

  const navigate = useNavigate();

  const addMeetupHandler = (newData) => {
    fetch(`${BASE_URL}/meetups.json`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate('/', {replace: true});
    });
  };

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMetups;
