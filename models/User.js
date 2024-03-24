class User {
    constructor(name, email, password, id = null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    toObject() {
        return {
            name: this.name,
            email: this.email,
            password: this.password
        };
    }
}

export default User;