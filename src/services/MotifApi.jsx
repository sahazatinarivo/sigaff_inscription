import axios from "axios";
import { API_URL, HEADERS } from "../config/config";

const _baseUrls = API_URL;
const headers= HEADERS;

export const MotifApi = {
    getMotif: async() => {
        const urls = _baseUrls+'get-motif.html';

        try {
            const response = await axios.get(urls,{ headers: headers });
            return response.data;
        } catch (error) {
            console.error("Erreur API:", error);
            return [];
        }
    },

    getTypeMotif: async(motif) => {
        const urls = _baseUrls+'get-type-motif.html';
        const params = { 'motif':motif };

        try {
            const response = await axios.get(urls,{ headers: headers,params:params });
            return response.data;
        } catch (error) {
            // console.error("Erreur API:", error);
            return [];
        }
    },
}