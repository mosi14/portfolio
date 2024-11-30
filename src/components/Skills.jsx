import reactIcons from "../assets/icons/react.svg";
import reduxIcons from "../assets/icons/redux.svg";
import javascriptIcons from "../assets/icons/javascript.svg";
import typescriptIcons from "../assets/icons/typescript.svg";
import jQueryIcons from "../assets/icons/jQuery.svg";
import tailwindIcons from "../assets/icons/tailwind.svg";
import sqlIcons from "../assets/icons/sql.svg";
import nodeIcons from "../assets/icons/node-js.svg";
import materialIcons from "../assets/icons/material-ui.svg";
import expressIcons from "../assets/icons/express.svg";
import dotnetIcons from "../assets/icons/dotnet.svg";
import mongodbIcons from "../assets/icons/mongodb.svg";
import bootstrapIcons from "../assets/icons/bootstrap.svg";

export default function AboutMe() {
  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
        <div className=" py-4 rounded shadow ">
          <img src={reactIcons} alt="React Logo" className="w-10 h-10 inline" />
          <p className="mt-2">React</p>
        </div>
        <div className=" py-4 rounded shadow">
          <img src={reduxIcons} alt="Redux Logo" className="w-10 h-10 inline" />
          <p className="mt-2">Redux</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={javascriptIcons}
            alt="JavaScript Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={typescriptIcons}
            alt="TypeScript Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={jQueryIcons}
            alt="jQuery Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">jQuery</p>
        </div>
        <div className=" py-4 rounded shadow">
          <img
            src={tailwindIcons}
            alt="Tailwind CSS Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Tailwind CSS</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={materialIcons}
            alt="Material-UI Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Material-UI</p>
        </div>
        <div className=" py-4 rounded shadow">
          <img
            src={bootstrapIcons}
            alt="Bootstrap Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={nodeIcons}
            alt="Node.js Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Node.js</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={expressIcons}
            alt="Express Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Express</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={dotnetIcons}
            alt="C# .Net Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">C# .Net</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={mongodbIcons}
            alt="MongoDB Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">MongoDB</p>
        </div>
        <div className=" py-4 rounded shadow">
          {" "}
          <img
            src={sqlIcons}
            alt="SQL Server Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">SQL Server</p>
        </div>
      </div>
    </div>
  );
}
