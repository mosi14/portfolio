export default function Projects() {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="font-bold text-xl">Project Name</h3>
          <p className="text-gray-600 mt-2">
            Brief description of the project.
          </p>
          <div className="flex justify-between mt-4">
            <a
              href="live-demo-link"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
            <a
              href="github-link"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* Add more project cards */}
      </div>
    </div>
  );
}
