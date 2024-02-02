import Colaborador from "../Colaborador";
import "./Time.css"


const Time = (props) =>{
    const style = {
        sectionStyle :{
            backgroundColor: props.corSecundaria
        },
        h3Style :{
            borderBottom:` 4px solid ${props.corPrimaria} `
        }
    }

    return(
        props.colaboradores.length > 0 && <section className="Time" style={style.sectionStyle}>
            <h3 style={style.h3Style}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) =>
                    <Colaborador 
                        key={colaborador.nome}
                        colaborador = {colaborador}
                        corCard={props.corPrimaria}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;