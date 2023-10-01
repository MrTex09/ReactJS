import React from "react";
import { Cards } from "./Card";

export const Main = () => {
  return(    <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <div>
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Cartelera
      </h2>
    </div>

    <div
      class="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
    >
<Cards titulo="Star wars 7" description="Esta es la descripción de la tarjeta 1 i" imagen="./src/assets/Cool GUARDIANS OF THE GALAXY Poster Art By Florey — GeekTyrant.jpg"/>
<Cards titulo="estar worls" description="Esta es la descripción de la tarjeta 2" imagen="./src/assets/mando.jpg"/>
<Cards titulo="guerra de las galaxias" description="Esta es la descripción de la tarjeta 3" imagen="./src/assets/st.jpg"/>


    </div>
  </div>
  )

}