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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Barış Özcan</h1>
        <p className="text-center text-gray-600 mt-4">Hikaye Anlatıcısı</p>
        
        {/* Portfoly İçeriği */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Hakkımda</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Merhaba, Barış Özcan Portföyü</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

