import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css'
export function App() {
  return (
    <div>

      <Header/>
      <Post
        author="Jonathan"
        content="ababaweweowiek"      
      />
    </div>
  );
}


