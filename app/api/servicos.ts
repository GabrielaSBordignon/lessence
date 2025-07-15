import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM servicos');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Erro ao buscar serviços:', err);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ erro: 'Método não permitido' });
  }
}
