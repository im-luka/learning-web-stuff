import { Person as PersonType } from "@/types/Person";
import { FC } from "react";

type Props = {
  person: PersonType;
};

export const Person: FC<Props> = ({ person }) => {
  return (
    <p>
      {person.firstName} {person.lastName}
    </p>
  );
};
