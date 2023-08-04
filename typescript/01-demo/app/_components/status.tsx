import { FC } from "react";

type Props = {
  status: "success" | "error" | "loading";
};

export const Status: FC<Props> = ({ status }) => {
  let msg;
  if (status === "success") msg = "Success!";
  else if (status === "error") msg = "Error.";
  else msg = "Loading...";

  return <p>{msg}</p>;
};
