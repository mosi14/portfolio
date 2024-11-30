import myPhoto from "../assets/Mostafa.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <img
        src={myPhoto}
        alt="Mostafa Asadollahy"
        className="w-32 h-32 rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-4">Mostafa Asadollahy</h1>
      <p className="mt-2">Frontend Developer</p>
      <div className="flex mt-4 space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github text-2xl hover:text-gray-400"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin text-2xl hover:text-gray-400"></i>
        </a>
      </div>
    </div>
  );
}
