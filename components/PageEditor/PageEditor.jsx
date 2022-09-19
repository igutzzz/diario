import "./PageEditor.css"


export default function PageEditor(){
    return(
        <div className="page-editor">
            <h1>Página Sem Título</h1>
            <h2>Categoria</h2>
            <h3>Data</h3>
            <textarea rows="10" cols="10" required placeholder="Comece a escrever..."/>
        </div>
    )
}