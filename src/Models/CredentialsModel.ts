import { RegisterOptions } from "react-hook-form";

class CredentialsModel {
    public username: string; // username and NOT userName!!!
    public password: string;

    public static usernameValidation: RegisterOptions = {
        required: {value: true, message: "Please enter your username" },
        minLength: { value: 4, message: "Your username must be 4 chars or more!" },
        maxLength: { value: 30, message: "Your username must be 30 chars or less!" }
    }

    public static passwordValidation: RegisterOptions = {
        required: {value: true, message: "Please enter your password" },
        minLength: { value: 4, message: "Your password must be 4 chars or more!" },
        maxLength: { value: 30, message: "Your password must be 30 chars or less!" }
    }

}

export default CredentialsModel;
