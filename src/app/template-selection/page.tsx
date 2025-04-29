export default function TemplateSelection() {
  const templates = [
    { id: 1, name: "Modern Blue", preview: "Template 1 Preview" },
    { id: 2, name: "Classic Gray", preview: "Template 2 Preview" },
    { id: 3, name: "Bold Orange", preview: "Template 3 Preview" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Select a Template</h1>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl justify-center">
        {templates.map((template) => (
          <div
            key={template.id}
            className="flex flex-col items-center border rounded-lg shadow p-6 bg-gray-50 dark:bg-gray-800 w-full sm:w-72"
          >
            <div className="h-32 w-full mb-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded text-gray-500 text-sm">
              {template.preview}
            </div>
            <div className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{template.name}</div>
            <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">
              Select Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 