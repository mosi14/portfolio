import reactIcons from "../assets/icons/react.svg";
import reduxIcons from "../assets/icons/redux.svg";
import javascriptIcons from "../assets/icons/javascript.svg";
import typescriptIcons from "../assets/icons/typescript.svg";
import jQueryIcons from "../assets/icons/jquery.svg";
import tailwindIcons from "../assets/icons/tailwind.svg";
import sqlIcons from "../assets/icons/sql.svg";
import nodeIcons from "../assets/icons/node-js.svg";
import materialIcons from "../assets/icons/material-ui.svg";
import expressIcons from "../assets/icons/express.svg";
import dotnetIcons from "../assets/icons/dotnet.svg";
import mongodbIcons from "../assets/icons/mongodb.svg";
import bootstrapIcons from "../assets/icons/bootstrap.svg";
import nextIcons from "../assets/icons/next.svg";
import htmlIcons from "../assets/icons/html5.svg";
import css3Icons from "../assets/icons/css3.svg";

export default function AboutMe() {
  const box =
    "py-4 rounded shadow   transform transition-transform duration-300 hover:scale-110";

  return (
    <div className="bg-white py-20 px-6 text-center container m-auto">
      <div className="inline-block  m-auto ">
        <h2 className="text-3xl font-bold ">Skills</h2>
        <div className="w-[90%] h-1 rounded bg-gradient-to-r from-info to-secondary m-auto"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
        <div className={box}>
          <img src={htmlIcons} alt="HTML5 Logo" className="w-10 h-10 inline" />
          <p className="mt-2">HTML5</p>
        </div>
        <div className={box}>
          <img src={css3Icons} alt="CSS3 Logo" className="w-10 h-10 inline " />
          <p className="mt-2">CSS3</p>
        </div>
        <div className={box}>
          <img src={reactIcons} alt="React Logo" className="w-10 h-10 inline" />
          <p className="mt-2">React</p>
        </div>
        <div className={box}>
          <img src={nextIcons} alt="Nextjs Logo" className="w-10 h-10 inline" />
          <p className="mt-2">Nextjs</p>
        </div>
        <div className={box}>
          <img src={reduxIcons} alt="Redux Logo" className="w-10 h-10 inline" />
          <p className="mt-2">Redux</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={javascriptIcons}
            alt="JavaScript Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={typescriptIcons}
            alt="TypeScript Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={jQueryIcons}
            alt="jQuery Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">jQuery</p>
        </div>
        <div className={box}>
          <img
            src={tailwindIcons}
            alt="Tailwind CSS Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Tailwind CSS</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={materialIcons}
            alt="Material-UI Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Material-UI</p>
        </div>
        <div className={box}>
          <img
            src={bootstrapIcons}
            alt="Bootstrap Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={nodeIcons}
            alt="Node.js Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Node.js</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={expressIcons}
            alt="Express Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">Express</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={dotnetIcons}
            alt="C# .Net Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">C# .Net</p>
        </div>
        <div className={box}>
          {" "}
          <img
            src={mongodbIcons}
            alt="MongoDB Logo"
            className="w-10 h-10 inline"
          />
          <p className="mt-2">MongoDB</p>
        </div>
        <div className={box}>
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
