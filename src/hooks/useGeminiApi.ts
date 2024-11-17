import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from '../constants';

const useGeminiApi = (name: string, trigger: boolean = false) => {
  const [meaning, setMeaning] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const prompt = `Em uma frase, explique o significado do nome ${name} e o que ele representa`;

      try {
        const result = await model.generateContent(prompt);
        setMeaning(result.response.text());
      } catch (err: any) {
        if (err instanceof Error){
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

