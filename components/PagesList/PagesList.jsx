import "./PagesList.css"
import { AiOutlinePlus } from "react-icons/ai"

export default function PagesList() {
    return(
        <div className="list">
            <p>Nenhuma Página</p>
            <div className="footer">
                <button className="nova-pagina">Nova Página <AiOutlinePlus/></button>
            </div>
        </div>
    )
}