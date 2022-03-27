import Link from "next/link";
import styles from "../../styles/navegation.module.css";

const Navegation: React.FC = (props: any) => {
  return (
    <Link href={props.destiny}>
      <div
        className={styles.navegation}
        style={{
          backgroundColor: props.color ?? "#1e90ff",
        }}
      >
        {props.text}
      </div>
    </Link>
  );
};

export default Navegation;
