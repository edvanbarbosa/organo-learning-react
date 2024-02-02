const CampoDeTexto = (props)=>{

    const aoDigitar = (evento) => { 
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo-de-texto">
           <label>{props.label}</label>
           <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder}/>
        </div>
    )
};
export default CampoDeTexto;