import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [limit, setLimit] = useState("");
  const [pics, setPics] = useState([]);

  const fetchImages = async () => {
    const response = await fetch(
      `https://api.reddit.com/r/images/new.json?limit=${limit}&raw_json=1`
    );
    const data = await response.json();
    if (data != null) {
      setPics(data.data.children);
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      ></input>
      <button onClick={fetchImages}>Set Limit</button>
      <div className={styles.posts}>
        {pics.map((pic, id) => {
          // pic.data.preview
          //   ? console.log(pic.data.preview.images[0].source.url)
          //   : console.log("No url");
          return (
            pic.data.post_hint === "image" &&
            pic.data.preview.images[0].source.url && (
              <div
                className={styles.post}
                key={pic.data.title ? pic.data.title : id}
              >
                <div className={styles.imageBox}>
                  <Image
                    src={
                      pic.data.preview.images[0].source.url
                        ? pic.data.preview.images[0].source.url
                        : "https://via.placeholder.com/150"
                    }
                    alt={pic.data.title ? pic.data.title : id}
                    width={pic.data.preview.images[0].source.width}
                    height={pic.data.preview.images[0].source.height}
                  />
                  <div className={styles.buttons}>
                    <button className={styles.button} color="blue">
                      👍 Like
                    </button>
                    <button className={styles.button}>🚀 Share</button>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      Made with 🔥 by Manish
    </div>
  );
}
