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
            return response.data;

        } catch (error) {

            console.error("Erreur lors de la récupération de un ou plusieurs collègues :", error);
        
        }
    }

    async createCollegue(colleague: Colleague) {

        axios.post(this.baseRoute, {

            pseudo: colleague.getNickname(),
            last: colleague.getLastName(),
            first: colleague.getFirstName(),
            photo: colleague.getImageUrl()

        })
        .then(function (response) {

            return 'Success adding user'

        })
        .catch(function (error) {

            return error;

        });
    }


}