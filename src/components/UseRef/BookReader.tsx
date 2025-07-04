import { useRef, useState } from "react"

export const BookReader = () => {
  const currentPageRef = useRef<number>(1)
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(`Avanzaste a la página ${currentPageRef.current}`)
  }

  const previousPage = () => {
    if (currentPageRef.current === 1) {
      console.log(`No se puede retroceder la página porque ya te encuentras en ${currentPageRef.current}`)
      return;
    }

    currentPageRef.current -= 1;
    console.log(`Retrocediste a la página ${currentPageRef.current}`)
  }

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log(`No se puede saltar a un valor imposible`);
      return;
    }

    currentPageRef.current = page;
    setCurrentPage(page)
    console.log(`Saltaste a la página ${currentPageRef.current}`)
  }

  return (
    <div>
      <h2>Lectura de libro</h2>
      <p>Página actual: {currentPageRef.current}</p>
      <p>Página actual [ STATE ]: {currentPage}</p>
      <button onClick={previousPage}>Página Anterior</button>
      <button onClick={nextPage}>Página Siguiente</button>
      <button onClick={() => { goToPage(50) }}>Ir a la página 50</button>
    </div>
  )
}