type Props = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: Props) => {
  return (
    <p>
      {props.name.first} {props.name.last}
    </p>
  );
};
