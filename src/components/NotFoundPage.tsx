// /pages/404.jsx  (for Next.js) or equivalent route component
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-gray-900 flex flex-col items-center justify-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-100">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Oops — Page Not Found!
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-lg text-center">
        The page you’re looking for doesn’t exist, or it might have been moved.
      </p>
      <a
        href="/"
        className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
      >
        Back to Home
      </a>
      <div className="mt-12 text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2">
        <span className="h-px w-8 bg-gray-300 dark:bg-gray-600"></span>
        <span>dfavisual</span>
        <span className="h-px w-8 bg-gray-300 dark:bg-gray-600"></span>
      </div>
    </div>
  );
}
