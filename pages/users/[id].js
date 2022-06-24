import {useRouter} from "next/router";
import styles from "../../styles/User.module.scss";

const User = ({user}) => {
  const router = useRouter();

  return (
    <div className={styles.user}>
      <h1>Користувач з id {router.query.id}</h1>
      <div>Ім&apos;я користувача {user.name}</div>
    </div>
  );
};

export default User;

export async function getServerSideProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.id}`);
  const user = await response.json();

  return {
    props: {user}, // will be passed to the page component as props
  }
}