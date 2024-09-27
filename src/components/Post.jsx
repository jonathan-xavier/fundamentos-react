import styles from "./Post.module.css";

export function Post() {
  const avatarGitHub = "avatars.githubusercontent.com/u/42045058?v=4";
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={`https://${avatarGitHub}`}
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Jonathan xavier</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="25 de setembro as 23:03" dateTime="2024-09-25">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
         <p> Fala galeraa 👋 </p>
          <p>Acabei de subir mais um projeto no meu portifa. É um</p>
          <p>projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
          <p>👉{' '} <a href=""> jane.design/doctorcare </a></p>
          <p><a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>{' '}
          </p>
        
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario"/>

        <footer>
          <button type="submit">Publicar</button>    
        </footer>
      </form>
    </article>
  );
}
