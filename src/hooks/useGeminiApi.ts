import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { API_KEY } from '../constants';

const useGeminiApi = (name: string, trigger: boolean = false) => {
  const [meaning, setMeaning] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      const prompt = `Em uma frase, explique o significado do nome ${name} e o que ele representa`;

      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-pro",
          contents: prompt,
        });
        setMeaning(response.text ?? null);
      } catch (err: any) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ocorreu um erro desconhecido.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (name?.trim() && trigger) {
      setLoading(true);
      fetchData();
    }
  }, [name, trigger]);

  return { meaning, loading, error };
};

export default useGeminiApi;

