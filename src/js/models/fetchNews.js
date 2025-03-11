import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../httpLib/firebase";

class FetchNews {
    #container;

    constructor(container) {
        this.#container = document.createElement("div");
        this.#container.id = "fetch__news";
        this.#container.className = "fetchnews__list"; 
        this.#container.innerHTML = ""; 
    }


    #fetchNewsFirebase() {
        const collectionRef = collection(db, "valve");

        onSnapshot(collectionRef, (querySnapshot) => {
            this.#container.innerHTML = "";

            querySnapshot.forEach((doc) => {
                const news = { id: doc.id, data: doc.data() };
                this.#renderNews(news);
            });
        }, (error) => {
            console.error("Erreur lors de la récupération des données :", error);
            this.#container.innerHTML = "<p>Erreur lors du chargement des données.</p>"; 
        });
    }

    #renderNews(news) {
        const id = news.id;
        const titre = news.data.titreInfo;
        const content = (news.data.contenu.length > 100) ? news.data.contenu.slice(0, 100) + "..." : news.data.contenu;

        console.log(news.data.contenu.length)

        const model = `
            <div class="fetchnews__news" id="${id}">
                <div class="fetchnews__news-details">
                    <h2 class="text">${titre}</h2>
                    <p class="text--secondary text--thin text--sm">${content.replace(/\n/g, "<br>")}</p>
                    <button class="btn btn--primary btn-blue btn-show-news">Lire la suite</button>
                </div>
            </div>
        `;
        this.#container.insertAdjacentHTML("beforeend", model);
    }

    render() {
        this.#fetchNewsFirebase();
        return this.#container;
    }
}

export const fetchnews = new FetchNews();