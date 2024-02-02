import { useState } from "react";
import CampoDeTexto from "../CampoDeTexto/CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time,setTime] = useState("");


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.colaboradorAdd({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
        
      
    }

    return(
        <section className="formulario" onSubmit={aoSalvar}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoDeTexto
                    valor= {nome} 
                    aoAlterado={nome => setNome(nome)}
                    label="Nome" 
                    placeholder="Digite seu nome"
                   />
                <CampoDeTexto 
                    valor= {cargo} 
                    aoAlterado={cargo => setCargo(cargo)} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                />
                <CampoDeTexto 
                    valor={imagem} 
                    aoAlterado={imagem =>setImagem(imagem)} 
                    label="Imagem" 
                    placeholder="Digite a URL da imagem"
                 />
                <ListaSuspensa 
                    label="Time"
                    itens={props.times}
                    aoAlterado={time => setTime(time)}
                    valor={time}
                 />
                <Botao >Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;