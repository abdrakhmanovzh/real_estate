import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "X-RapidAPI-Key":
                "9b00fb23d2msh2716a8f206dd157p10d424jsnb18d84a5babc",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
    });

    return data;
};
