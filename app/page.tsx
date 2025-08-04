"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Youtube, Twitter, Instagram, Play, Calendar, User, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function BarisOzcanPortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Mesajınız gönderildi! Teşekkür ederim.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Hikaye Anlatıcılığının Gücü",
      description: "Modern dünyada hikaye anlatıcılığının önemi ve etkisi üzerine...",
      duration: "12:34",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Görsel İletişim ve Sanat",
      description: "Görsel iletişimin sanatla buluştuğu noktalar ve yaratıcılık...",
      duration: "18:45",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Dijital Çağda Yaratıcılık",
      description: "Teknolojinin yaratıcılığa etkisi ve gelecek perspektifleri...",
      duration: "15:22",
    },
  ]

  const articles = [
    {
      title: "Hikaye Anlatıcılığının Evrim Süreci",
      excerpt:
        "İnsanlık tarihi boyunca hikaye anlatıcılığının nasıl evrildiği ve günümüzdeki rolü üzerine derinlemesine bir analiz...",
      date: "15 Aralık 2023",
      readTime: "8 dk okuma",
      category: "Hikaye",
    },
    {
      title: "Görsel İletişimde Renk Psikolojisi",
      excerpt:
        "Renklerin insan psikolojisi üzerindeki etkisi ve görsel iletişimde nasıl kullanılabileceği konusunda pratik öneriler...",
      date: "28 Kasım 2023",
      readTime: "6 dk okuma",
      category: "Tasarım",
    },
    {
      title: "YouTube'da İçerik Üretmenin İncelikleri",
      excerpt:
        "Kaliteli video içerik üretimi için dikkat edilmesi gereken teknik ve yaratıcı unsurlar üzerine deneyimlerim...",
      date: "10 Kasım 2023",
      readTime: "12 dk okuma",
      category: "Video",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Barış Özcan</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">
                Ana Sayfa
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                Hakkımda
              </a>
              <a href="#videos" className="text-slate-600 hover:text-slate-900 transition-colors">
                Videolar
              </a>
              <a href="#blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                İletişim
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Barış Özcan"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 shadow-2xl border-4 border-white"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Hikaye
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Anlatıcısı
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            YouTuber, Görsel İletişim Uzmanı ve Yaratıcı İçerik Üreticisi
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              <Youtube className="mr-2 h-5 w-5" />
              YouTube Kanalım
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <MessageSquare className="mr-2 h-5 w-5" />
              İletişime Geç
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-pink-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Hakkımda</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hikaye anlatıcılığı ve görsel iletişim alanında uzmanlaşmış, yaratıcı içerikler üreten bir profesyonel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Barış Özcan çalışırken"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-slate-900">Barış Özcan</h3>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                Merhaba! Ben Barış Özcan. Hikaye anlatıcılığı, görsel iletişim ve yaratıcı içerik üretimi alanlarında
                çalışan bir profesyonelim. YouTube platformunda binlerce kişiye ulaşan videolar üretiyor, karmaşık
                konuları anlaşılır ve etkileyici bir şekilde anlatmaya odaklanıyorum.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Teknoloji, sanat, bilim ve kültür konularında derinlemesine araştırmalar yaparak, izleyicilerime değerli
                içerikler sunmaya çalışıyorum. Görsel iletişimin gücüne inanıyor ve her projemde bu yaklaşımı
                benimsiyorum.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Badge variant="secondary" className="px-3 py-1">
                  Hikaye Anlatıcılığı
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Video Prodüksiyon
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Görsel İletişim
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  İçerik Stratejisi
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Yaratıcı Yazım
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Seçili Videolar</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              YouTube kanalımdan öne çıkan ve en çok izlenen videolarım
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=350&query=YouTube video thumbnail ${video.title}`}
                      alt={video.title}
                      width={350}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{video.title}</CardTitle>
                  <CardDescription className="text-slate-600">{video.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Youtube className="mr-2 h-5 w-5" />
              Tüm Videoları Gör
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Blog & Makaleler</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hikaye anlatıcılığı, görsel iletişim ve yaratıcılık üzerine düşüncelerim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
                      Devamını Oku →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              Tüm Makaleleri Gör
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">İletişim</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Projeleriniz, işbirliği önerileriniz veya sorularınız için benimle iletişime geçin
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Mesaj Gönder</CardTitle>
              <CardDescription>Size en kısa sürede geri dönüş yapacağım</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Adınızı yazın"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      E-posta Adresiniz
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mesajınızı buraya yazın..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Mesajı Gönder
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Alternatif iletişim yolları:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:baris@example.com"
                className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                baris@example.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Barış Özcan</h3>
            <p className="text-slate-400 mb-6">Hikaye Anlatıcısı, YouTuber ve Görsel İletişim Uzmanı</p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400">© 2024 Barış Özcan. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
