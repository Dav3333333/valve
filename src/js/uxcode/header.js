
class Header{
    #mode;
    #header;
    constructor(){
        this.#mode = "closed"
        this.#header = document.querySelector("header");
    }

    toggleMenu(){
        const menuElements = this.#header.querySelector("nav");
        if(this.#mode === "closed"){
            // adding and removing classes to show menu element
            this.#header.classList.toggle("header__menu-open");
            menuElements.classList.remove("hidden");
            this.#header.querySelector(".menu-btn").innerHTML ='close';
            this.#mode = "open";
        }else if(this.#mode === "open"){
            // adding and removing classes to hide menu element
            this.#header.classList.toggle("header__menu-open");
            menuElements.classList.add("hidden");
            this.#header.querySelector(".menu-btn").innerHTML ='menu';
            this.#mode = "closed";
        }else{
            return;
        }
    }

    renderHeaderElement(){
        return this.#header;
    }
}

export const header = new Header();
