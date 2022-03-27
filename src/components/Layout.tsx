import Link from "next/link";
import styles from "../../styles/layout.module.css";

const Layout: React.FC = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1>{props.title ?? "Mais um Exemplo"}</h1>
        <Link href="/">Voltar</Link>
      </div>

      <div className={styles.context}>{props.children}</div>
    </div>
  );
};

export default Layout;
