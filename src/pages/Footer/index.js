import React from "react";
import logo2 from "../../svg/blog-logo2.svg";
import facebook from "../../svg/icon-facebook.svg";
import instagram from "../../svg/icon-instagram.svg";
import youtube from "../../svg/icon-youtube.svg";
import twitter from "../../svg/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-section bt-black">
      <section className="container pb-0">
        <div className="row flex-center">
          <img src={logo2} alt="logo" className="icon-l" />
        </div>

        <div className="row pb-3 bb-black mt-3">
          <div className="grid-3">
            <h4>Posts</h4>
            <div className="flex-start-column mt-2">
              <a href="." className="color-gray link-footer">
                Mais Vistos
              </a>
              <a href="." className="color-gray link-footer">
                Mais comentados
              </a>
              <a href="." className="color-gray link-footer">
                Mais Populares
              </a>
              <a href="." className="color-gray link-footer">
                Mais recentes
              </a>
            </div>
          </div>

          <div className="grid-3">
            <h4>Categorias</h4>
            <div className="flex-start-column mt-2">
              <a href="." className="color-gray link-footer">
                Tecnologias
              </a>
              <a href="." className="color-gray link-footer">
                Games
              </a>
              <a href="." className="color-gray link-footer">
                Fotografias
              </a>
              <a href="." className="color-gray link-footer">
                Cinema
              </a>
            </div>
          </div>

          <div className="grid-6">
            <h4 className="mb-2">Quer ser avisado dos novos posts do blog.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              perferendis voluptatem unde officia aperiam non.
            </p>
            <div className="flex-start-row mt-2">
              <input
                type="text"
                name="search"
                id=""
                placeholder="Digite seu e-mail aqui"
              />
              <button className="btn ml-2">Cadastrar</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid-9">
            <p>2024 | Todos os direitos reservados. Projeto React.js</p>
          </div>
        </div>

        <div className="grid-3">
          <img src={facebook} className="icon-s" alt="facebook" />
          <img src={instagram} className="icon-s ml-2 " alt="instagram" />
          <img src={youtube} className="icon-s ml-2 " alt="youtube" />
          <img src={twitter} className="icon-s ml-2 " alt="twitter" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
