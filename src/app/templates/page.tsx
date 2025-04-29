"use client";
import { useRouter } from "next/navigation";

const templates = [
  {
    id: "classic",
    title: "Classic Template",
  },
  {
    id: "modern",
    title: "Modern Template",
  },
  {
    id: "bold",
    title: "Bold Template",
  },
];

export default function TemplatesPage() {
  const router = useRouter();

  const handleSelect = (id: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTemplate", id);
    }
    router.push("/form");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Choose a Template</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
          >
            <div className="w-48 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
              <span className="text-lg">Image</span>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{template.title}</h2>
            <button
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
              onClick={() => handleSelect(template.id)}
            >
              Select Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 