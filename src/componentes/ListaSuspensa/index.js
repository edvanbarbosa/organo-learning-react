import "./ListaSuspensa.css";

const ListaSuspensa = (props) =>{
    return(
        <div className="Lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value="">Selecione</option>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    );

}

export default ListaSuspensa;