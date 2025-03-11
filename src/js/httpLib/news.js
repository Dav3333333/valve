import { db } from "./firebase";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";


class News {
    constructor() {
        
    }

    async AddNews(title, content){
        try {
            if(!title.trim() == "" || !content.trim() == ""){
                const docRef  = await addDoc(collection(db,"valve"), {
                    "contenu": content.trim(),
                    "date": serverTimestamp(),
                    "idBureau": "",
                    "titreInfo": title.trim()
                });
                return {"state":"good","message":docRef.id};
            } else {
                return {"state":"bad","message":"Veuillez remplir tous les champs"};
            }
        } catch (error) {
            return {"state":"bad","message":"Une erreur s'est produite"};
        }
    }
}

export const news = new News();