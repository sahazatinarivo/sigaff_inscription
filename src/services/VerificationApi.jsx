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
    },

    getFunction: async( typeLOc ) => {
        const urls = _baseUrls+'get-fonction.html';
        const params = { 'typeLoc': typeLOc };

        try {
            const response = await axios.get(urls,{ headers: headers ,params:params });
            return response.data;
        } catch (error) {
            console.error("Erreur API:", error);
            return [];
        }
    },

    getDren: async() => {
        const urls = _baseUrls+'get-dren.html';

        try {
            const response = await axios.get(urls,{ headers: headers });
            return response.data;
        } catch (error) {
            console.error("Erreur API:", error);
            return [];
        }
    },

    getCisco: async( codeDren ) => {
        const urls = _baseUrls+'get-cisco.html';
        const params = { 'codeDren': codeDren }

        try {
            const response = await axios.get(urls,{ headers: headers ,params:params });
            return response.data;
        } catch (error) {
            // console.error("Erreur API:", error);
            return [];
        }
    },

    getEtab: async( codeDren , codeCisco ,codeFonction) => {
        const urls = _baseUrls+'get-etab.html';
        const params = { 'codeDren': codeDren,'codeCisco':codeCisco,'codeFonction':codeFonction }

        try {
            const response = await axios.get(urls,{ headers: headers ,params:params });
            return response.data;
        } catch (error) {
            // console.error("Erreur API:", error);
            return [];
        }
    },
}