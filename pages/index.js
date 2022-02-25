import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import { Layout } from "../src/components/common";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }
  function copy(){
    navigator.clipboard.writeText(result)
    alert("Copied the text: " + result);
  }
  return (
    <div>
      <Head>
        <title>Gợi ý code</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Nhập code bạn muốn gợi ý</h3>
        <form onSubmit={onSubmit}>
          <textarea
            rows={5}
            cols={200}
            type="text"
            name="animal"
            placeholder="Nhập code bạn muốn gợi ý. vd: chạy for từ 1 tới 100"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Gợi ý code" />
        </form>
        {result !== undefined && 
        <div className={styles.boxCode}>
            <button onClick={copy}>Copy code</button>
            <pre className={styles.result} id="myInput">{result}</pre>
        </div>
        }
      </main>
    </div>

  );
}
