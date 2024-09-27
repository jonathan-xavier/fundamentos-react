import React from "react";
import styles from "./Comment.module.css";
import { Trash } from "@phosphor-icons/react";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="25 de setembro as 23:03" dateTime="2024-09-25">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom cara, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                    
                </footer>

            </div>
        </div>
    );
}