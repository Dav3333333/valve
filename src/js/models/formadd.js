import { news } from "../httpLib/news";

class formaddnew{
    #form;
    constructor(){
        this.#form = document.createElement("form");
        this.#form.id = "form__addnews";
        this.#form.className = "form__addnews";
        this.#form.innerHTML = "";
        this.#handleAddNews();
    }

    #handleAddNews(){
        this.#form.addEventListener("submit", (e) => {
            e.preventDefault();
            // calling the add news function
            const newAd = news.AddNews(e.target.title.value, e.target.description.value);

            e.target.reset();
            alert(newAd.message);
        });
    }

    render(){
        const model = `
            <form class="form form-modal">
                <div class="form-modal__header">
                    <h2 class="text--lg text--bold ">Ajouter Une Information</h2>
                </div>
                <div class="form__group">
                    <input type="text" id="title" name="title" class="form__control" placeholder="title" required>
                </div>
                <div class="form__group">
                    <textarea name="description" id="description" class="form__control" placeholder="Entrer le Contenu de L'information" required></textarea>
                </div>
                <div class="form__group buttons">
                    <button class="btn btn-primary btn-blue" id="btn-add-news" type="submit">Ajouter</button>
                    <button class="btn btn-danger btn-red btn-cancel" type="button">Annuler</button>
                </div>
            </form>
        `;

        this.#form.innerHTML = model;
        return this.#form;
    }
}

export const formAddNews = new formaddnew();
