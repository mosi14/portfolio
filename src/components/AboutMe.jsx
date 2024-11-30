export default function AboutMe() {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <p className="text-center mt-4 text-gray-600">
        A brief introduction about yourself...
      </p>
      <div className="text-center mt-6">
        <a
          href="your-cv-link"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
}
