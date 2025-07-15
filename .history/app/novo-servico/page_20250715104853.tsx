'use client'

import { useState } from 'react'

export default function NovoServicoPage() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    duracao: '',
    imagem_url: '',
    categoria: '',
  })

  const [mensagem, setMensagem] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/servicos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setMensagem('Serviço cadastrado com sucesso!')
      setFormData({ titulo: '', descricao: '', duracao: '', imagem_url: '', categoria: '' })
    } else {
      setMensagem('Erro ao cadastrar serviço.')
    }
  }

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Cadastrar Novo Serviço</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          placeholder="Título"
          className="border p-2 w-full"
          required
        />
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Descrição"
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          name="duracao"
          value={formData.duracao}
          onChange={handleChange}
          placeholder="Duração (min)"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="imagem_url"
          value={formData.imagem_url}
          onChange={handleChange}
          placeholder="URL da imagem"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          placeholder="Categoria (ex: facial, corporal)"
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Cadastrar
        </button>
      </form>

      {mensagem && <p className="mt-4 text-center">{mensagem}</p>}
    </div>
  )
