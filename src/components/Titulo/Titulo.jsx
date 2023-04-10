import "./Titulo.css"

function Titulo (props){
    return <div>
        <h1 className="titulo">{props.titulo}</h1>
        <h3 className="subtitulo">- Since 2019 -</h3>
        </div>
}

export default Titulo;