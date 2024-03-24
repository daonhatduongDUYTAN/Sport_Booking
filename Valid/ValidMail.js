const emailValid = (email) =>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} 
const passwordValid = (password) =>{
    return password.length >= 6;
}
export {emailValid, passwordValid};