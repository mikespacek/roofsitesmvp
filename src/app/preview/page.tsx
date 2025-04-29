"use client";
import { useEffect, useState } from "react";

interface BusinessInfo {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  services: string;
  about: string;
  serviceArea: string;
}

export default function PreviewPage() {
  const [template, setTemplate] = useState<string | null>(null);
  const [info, setInfo] = useState<BusinessInfo | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTemplate(localStorage.getItem("selectedTemplate"));
      const data = localStorage.getItem("businessInfo");
      if (data) setInfo(JSON.parse(data));
    }
  }, []);

  if (!template || !info) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading preview...
      </div>
    );
  }

  // Hardcoded template differences
  const heroStyles = {
    classic: "bg-blue-700 text-white",
    modern: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
    bold: "bg-yellow-400 text-gray-900 border-b-4 border-yellow-600",
  };

  const sectionStyles = {
    classic: "bg-white",
    modern: "bg-gray-50",
    bold: "bg-yellow-50",
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center gap-4 py-6 bg-gray-100 border-b">
        <button
          onClick={() => window.location.href = "/form"}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
        >
          Edit Info
        </button>
        <button
          onClick={() => window.location.href = "/templates"}
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-medium transition-colors"
        >
          Choose Different Template
        </button>
      </div>
      {/* Hero Section */}
      <section className={`py-12 px-4 text-center ${heroStyles[template as keyof typeof heroStyles]}`}> 
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{info.businessName}</h1>
        <p className="text-lg mb-6">Proudly serving {info.serviceArea}</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition-colors">Get a Free Estimate</a>
      </section>

      {/* Services Section */}
      <section className={`py-10 px-4 ${sectionStyles[template as keyof typeof sectionStyles]}`}> 
        <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
        <p className="max-w-2xl mx-auto text-center whitespace-pre-line">{info.services}</p>
      </section>

      {/* About Us Section */}
      <section className={`py-10 px-4 ${sectionStyles[template as keyof typeof sectionStyles]}`}> 
        <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
        <p className="max-w-2xl mx-auto text-center whitespace-pre-line">{info.about}</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
        <div className="max-w-xl mx-auto text-center space-y-2">
          <div><span className="font-semibold">Owner:</span> {info.ownerName}</div>
          <div><span className="font-semibold">Email:</span> <a href={`mailto:${info.email}`} className="text-blue-700 underline">{info.email}</a></div>
          <div><span className="font-semibold">Phone:</span> <a href={`tel:${info.phone}`} className="text-blue-700 underline">{info.phone}</a></div>
          <div><span className="font-semibold">Service Area:</span> {info.serviceArea}</div>
        </div>
      </section>
    </div>
  );
}