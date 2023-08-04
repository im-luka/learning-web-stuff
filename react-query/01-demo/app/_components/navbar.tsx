import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav className="w-full flex justify-between p-4 mb-8 border-b-2 border-red-500">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/superheroes">Superheroes</Link>
      </div>
      <div>
        <Link href="/rq-superheroes">RQ Superheroes</Link>
      </div>
      <div>
        <Link href="/rq-dependent">RQ Dependent</Link>
      </div>
    </nav>
  );
};
