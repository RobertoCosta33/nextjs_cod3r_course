import styles from "../styles/stylish.module.css";
import Layout from "../src/components/Layout";

const Stylish: React.FC = () => {
  return (
    <Layout title="Exemplo de CSS Modularizado">
      <div className={styles.purple}>
        <h1>Estilo usando CSS Módulos</h1>
      </div>
    </Layout>
  );
};

export default Stylish;
