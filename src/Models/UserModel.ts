import { RegisterOptions } from "react-hook-form";

class UserModel {
	public id: number;
    public firstName: string;
    public lastName: string;
    public username: string; // username and NOT userName!!!
    public password: string;

    public static firstNameValidation: RegisterOptions = {
        required: {value: true, message: "Please enter your first name" },
        minLength: { value: 4, message: "Your first name must be 4 chars or more!" },
        maxLength: { value: 30, message: "Your first name must be 30 chars or less!" }
    }

    public static lastNameValidation: RegisterOptions = {
        required: {value: true, message: "Please enter your last name" },
        minLength: { value: 4, message: "Your last name must be 4 chars or more!" },
        maxLength: { value: 30, message: "Your last name must be 30 chars or less!" }
    }

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

export default UserModel;
