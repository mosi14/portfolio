export default function Projects() {
  return (
    <div className="bg-gray-100 py-20 px-6 text-center">
      <div className="inline-block  m-auto ">
        <h2 className="text-3xl font-bold ">Projects</h2>
        <div className="w-[90%] h-1 rounded bg-gradient-to-r from-info to-secondary m-auto"></div>
      </div>
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
              className="text-info hover:underline"
            >
              Live Demo
            </a>
            <a
              href="github-link"
              target="_blank"
              rel="noreferrer"
              className="text-info hover:underline"
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
