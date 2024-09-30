import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";


export function Post({ author, content, publishedAt }) {

  const [comments, setComment] = useState([
    'Post muito bacana, hein?'
  ])

  const [newCommentText, setNewCommentText] = useState("")

  const publicshedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  
  }

  //funcao de deletar
  function deleteComment(comment){
    console.log(`Deletar comentario ${comment}`)
  }

  function handelCreateNewComment() {
    event.preventDefault()
    //imutabilidade

    setComment([...comments, newCommentText]);
    setNewCommentText("")

    console.log(comments)
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publicshedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {`Publicado ${publishedDateRelativeToNow}`}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handelCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment"
         placeholder="Deixe um comentario" 
         onChange={handleNewCommentChange} 
         value={newCommentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment
                  key={comment}
                  content={comment} 
                  onDeleteComment={deleteComment} 
                  />)
        })}
      </div>
    </article>
  );
}
