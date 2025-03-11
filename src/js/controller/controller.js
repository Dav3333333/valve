import { fetchnews } from "../models/fetchNews";
import { header } from "../uxcode/header";
import { shownews } from "../models/showNews";
import { formAddNews } from "../models/formadd";

class ControllerMain{
    #container;
    #header;
    #dialog;

    constructor(){
        this.#container = document.querySelector(".fetchnews");
        this.#container.appendChild(fetchnews.render());
        this.#dialog = document.querySelector("dialog");

        this.#header = header;

        this.#eventShowNewsHandle();
    }

    #eventShowNewsHandle(){
        document.addEventListener("click", (e) => {
            if(e.target.classList.contains("btn-show-news")){
                const idPost = e.target.closest(".fetchnews__news").id;
                this.showNews(idPost);
                return;
            }

            if(e.target.classList.contains("btn-add-news")){
                this.#dialog.appendChild(formAddNews.render());
                this.#dialog.showModal();
                return;
            }

            if(e.target.classList.contains("menu-btn")){
                this.#header.toggleMenu();
                return;
            }

            if(e.target.id === "close-dialog" || e.target.classList.contains("btn-cancel")){
                this.#dialog.innerHTML ="";
                this.#dialog.close();
                return; 
            }

            if(e.target.classList.contains("back-to-news")){
                this.#container.innerHTML = ''
                this.#container.appendChild(fetchnews.render());
                return;
            }
            
        });
    }

    showNews(idPost){
        this.#container.innerHTML = "";
        this.#container.appendChild(shownews.render(idPost));
    }

}


export const controller = new ControllerMain();

