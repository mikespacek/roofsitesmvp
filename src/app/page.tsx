export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
      <main className="flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center">
          Instantly Generate a Website for Your Roofing Business
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-xl">
          Choose a template, enter your business info, and launch a professional site in minutes. No tech skills needed.
        </p>
        <button
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Get Started
        </button>
      </main>
    </div>
  );
}
