import { NegociacaoController } from "../controllers/negociacaoController.js";
const formulario = document.querySelector(".form");
const controller = new NegociacaoController();
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    controller.criarNegociacao();
})