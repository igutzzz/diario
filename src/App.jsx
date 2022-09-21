import PagesList from "../components/PagesList/PagesList"
import PageEditor from "../components/PageEditor/PageEditor"
import { useState } from "react"
import uuid from "react-uuid"
import "./App.css"


function App() {

  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(false);

  const addPage = () => {
    let page = {
      id: uuid(),
      titulo: "Página sem título",
      body: "",
      data: Date.now(),
    }

    setPages([page, ...pages])

    console.log(pages)
  }

  const deletePage = (idToDelete) => {
    setPages(pages.filter((page) => page.id !== idToDelete))
  }

  const getActivePage = () => {
    return pages.find((page) => page.id === activePage)
  }

  const updatePage = (updatedPage) => {
    const updatedPagesArray = pages.map((page) => {
      if(page.id === activePage) {
        return updatedPage;
      }

      return page
    })

    setPages(updatedPagesArray)
  }

  return (
    <div className="main">
      <PagesList  className="pagelist" addPage={addPage} pages={pages} deletePage={deletePage} activePage={activePage} setActivePage={setActivePage}/>
      <PageEditor className="pageeditor" pages={pages} activePage={getActivePage()} updatePage={updatePage} />
    </div>
  )
}

export default App
