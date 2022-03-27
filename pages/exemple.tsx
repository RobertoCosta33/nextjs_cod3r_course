import Header from "../src/components/Header";
import Layout from "../src/components/Layout";

//I need listen more for typescript
const Exemple: React.FC = () => {
  return (
    <Layout title="Usando Componentes">
      <Header title="Next.Js & React" />
      <Header title="Aprenda Next.Js Na Prática" />
    </Layout>
  );
};

export default Exemple;
