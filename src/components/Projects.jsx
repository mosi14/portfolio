export default function Projects() {
  return (
    <div className="bg-gray-100 py-20 px-6 text-center">
      <div className="inline-block  m-auto ">
        <h2 className="text-3xl font-bold ">Projects</h2>
        <div className="w-[90%] h-1 rounded bg-gradient-to-r from-info to-secondary m-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Add more project cards */}
        <div className="p-6 bg-white rounded-lg shadow-md ">
          <h2 className="text-2xl font-bold text-primary mb-4">
            E-Commerce Web Application
          </h2>

          {/* Project Description with Magazine-Style Columns */}
          <div className="text-gray-700 mb-4 gap-6 text-left">
            <p>
              A fully-featured e-commerce web application built using{" "}
              <strong>React</strong>, <strong>Express</strong>, and{" "}
              <strong>MongoDB</strong>. This project showcases a modern and
              robust platform for online shopping with real-time features and an
              intuitive interface.
            </p>
            <p>
              The platform includes a product catalog with advanced filtering
              and search functionality, an admin panel for managing products and
              orders, and a user-friendly checkout process. Additionally, it
              offers secure payment options and automatic SMS notifications upon
              purchase confirmation.
            </p>
          </div>

          {/* Features */}
          <h3 className="text-lg font-semibold text-secondary mb-2">
            Key Features:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Product catalog with advanced filtering and search functionality.
            </li>
            <li>Admin panel to manage products, view and process orders.</li>
            <li>Order tracking and user authentication system.</li>
            <li>Automatic SMS notifications upon purchase confirmation.</li>
            <li>
              Secure payment gateway integration for seamless transactions.
            </li>
          </ul>

          {/* Technologies */}
          <h3 className="text-lg font-semibold text-secondary mb-2">
            Technologies Used:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Frontend:</strong> React, Tailwind CSS, Redux for state
              management.
            </li>
            <li>
              <strong>Backend:</strong> Express.js, Node.js, MongoDB for
              database management.
            </li>
            <li>
              <strong>Third-Party Services:</strong> SMS gateway integration
              (e.g., Twilio).
            </li>
          </ul>

          {/* Demo and Code */}
          <div className="flex space-x-4">
            <a
              href="https://your-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition duration-300"
            >
              View Code
            </a>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md ">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Weather forecast Application
          </h2>
          <div className="border shadow-sm rounded mb-6 p-2">
            <img src="/weather_app.png" alt="weather forecast app" />
          </div>

          {/* Features */}
          <h3 className="text-lg font-semibold text-secondary mb-2">
            Key Features:
          </h3>
          <ul className="list-disc text-left list-inside text-gray-700 mb-4">
            <li>
              <strong>Live Weather Data: </strong>Fetches and displays weather
              data from the OpenWeatherMap API.
            </li>
            <li>
              {" "}
              <strong>Responsive Design:</strong> Fully responsive layout that
              adapts to different screen sizes.
            </li>
            <li>
              {" "}
              <strong>Interactive UI: </strong>Users can search for cities and
              view detailed weather information, including real-feel
              temperature, humidity levels, and more.
            </li>
          </ul>

          {/* Technologies */}
          <h3 className="text-lg font-semibold text-secondary mb-2">
            Technologies Used:
          </h3>
          <ul className="list-disc text-left list-inside text-gray-700 mb-4">
            <li>
              <strong>Frontend:</strong> React, Tailwind CSS
            </li>
            <li>
              {" "}
              <strong>APIs:</strong> OpenWeatherMap
            </li>
          </ul>

          {/* Demo and Code */}
          <div className="flex justify-between space-x-4">
            <a
              href="https://breezehub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/mosi14/weather_app_design"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition duration-300"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
