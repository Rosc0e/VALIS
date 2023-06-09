import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className=" 	">
      <div className="navbar w-5/6 border border-black mx-auto mt-10 transition ease-in-out delay-150 duration-300 ">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost border">
            <span className="text-outline text-3xl">VALIS</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a></a>
            </li>
            <li>
              <details>
                <summary className="text-1xl">Menu</summary>
                <ul className="p-2 z-50 bg-base-100">
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
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
