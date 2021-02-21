import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>hello world</h1>
        <Button
          variant="contained"
          color="primary"
          href="/Container/AuthPage/login"
        >
          Login
        </Button>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
