import React from "react";

import config from "../config/index.json";

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="bg-gray-900 mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12 max-w-[100%]"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <h1 className="italic text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <span className="block xl:inline text-red-700">
            five
            <span className="text-background">
              <span className=" text-primary">.</span>ɘight
            </span>
          </span>{" "}
        </h1>
        <p className="max-w-xl mt-6 text-xs lg:text-sm leading-none text-gray-700 dark:text-gray-50">
          In 2016 I began offering web design services to help friends and
          family establish brands online and maintain creative control while
          enjoying expert results at reasonable prices. Over the years we've
          grown our offerings to help numerous individuals, businesses, and
          nonprofits expand their online products and services. We're proud to
          work with some of the most talented people in the industry to deliver
          incredible outcomes for our clients.
        </p>
        <p className="max-w-xl mt-3 text-xs lg:text-sm leading-none text-gray-700 dark:text-gray-50">
          Taylor Burke, Director
        </p>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="github"
            href={socialMedia.github}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-700 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            aria-label="linkedin"
            href={socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-700 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            aria-label="stackOverflow"
            href={socialMedia.stackOverflow}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="fill-current text-gray-700 dark:text-white hover:text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z" />
              <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <div className="flex flex-row max-w-xl">
            <p className="px-2 mt-6 text-xs lg:text-sm leading-none text-gray-800 dark:text-gray-50">
              *Free hosting is offered on all projects, however, depending on
              your requirements, you may choose to host your project on your own
              server or pay for a hosting plan.
            </p>
            <p className="px-2 mt-6 text-xs lg:text-sm leading-none text-gray-800 dark:text-gray-50">
              †For first time clients a deposit may be required, with remaining
              balances payable on terms of contract.
            </p>
          </div>
          <p className=" mt-6 text-xs lg:text-sm leading-none text-gray-700 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{" "}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Issaaf Kattan
            </a>{" "}
            and <a href="https://linktr.ee/taylorburke">Taylor Burke</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
