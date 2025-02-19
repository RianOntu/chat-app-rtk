import React from "react";

function Navbar() {
  return (
    <nav class="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between h-16 items-center">
          <img class="h-10" src="./assets/lws-logo-dark.svg" />
          <ul>
            <li class="text-white">
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
