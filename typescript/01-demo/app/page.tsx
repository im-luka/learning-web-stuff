import { Greet } from "./_components/greet";

export default function HomePage() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">
        Welcome to <span className="text-purple-400">TypeScript</span>
      </h1>
      <Greet name="Luka" />
      <Greet name="Mike" />
    </div>
  );
}
