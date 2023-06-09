import React from "react";

function Navbar() {
  return (
    <div className=" 	">
      <div className="navbar w-5/6 border border-black mx-auto mt-10 transition ease-in-out delay-150 duration-300 ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">VALIS</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a></a>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2 z-50 bg-base-100">
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>Process</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
