import { useState } from "react";
import useGeminiApi from "../hooks/useGeminiApi";
import Button from "./Button";

interface InputProps {
  onSubmit: (name: string) => void;
}

const Input = ({ onSubmit }: InputProps) => {
  const [name, setName] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const { meaning, loading, error } = useGeminiApi(name, shouldFetch);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setShouldFetch(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setShouldFetch(false);
          }}
        />
        <Button type="submit">Buscar significado</Button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {meaning && <p>{meaning}</p>}
    </div>
  );
};

export default Input;
