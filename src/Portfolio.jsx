import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Dharmasastha 👋</h1>
        <p className="text-xl">.NET Core & Full Stack Developer | Automation Expert</p>
        <p>2+ years of experience building secure, scalable applications</p>
      </header>
<div className="flex gap-4 mt-6 justify-center">
  {/* View Resume Button */}
  <a
    href="https://flowcv.com/resume/ducdnwjm3env"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
  >
    View Resume
  </a>

  {/* Download Resume Icon Button */}
  <a
    href="/Dharmasastha - software developer.pdf"
    download
    className="text-blue-600 hover:text-blue-800 transition text-2xl"
    title="Download Resume"
  >
    📥
  </a>
</div>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <h3 className="text-xl font-bold">FIRDS – Financial Data Query Platform</h3>
          <p className="mt-2">• Full Stack | .NET Core + MySQL + jQuery</p>
          <p>• Built dynamic query builder & JWT-secured authentication</p>
          <a
            href="https://firds.exchange-data.co.in/"
            className="text-blue-500 underline mt-2 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <h3 className="text-xl font-bold">SQX Bonds – Bond Market APIs</h3>
          <p className="mt-2">• Backend | .NET Core + SQL Server + JWT + Caching</p>
          <p>• Developed 100+ APIs with encryption & performance optimization</p>
          <a
            href="https://sqxbonds.com/"
            className="text-blue-500 underline mt-2 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <h3 className="text-xl font-bold">Automated Windows Service</h3>
          <p className="mt-2">• Backend | C#, Multi-threading, WinSCP, SFTP</p>
          <p>• Built automation that processes and uploads files on a schedule</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>C#, .NET Core, ASP.NET</li>
          <li>MySQL, SQL Server, Stored Procedures</li>
          <li>JWT Auth, REST APIs</li>
          <li>jQuery, JavaScript, HTML, CSS</li>
          <li>Selenium, Windows Services, SFTP</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <ul className="list-disc list-inside">
          <li>Email: dharmasastha8743@gmail.com</li>
          <li>Phone: +91 7904227275</li>
          <li>Location: Trichy, India</li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/Dharmasastha8743"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://github.com/Dharmasastha8743
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dharmasastha-baskar-20345a242"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://www.linkedin.com/in/dharmasastha-baskar-20345a242
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
