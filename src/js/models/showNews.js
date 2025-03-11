import { db } from "../httpLib/firebase";
import { getDoc, doc } from "firebase/firestore";

class ShowNews{
    #content;
    #collectionName = 'valve';

    constructor(){
        this.#content = document.createElement("div");
        this.#content.id = "show__news";
        this.#content.className = "shownews__container";
        this.#content.innerHTML = "";
    }

    async #fetchNewsData(documentId){
        const ref = doc(db, this.#collectionName, documentId);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            console.log("No such document!");
        }
    }

    render(idPost){
        this.#fetchNewsData(idPost).then((data) => {
            console.log(data);
            // console.log(idPost)
            const date = data.date.toDate().toLocaleDateString();
            const content = data.contenu;
            const titre = data.titreInfo;
    
            const model = `<div class="shownews">
                        <div class="container">
                            <div class="header header--shownews">
                                <span class="material-icons text--lg back-to-news">arrow_back</span>
                                <h1 class=" text--lg">${titre}</h1>
                                <div>
                                    <span class="text--thin text--lg">${date}</span>
                                </div>
                            </div>
                            <div class="content">
                                <p class="text text--thin text--lg text--justify">
                                    ${content.replace(/\n/g, "<br>")}
                                </p>
                            </div>

                        </div>
                    </div>`;
            
            this.#content.innerHTML = model;
        });
        return this.#content;
    }
}

export const shownews = new ShowNews();