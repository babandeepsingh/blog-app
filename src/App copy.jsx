import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { databases } from './AppWriteConfig';
import { MyContext } from "./MyContext";
import Home from './Home';

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  return <MyContext.Provider value={{ posts, setPosts }}><Home /></MyContext.Provider>;
}

export default App;
