import { db_cloud } from "../../Services/Init.js";
import { addUser } from "../../Services/Curd_Users.js";
import User from "../../models/User.js";
import { emailValid,passwordValid } from "../../Valid/ValidMail.js";

const form_register = document.querySelector("#register-form");

form_register.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = form_register["username"].value;
    const password = form_register["password"].value;
    const email = form_register["email"].value;
    const password_confirm = form_register["confirmPassword"].value;

    if (username.trim() === "" 
    || password.trim() === "" 
    || email.trim() === "" 
    || password_confirm.trim() === "") {
        alert("Please fill in all fields");
        return;
    }
    if (password !== password_confirm) {
        alert("Password and Confirm Password must be the same");
        return;
    }
    if (!emailValid(email)) {
        alert("Email is invalid");
        return;
    }
    if (!passwordValid(password)) {
        alert("Password must be at least 6 characters");
        return;
    }

    console.log(username, password);
    console.log(db_cloud)
    let user = new User(username,email, password);
    console.log(user)
    addUser(db_cloud, user)
    // clear form
    form_register.reset();
});

