export default function AboutMe() {
  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
        <div className="bg-gray-200 py-4 rounded shadow">React</div>
        <div className="bg-gray-200 py-4 rounded shadow">JavaScript</div>
        <div className="bg-gray-200 py-4 rounded shadow">Tailwind CSS</div>
        <div className="bg-gray-200 py-4 rounded shadow">Git</div>
        {/* Add more skills as needed */}
      </div>
    </div>
  );
}
