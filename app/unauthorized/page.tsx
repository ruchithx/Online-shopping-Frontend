import Link from 'next/link';

export default function Unauthorized() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto text-center">
        <h1 className="text-6xl font-bold text-red-500">403</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Unauthorized Access
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, you do not have permission to access this page.
        </p>
        <div className="mt-6">
          <Link href="/auth/login">
            <div className="px-6 py-3 text-white bg-[#4CAF50] rounded-lg hover:bg-[#388E3C]">
              Go to Login
            </div>
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/">
            <div className="text-black hover:underline">Back to Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
