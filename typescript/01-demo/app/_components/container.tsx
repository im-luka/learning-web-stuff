import { CSSProperties, FC } from "react";

type Props = {
  styles?: CSSProperties;
};

export const Container: FC<Props> = ({ styles }) => {
  return <div style={styles}>Random text content provided...</div>;
};
