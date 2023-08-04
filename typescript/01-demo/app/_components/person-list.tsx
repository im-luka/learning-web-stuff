type Props = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: Props) => {
  return (
    <div>
      {props.names.map((name, i: number) => (
        <h3 key={i}>
          {name.first} {name.last}
        </h3>
      ))}
    </div>
  );
};
