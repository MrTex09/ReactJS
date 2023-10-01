import React from "react";

export const Cards =({ titulo, description ,imagen})=> {
    return(
        <div class="group relative">
        <div
        class="cardsimg"
        >
        <img src={imagen} />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span
                  aria-hidden="true"
                  class="absolute inset-0"
                ></span>
                {titulo}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>

    )
}