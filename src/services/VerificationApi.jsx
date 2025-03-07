import axios from "axios";
import { API_URL, HEADERS } from "../config/config";

const _baseUrls = API_URL;
const headers= HEADERS;

export const Verification = {
    getIms: async( vInput ) => {
        const urls = _baseUrls+'verification-im.html';
        const params = { '_ims': vInput };

        try {
            const response = await axios.get(urls,{ headers: headers ,params:params });
            return response.data;
        } catch (error) {
            console.error("Erreur API:", error);
            return [];
        }
    },

    getCin: async( ims, cin ) => {
        const urls = _baseUrls+'verification-cin.html';
        const params = { '_ims': ims,'_cin':cin };

        try {
            const response = await axios.get(urls,{ headers: headers ,params:params });
            return response.data;
        } catch (error) {
            console.error("Erreur API:", error);
            return [];
        }
    }
}