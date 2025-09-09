import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY, // use a chave do OpenRouter
  baseURL: 'https://openrouter.ai/api/v1', // ponto final da OpenRouter
});

// Rota para gerar diagnóstico
app.post('/diagnostico', async (req, res) => {
  const { respostas } = req.body;
  const pergunta = `O usuário respondeu: ${respostas.join(', ')}. Faça um diagnóstico curto e motivador em português.`;

  try {
    const resposta = await client.chat.completions.create({
      model: 'openrouter/sonoma-dusk-alpha', // modelo que você escolheu
      messages: [
        { role: 'system', content: 'Você é um assistente útil e motivador.' },
        { role: 'user', content: pergunta },
      ],
      max_tokens: 200, // limita a resposta para evitar problemas de crédito
    });

    res.json({ diagnostico: resposta.choices[0].message.content });
  } catch (error) {
    console.error('Erro na API:', error);
    res.status(500).json({ diagnostico: 'Erro ao gerar diagnóstico. Tente novamente mais tarde.' });
  }
});

app.listen(3000, () => console.log('✅ Servidor rodando em http://localhost:3000'));
