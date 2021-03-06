import React from 'react'

export default function Suggestions() {
  return (
    <div className="sticky top-20">
      <div className="flex items-center gap-2 text-sm mb-4">
        <img
          className="w-14 h-14 rounded-full"
          src="https://avatars.githubusercontent.com/u/64004309?v=4"
          alt="Eder Lima"
        />
        <div>
          <p>
            <b className="font-semibold">r3turn_zero</b>
          </p>
          <p className="text-xs text-gray-500">Eder Lima</p>
        </div>
      </div>
      <div className="text-sm w-full">
        <p className="mb-4">
          <b className="text-gray-400 font-semibold">Sugestões para você</b>
        </p>
        <div className="mb-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/64004309?v=4"
              alt="Eder Lima"
            />
            <div>
              <p>
                <b className="font-semibold">Nxrth-x</b>
              </p>
              <p className="text-gray-500">Recomendado</p>
            </div>
          </div>
          <p className="text-blue-500 font-semibold">Seguir</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs text-justify">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Localizações • Principais contas • Hashtags • Idioma
          </p>
        </div>
      </div>
    </div>
  )
}
