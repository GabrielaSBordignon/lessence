import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM servicos');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Erro ao buscar serviços:', err);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }import { PrismaClient } from '@prisma/client'
    import { NextResponse } from 'next/server'
    
    const prisma = new PrismaClient()
    
    export async function GET() {
      try {
        const servicos = await prisma.servico.findMany()
        return NextResponse.json(servicos)
      } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar serviços' }, { status: 500 })
      }
    }
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const servicos = await prisma.servico.findMany()
    return NextResponse.json(servicos)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar serviços' }, { status: 500 })
  }
}
    
  } else {
    res.status(405).json({ erro: 'Método não permitido' });
  }
}
