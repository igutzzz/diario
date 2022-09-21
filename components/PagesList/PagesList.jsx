import "./PagesList.css"
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai"
import {useAutoAnimate} from "@formkit/auto-animate/react"

export default function PagesList(props) {
    const [parent] = useAutoAnimate()
    return(
        <div className="list">
            <p className="titulo">Diário📖</p>
            <div className="page-list" ref={parent}>
                {props.pages.map((page) => 
                    <div className={`page ${page.id === props.activePage && "active"}`} key={page.id} onClick={() => props.setActivePage(page.id)}>
                        <p id="page_title">{page.titulo} <AiFillDelete id="delete" onClick={() => props.deletePage(page.id)} /></p>
                        <p id="page_body">{page.body  && page.body.substr(0, 100) + "..." }</p>
                        <p id="page_modificado">Modificado em   {new Date(page.data).toLocaleString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                            day: "numeric",
                            month: "2-digit",
                            year: "2-digit"
                        })} </p>
                    </div>
                )}
            </div>
            <div className="footer">
                <button className="nova-pagina" onClick={props.addPage}>Nova Página <AiOutlinePlus/></button>
            </div>
        </div>
    )
}