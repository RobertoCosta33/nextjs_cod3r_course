import Navegation from "../../src/components/Navegation";

const pagesNavegations = [{}];

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegation destiny="/stylish" text="Página de estilo" color="crimson"/>
      <Navegation destiny="/exemple" text="Exemplo de Cabeçalho" color="#9400d3"/>
      <Navegation destiny="/jsx" text="JSX"/>
    </div>
  );
};

export default Home;
