import axios from "axios";
import Colleague from "../models/Colleague";

export default class Service {
    baseRoute: string

    // ### Créer un collègue
    create_collegue_url = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues"
    // POST https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues
    // Content-type: application/json


    constructor (){
        this.baseRoute = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues"
    }

    async fetchCollegues(...args: undefined[] | string[]): Promise<Colleague[] | undefined> {
        let tempRoute = this.baseRoute

        if(args.length > 0){
            tempRoute += `/${args[0]}`
        }

        try {

            const response = await axios.get(tempRoute);
            console.log(JSON.stringify(response.data))
            return response.data.map((json: {first: string, last: string, pseudo: string, photo: string}) => new Colleague(json));

        } catch (error) {

            console.error("Erreur lors de la récupération de un ou plusieurs collègues :", error);
        
        }
    }

    async createCollegue(collegue: Colleague) {
        axios.post(this.baseRoute, {
            pseudo: collegue.getNickname(),
            last: collegue.getLastName(),
            first: collegue.getFirstName(),
            photo: collegue.getImageUrl(),
        })
        .then(function (response) {
            console.log('Success adding user');
        })
        .catch(function (error) {
            console.log('error: ', error);
        });
    }


}