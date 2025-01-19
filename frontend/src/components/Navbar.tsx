// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

// Components -%- ////
import Dropdown from "./items/Dropdown";

// Middleware & Integrations -%- ////
const tools = {
  category: "Tools",
  dropdown: [
    {
      id: 0,
      title: "Resume",
      description: "Create a digitally customizable resume",
    },
  ],
};
const social = {
  category: "Social",
  dropdown: [
    {
      id: 0,
      title: "Substack",
      description: "Subscribe on Substack for the latest articles",
    },
    { id: 1, title: "X", description: "Follow on X for the latest posts" },
    {
      id: 2,
      title: "Bluesky",
      description: "Follow on Bluesky for the latest posts",
    },
  ],
};

// Application -%- ////
export default function Navbar() {
  return (
    <React.Fragment>
      <header className="p-3 border-b border-light">
        <section className="flex flex-row flex-nowrap justify-between items-center">
          <a
            href="/"
            target="_self"
            rel="noreferrer noopener"
            aria-label="Community Link"
            type="link"
            className="self-center justify-self-start"
          >
            <img
              src="./logo.svg"
              loading="lazy"
              width={30}
              height={30}
              alt="Logo"
              className=""
            />
          </a>
          <ul className="self-center justify-self-center flex flex-row flex-nowrap space-x-4 list-none">
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
              <Dropdown category={tools?.category} dropdown={tools?.dropdown} />
            </li>
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
              <Dropdown
                category={social?.category}
                dropdown={social?.dropdown}
              />
            </li>
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
              <a
                href="https://bitsbythebyte.pub/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Articles Link"
                type="link"
                className="flex flex-row flex-nowrap justify-center items-center py-1 px-3 mx-auto text-base font-slab font-medium subpixel-antialiased text-light border border-dark rounded hover:bg-darkoff hover:border hover:border-light hover:rounded active:bg-darkoff active:border active:border-light active:rounded"
              >
                Articles
              </a>
            </li>
          </ul>
          <ul className="self-center justify-self-end flex flex-row flex-nowrap space-x-4 list-none">
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </li>
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </li>
          </ul>
        </section>
      </header>
    </React.Fragment>
  );
}
