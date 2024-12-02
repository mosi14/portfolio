export default function AboutMe() {
  return (
    <div className=" bg-gray-100 py-20 px-6">
      <div className="container m-auto text-center">
        <div className="inline-block  m-auto ">
          <h2 className="text-3xl font-bold ">About Me</h2>
          <div className="w-[90%] h-1 rounded bg-gradient-to-r from-info to-secondary m-auto"></div>
        </div>

        <p className="text-center mt-4 text-gray-600">
          Hi, I'm a passionate frontend developer skilled in React, JavaScript,
          and TypeScript. I love creating modern, responsive web applications
          that deliver excellent user experiences. With expertise in Tailwind
          CSS, Material-UI, and Bootstrap, I focus on building intuitive and
          elegant interfaces.
        </p>
        <div className="text-center mt-10">
          <a
            href="/Mostafa Asadollahy-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-btcolor text-white px-4 py-2 rounded shadow hover:bg-btcolorhover"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}
