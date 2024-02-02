import "./Rodape.css";

const Rodape = () =>{
    return(
        <footer>
            <ul className="media-logos">
                <li><img src="/imagens/fb.png"/></li>
                <li><img src="/imagens/tw.png"/></li>
                <li><img src="/imagens/ig.png"/></li>
            </ul>
            <img className="logo" src="/imagens/logo.png" alt="Organo logo"/>

            <p className="credits">Desenvolvido por Alura</p>

        </footer>
    );
}

export default Rodape;