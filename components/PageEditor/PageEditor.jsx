import "./PageEditor.css"


export default function PageEditor(props){

    const onEditField = (key, value) => {
        props.updatePage({
            ...props.activePage,
            [key]: value,
            data: Date.now()
        })
    }

    if(!props.activePage){
        return <div>Nenhuma página selecionada</div>
    }

    return(
        <div className="page-editor">
            <div id="titulo">
            <input type="text" placeholder="Título" name="Nome" value={props.activePage ? props.activePage.titulo : ""} onChange={(e) => onEditField("titulo", e.target.value)} className="page-titulo" />
            </div>
            <h2>Categoria</h2>
            <textarea rows="10" cols="10" required placeholder="Comece a escrever..." value={props.activePage ? props.activePage.body : ""} onChange={(e) => onEditField("body", e.target.value)}/>
        </div>
    )
}