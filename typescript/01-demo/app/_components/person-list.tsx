import { Person } from "@/types/Person";
import { FC } from "react";

type Props = {
  people: Person[];
};

export const PersonList: FC<Props> = ({ people }) => {
  return (
    <div>
      {people.map((person, i: number) => (
        <h3 key={i}>
          {person.firstName} {person.lastName}
        </h3>
      ))}
    </div>
  );
};
