const Jsx: React.FC = () => {
  const title = <h1>JSX é um conceito central</h1>;
  const a = 4;
  const b = 3;
  console.log(a * b);
  const obj = { name: "Roberto", age: 31 };
  const subtitle = () => <h2>{"muito legal".toUpperCase()}</h2>;

  return (
    <>
      {title}
      {subtitle()}
      {Math.random()}
      <p>{JSON.stringify({ name: "Mirela", age: 26 })}</p>
      <p>
        Nome: {obj.name} Idade: {obj.age}
      </p>
    </>
  );
};

export default Jsx;
