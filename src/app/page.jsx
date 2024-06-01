import { Suspense } from "react";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={"Loading.."}>
        <Scene />
      </Suspense>
    </main>
  );
}
