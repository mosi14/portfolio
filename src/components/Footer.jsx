export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Mostafa Asadollahy. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/mosi14"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-700"
          >
            <i className="fab fa-github text-3xl"></i> 
          </a>
          <a
            href="https://linkedin.com/in/mostafa-asadollahy/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-700"
          >
            <i className="fab fa-linkedin text-3xl"></i>{" "}
            
          </a>
        </div>
      </div>
    </footer>
  );
}
