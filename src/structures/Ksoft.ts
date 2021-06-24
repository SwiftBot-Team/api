import axios from "axios";

export default class Ksoft {
    private token: string;

    private BASE_URL: string;

    constructor(token: string) {

        this.token = token;

        this.BASE_URL = "https://api.ksoft.si";
    }

    async searchLyrics(title: string, author: string) {

        let params: any = {
            q: title + ` - ${author}`,
            limit: 1,
            text_only: false
        }

        let q = new URLSearchParams(params);

        return axios.get(this.BASE_URL, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then((res: any) => res.data.data[0])
    }
}
