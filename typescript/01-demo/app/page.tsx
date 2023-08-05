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
import { User } from "./_components/user";
import { Counter } from "./_components/counter";
import { ThemeContextProvider } from "./_components/context/theme-context";
import { Box } from "./_components/context/box";
import { UserContextProvider } from "./_components/context/user-context";
import { User as User2 } from "./_components/context/user";
import { DomRef } from "./_components/ref/dom-ref";
import { MutableRef } from "./_components/ref/mutable-ref";
import { Counter as CounterClass } from "./_components/class/counter";
import { Private } from "./_components/auth/private";
import { Profile } from "./_components/auth/profile";
import { List } from "./_components/generics/list";
import { RandomNumber } from "./_components/restriction/random-number";

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
      <div className="py-5 border-b border-b-blue-400">
        <User />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Counter />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <UserContextProvider>
          <User2 />
        </UserContextProvider>
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <DomRef />
        <MutableRef />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <CounterClass message="this is a timer with count: " />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Private isLoggedIn component={Profile} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        {/* <List
          items={["a", "b", "c"]}
          onClick={(item) => alert(`${item} is clicked`)}
        />
        <List
          items={[1, 2, 3, 4, 5]}
          onClick={(item) => alert(`${item} is clicked`)}
        /> */}
        <List
          items={[
            { id: 1, name: "mike" },
            { id: 2, name: "john" },
            { id: 3, name: "joe" },
          ]}
          onClick={(item) => alert(`${item.name} is clicked`)}
        />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <RandomNumber value={10} isPositive />
      </div>
    </div>
  );
}
