import Link from "next/link";
import styles from "../styles/A.module.css";

const A = ({children, href}) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
};

export default A;