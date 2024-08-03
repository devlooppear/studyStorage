const NoPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="text-white bg-neutral-500 hover:bg-neutral-700 font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NoPage;
