"use client";

import React from "react";

export const Navbar = () => {
  const themeHandler = () => {
    const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const themeButton = document.getElementById("theme-button");
    const themeButtonMobile = document.getElementById("theme-button-mobile");
    const browserTheme = document.querySelector('[name="theme-color"]');
    const theme = (() => {
      if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
      ) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    })();
    let isDark: any;

    // if (theme === "light") {
    //   document.documentElement.setAttribute("data-theme", "light");
    //   isDark = true;
    //   themeButton.innerHTML = moon;
    //   themeButtonMobile.innerHTML = moon;
    //   browserTheme.content = "#FFFFFF";
    // } else {
    //   document.documentElement.setAttribute("data-theme", "dark");
    //   isDark = false;
    //   themeButton.innerHTML = sun;
    //   themeButtonMobile.innerHTML = sun;
    //   browserTheme.content = "#111111";
    // }
    // window.localStorage.setItem("theme", theme);

    // const darkModeHandler = () => {
    //   if (isDark) {
    //     document.documentElement.setAttribute("data-theme", "dark");
    //     localStorage.theme = "dark";
    //     isDark = false;
    //     themeButton.innerHTML = sun;
    //     themeButtonMobile.innerHTML = sun;
    //     browserTheme.content = "#111111";
    //   } else {
    //     document.documentElement.setAttribute("data-theme", "light");
    //     localStorage.theme = "light";
    //     isDark = true;
    //     themeButton.innerHTML = moon;
    //     themeButtonMobile.innerHTML = moon;
    //     browserTheme.content = "#FFFFFF";
    //   }
    // };

    // themeButton.addEventListener("click", darkModeHandler);
    // themeButtonMobile.addEventListener("click", darkModeHandler);
  };

  const onThemeChange = () => {
    console.log("first");
  };
  return (
    <>
      <nav className="bg-dark border-gray-200 dark:bg-gray-900">
        <div className=" flex flex-wrap items-center justify-between  h-14 px-4">
          <p className="text-black text-lg font-bold">Sting</p>

          <div className=" md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-dark dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  aria-label="theme-button"
                  id="theme-button"
                  className=" dark:text-light rounded-lg p-2 bg-blue dark:bg-light"
                  onClick={onThemeChange}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-sun"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
