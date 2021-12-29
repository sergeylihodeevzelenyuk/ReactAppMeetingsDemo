import { Fragment } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetutHandler(enteredMeetupdata) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Adding a new meetup</title>
        <meta name="description" content="Adding a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetutHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
