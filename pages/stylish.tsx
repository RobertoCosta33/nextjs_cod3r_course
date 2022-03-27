import styles from "../styles/stylish.module.css";
import Link from "next/link";

const Stylish: React.FC = () => {
  return (
    <div className={styles.purple}>
      <h1>Estilo usando CSS Módulos</h1>
      <Link href="/">Voltar Para a Home Page</Link>
    </div>
  );
};

export default Stylish;
