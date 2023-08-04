import { ChangeEvent, FC } from "react";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};
