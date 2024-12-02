import myPhoto from "../assets/Mostafa.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-white flex flex-col justify-center items-center">
      <img
        src={myPhoto}
        alt="Mostafa Asadollahy"
        className="w-32 h-32 rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-4">Mostafa Asadollahy</h1>
      <p className="mt-2">Frontend Developer</p>
      <div className="flex mt-4 space-x-4">
        <a href="https://github.com/mosi14" target="_blank" rel="noreferrer">
          <i className="fab fa-github text-4xl hover:text-gray-700"></i>
        </a>
        <a
          href="https://linkedin.com/in/mostafa-asadollahy/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin text-4xl hover:text-gray-700"></i>
        </a>
      </div>
    </div>
  );
}
