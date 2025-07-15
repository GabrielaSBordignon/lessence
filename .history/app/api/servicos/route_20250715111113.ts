import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' // ou use 'new PrismaClient()' direto se não tiver lib

export async function GET() {
  const servicos = await prisma.servico.findMany()
  return NextResponse.json(servicos)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { titulo, descricao, duracao, imagem_url, categoria } = body

    if (!titulo || !descricao || !duracao || !imagem_url || !categoria) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    const novoServico = await prisma.servico.create({
      data: {
        titulo,
        descricao,
        duracao: parseInt(duracao),
        imagem_url,
        categoria,
      },
    })

    return NextResponse.json(novoServico, { status: 201 })
  } catch (error) {
    console.error('[ERRO POST /api/servicos]:', error)
    return NextResponse.json({ error: 'Erro ao criar serviço' }, { status: 500 })
  }
}
