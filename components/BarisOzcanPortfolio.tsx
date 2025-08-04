"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Youtube,
  Twitter,
  Instagram,
  Play,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";

export default function BarisOzcanPortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Barış Özcan</h1>
          <p className="text-xl text-gray-600 mb-6">Hikaye Anlatıcısı & İçerik Üreticisi</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm">
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* About Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Hakkımda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Merhaba! Ben Barış Özcan. Teknoloji, bilim ve yaşam üzerine hikayeler anlatıyorum. 
                YouTube kanalımda milyonlarca izleyiciye ulaşan içerikler üretiyorum ve insanların 
                dünyayı farklı perspektiflerden görmelerine yardımcı olmaya çalışıyorum.
              </p>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>İstatistikler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">YouTube Abone</span>
                <Badge variant="secondary">2M+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Video Sayısı</span>
                <Badge variant="secondary">500+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Toplam İzlenme</span>
                <Badge variant="secondary">100M+</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Latest Videos */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Son Videolar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Video Başlığı {i}</h4>
                      <p className="text-sm text-gray-500">2 gün önce • 1.2M görüntüleme</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                İletişim
              </CardTitle>
              <CardDescription>
                Benimle iletişime geçin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Adınız"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="E-posta"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Textarea
                  name="message"
                  placeholder="Mesajınız"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                />
                <Button type="submit" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Gönder
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 Barış Özcan. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
}


