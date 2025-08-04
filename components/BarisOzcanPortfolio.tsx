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
import Image from "next/image";

export default function BarisOzcanPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Barış Özcan</h1>
        <p className="text-center text-gray-600 mt-4">Hikaye Anlatıcısı</p>
      </div>
    </div>
  );
}
