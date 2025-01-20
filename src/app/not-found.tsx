export default function NotFound () {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold text-red-500">
            Oops! Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      </div>
    );
  };
  