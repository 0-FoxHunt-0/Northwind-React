import axios from "axios";
import CategoriesModel from "../Models/CategoriesModel";
import appConfig from "../Utils/AppConfig";

class CategoriesService {

    public async getCategoriesCount(): Promise<void> {
        const response = await axios.get(appConfig.categoriesUrl)
        const count = response.data.length;
        console.log(response.data);
        return count;
    }

    public async getAllCategories(): Promise<CategoriesModel[]> {
        const response = await axios.get(appConfig.categoriesUrl)
        const categories = response.data

        return categories
    }

}

const categoriesService = new CategoriesService();

export default categoriesService;