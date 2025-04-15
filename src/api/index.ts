import { IData_SnippetNews } from "../types";
import data from "../../public/data.json"

export const fetchNews = async (): Promise<IData_SnippetNews> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    return data as IData_SnippetNews;
}