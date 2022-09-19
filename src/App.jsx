import PagesList from "../components/PagesList/PagesList"
import PageEditor from "../components/PageEditor/PageEditor"
import "./App.css"
function App() {
  return (
    <div className="main">
      <PagesList  className="pagelist"/>
      <PageEditor className="pageeditor" />
    </div>
  )
}

export default App
