import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const character = { name: "yoshi", age: 20 };
  const link = "http://www.google.com";

  return (
    <div className='App'>
      <div className='content'>
        <h1> {title} </h1>
        <p>Liked {likes} times</p>

        {/* <p>{character}</p> */}

        <p>{10}</p>
        <p>{"hello hackers"}</p>
        <p>{[1, 2, 3]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
