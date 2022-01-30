import { useState, useMemo } from 'react';
import './App.css';
import { useFetch } from "./useFetch";



function App() {
  const [url, setUrl] = useState(null)
  // const urlFromtheMemo = useMemo(()=>({url}),[url]);


  const { data } = useFetch({
    url, onSucess: (res) => {
      console.log(res);
    }
  });
  console.log("app rendering");
  return (
    <div className="App">
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
      <div>
        <button onClick={() => setUrl("/sri.json")}>sri</button>
        <button onClick={() => setUrl("/siva.json")}>siva</button>
      </div>
    </div>
  );
}

export default App;
