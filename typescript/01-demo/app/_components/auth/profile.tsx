import { FC } from "react";

export type ProfileProps = Props;
type Props = {
  name: string;
};

export const Profile: FC<Props> = ({ name }) => {
  return <div>Private Profile component for - {name}</div>;
};
