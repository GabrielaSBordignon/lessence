"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  User,
  Clock,
  Star,
  MapPin,
  Instagram,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LEssenceWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Maria S.",
      text: "Excelente atendimento! Me senti renovada após o tratamento facial. Recomendo muito!",
      rating: 5,
    },
    {
      name: "Ana P.",
      text: "A drenagem linfática foi incrível. Profissionais muito competentes e ambiente acolhedor.",
      rating: 5,
    },
    {
      name: "Carla M.",
      text: "Melhor investimento que fiz para minha autoestima. Resultados visíveis desde a primeira sessão!",
      rating: 5,
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const facialServices = [
    {
      title: "Limpeza de Pele",
      description: "Remoção profunda de impurezas e renovação celular",
      duration: "60 min",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Peeling Químico",
      description: "Renovação da pele com ácidos específicos",
      duration: "45 min",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Microagulhamento",
      description: "Estímulo natural do colágeno para rejuvenescimento",
      duration: "90 min",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const bodyServices = [
    {
      title: "Massagem Modeladora",
      description: "Modelagem corporal e redução de medidas",
      duration: "60 min",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Drenagem Linfática",
      description: "Eliminação de toxinas e redução do inchaço",
      duration: "50 min",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  useEffect(() => {
    const [servicos, setServicos] = useState<any[]>([])
const [currentTestimonial, setCurrentTestimonial] = useState(0)
const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

useEffect(() => {
  fetch('/api/servicos')
    .then((res) => res.json())
    .then((data) => setServicos(data))
    .catch((err) => console.error('Erro ao carregar serviços:', err))
}, [])

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, 5000)
  return () => clearInterval(interval)
}, [testimonials.length])
 }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[#fceff1]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#a89992]" style={{ fontFamily: "Playfair Display, serif" }}>
            L'Essence
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Início", "Sobre", "Serviços", "Galeria", "Depoimentos", "Contato"].map((item, index) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(["home", "about", "services", "gallery", "testimonials", "contact"][index])
                }
                className="text-[#a89992] hover:text-[#fceff1] transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#a89992]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#fceff1]">
            <nav className="flex flex-col space-y-4 p-4">
              {["Início", "Sobre", "Serviços", "Galeria", "Depoimentos", "Contato"].map((item, index) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(["home", "about", "services", "gallery", "testimonials", "contact"][index])
                  }
                  className="text-[#a89992] hover:text-[#fceff1] transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen bg-[#fceff1] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-7xl font-bold text-[#a89992] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Sua essência, nossa inspiração
            </h1>
            <p className="text-xl text-[#a89992] mb-8 max-w-2xl mx-auto">
              Desperte sua beleza natural com tratamentos personalizados que realçam sua essência única
            </p>
            <Button
              size="lg"
              className="bg-[#a89992] hover:bg-[#a89992]/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Agende sua avaliação gratuita
            </Button>
          </div>

          {/* Decorative divider */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-px bg-[#a89992] opacity-50"></div>
            <Leaf className="mx-4 text-[#a89992] opacity-50" size={20} />
            <div className="w-32 h-px bg-[#a89992] opacity-50"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center text-[#a89992] mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Significado de L'Essence
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-[#fceff1] rounded-full flex items-center justify-center">
                <User size={120} className="text-[#a89992] opacity-50" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                L'Essence representa a essência da beleza feminina em sua forma mais pura e autêntica. Nossa marca
                simboliza a busca pela harmonia entre o cuidado exterior e o bem-estar interior, proporcionando uma
                experiência única de renovação e autoconhecimento.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Acreditamos que cada mulher possui uma essência única que merece ser celebrada e realçada através de
                cuidados especializados e personalizados.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Badge variant="secondary" className="bg-[#fceff1] text-[#a89992] px-4 py-2">
                  Sofisticação
                </Badge>
                <Badge variant="secondary" className="bg-[#fceff1] text-[#a89992] px-4 py-2">
                  Delicadeza
                </Badge>
                <Badge variant="secondary" className="bg-[#fceff1] text-[#a89992] px-4 py-2">
                  Autoestima
                </Badge>
                <Badge variant="secondary" className="bg-[#fceff1] text-[#a89992] px-4 py-2">
                  Cuidado individualizado
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#fceff1]">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center text-[#a89992] mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Nossos Serviços
          </h2>

          <Tabs defaultValue="facial" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-white">
              <TabsTrigger value="facial" className="data-[state=active]:bg-[#a89992] data-[state=active]:text-white">
                Facial
              </TabsTrigger>
              <TabsTrigger value="corporal" className="data-[state=active]:bg-[#a89992] data-[state=active]:text-white">
                Corporal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="facial">
              <div className="grid md:grid-cols-3 gap-8">
                {facialServices.map((service, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-[#a89992] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#a89992]">
                          <Clock size={16} className="mr-1" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        <Button
                          size="sm"
                          className="bg-[#a89992] hover:bg-[#a89992]/90 text-white rounded-full"
                          onClick={() => scrollToSection("contact")}
                        >
                          Agendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="corporal">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {bodyServices.map((service, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-[#a89992] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#a89992]">
                          <Clock size={16} className="mr-1" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        <Button
                          size="sm"
                          className="bg-[#a89992] hover:bg-[#a89992]/90 text-white rounded-full"
                          onClick={() => scrollToSection("contact")}
                        >
                          Agendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center text-[#a89992] mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Antes e Depois
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Image
                src={galleryImages[currentGalleryImage] || "/placeholder.svg"}
                alt="Antes e depois"
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />

              <button
                onClick={() =>
                  setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#a89992] p-2 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#a89992] p-2 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentGalleryImage ? "bg-[#a89992]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="mt-16">
            <h3
              className="text-2xl font-semibold text-center text-[#a89992] mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Siga-nos no Instagram
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="aspect-square bg-[#fceff1] rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Instagram post ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#fceff1]">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center text-[#a89992] mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            O que dizem nossas clientes
          </h2>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#fceff1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-[#a89992]" />
                </div>

                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, index) => (
                    <Star key={index} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-lg text-gray-700 mb-4 italic">"{testimonials[currentTestimonial].text}"</p>

                <p className="font-semibold text-[#a89992]">{testimonials[currentTestimonial].name}</p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-[#a89992]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center text-[#a89992] mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Entre em contato
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#a89992]" style={{ fontFamily: "Playfair Display, serif" }}>
                    Envie sua mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Nome completo" className="border-[#fceff1] focus:border-[#a89992]" />
                  <Input placeholder="Telefone" className="border-[#fceff1] focus:border-[#a89992]" />
                  <Textarea placeholder="Sua mensagem" rows={4} className="border-[#fceff1] focus:border-[#a89992]" />
                  <Button className="w-full bg-[#a89992] hover:bg-[#a89992]/90 text-white rounded-full">
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold text-[#a89992] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="text-[#a89992]" size={20} />
                    <span className="text-gray-700">(11) 99999-9999</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="text-[#a89992]" size={20} />
                    <span className="text-gray-700">Rua das Flores, 123 - São Paulo, SP</span>
                  </div>

                  <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center space-x-2">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </Button>
                </div>
              </div>

              <div className="bg-[#fceff1] p-6 rounded-lg">
                <h4 className="font-semibold text-[#a89992] mb-2">Localização</h4>
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <MapPin size={48} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#a89992] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              L'Essence
            </h3>
            <p className="text-white/80 mb-6">Sua essência, nossa inspiração</p>

            <div className="flex justify-center space-x-6 mb-6">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <MessageCircle size={24} />
              </Link>
            </div>

            <p className="text-white/60 text-sm">© 2024 L'Essence. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <Link
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <MessageCircle size={24} />
      </Link>
    </div>
  )
}
