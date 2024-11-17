import Input from "./components/input";

function App() {
  const handleSubmit = (name: string) => {
    console.log(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>Escreva seu nome:</h1>
      <Input onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
