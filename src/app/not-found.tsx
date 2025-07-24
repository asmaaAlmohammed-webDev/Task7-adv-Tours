import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8ba]  text-center px-4">
      <h1 className="text-8xl font-extrabold text-[#FA8B02] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800  mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600  max-w-md mb-8">
        Oops! The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#FA8B02] text-white font-semibold rounded-full hover:bg-orange-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
