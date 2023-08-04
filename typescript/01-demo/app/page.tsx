"use client";

import { Person as PersonType } from "@/types/Person";
import { Greet } from "./_components/greet";
import { Person } from "./_components/person";
import { PersonList } from "./_components/person-list";
import { Status } from "./_components/status";
import { Heading } from "./_components/heading";
import { Button } from "./_components/button";
import { Input } from "./_components/input";
import { Container } from "./_components/container";
import { LoggedIn } from "./_components/logged-in";

export default function HomePage() {
  const person: PersonType = {
    firstName: "Michael",
    lastName: "Jackson",
  };

  const people: PersonType[] = [
    {
      firstName: "The",
      lastName: "Rock",
    },
    {
      firstName: "Robbie",
      lastName: "Williams",
    },
    {
      firstName: "Babe",
      lastName: "Ruth",
    },
  ];

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">
        Welcome to <span className="text-purple-400">TypeScript</span>
      </h1>
      <div className="py-5 border-b border-b-blue-400">
        <Greet name="Luka" messageCount={8} isLoggedIn />
        <Greet name="Luka" isLoggedIn />
        <Greet name="Mike" messageCount={3} isLoggedIn={false} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Person person={person} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <PersonList people={people} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Status status="success" />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Heading>This is a heading.!</Heading>
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Button onClick={() => alert("Im clicked!")} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Input value="" onChange={(e) => console.log(e.target.value)} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Container styles={{ border: "1px solid green", padding: "1.25rem" }} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <LoggedIn />
      </div>
    </div>
  );
}
