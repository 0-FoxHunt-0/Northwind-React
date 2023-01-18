class AppConfig {

    public registerUrl = "http://localhost:4000/api/auth/register/"; // Remember the ending /
    public loginUrl = "http://localhost:4000/api/auth/login/"; // Remember the ending /
    public productsUrl = "http://localhost:4000/api/products/"; // Remember the ending /
    public categoriesUrl = "http://localhost:4000/api/categories/"; // Remember the ending /

}

const appConfig = new AppConfig() // Singleton

export default appConfig