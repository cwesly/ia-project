import Input from "./components/input";
import "./style.css";

function App() {
  const handleSubmit = (name: string) => {
    console.log(`Hello, ${name}!`);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Significados!</h1>
      <h2>Sobre o que você gostaria de saber?</h2>
      <Input onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
