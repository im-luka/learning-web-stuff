import { Greet } from "./_components/greet";
import { Person } from "./_components/person";
import { PersonList } from "./_components/person-list";

export default function HomePage() {
  const name = {
    first: "Michael",
    last: "Jackson",
  };

  const names = [
    {
      first: "The",
      last: "Rock",
    },
    {
      first: "Robbie",
      last: "Williams",
    },
    {
      first: "Babe",
      last: "Ruth",
    },
  ];

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">
        Welcome to <span className="text-purple-400">TypeScript</span>
      </h1>
      <div className="py-5 border-b border-b-blue-400">
        <Greet name="Luka" messageCount={8} isLoggedIn />
        <Greet name="Mike" messageCount={3} isLoggedIn={false} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <Person name={name} />
      </div>
      <div className="py-5 border-b border-b-blue-400">
        <PersonList names={names} />
      </div>
    </div>
  );
}
