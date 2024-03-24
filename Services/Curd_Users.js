import { collection, getDocs, addDoc, updateDoc, deleteDoc } from "../../Services/Init.js";

async function getUsers(db) {
    const userCol = collection(db, 'users');
    try{
        const userSnapshot = await getDocs(userCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        console.log(userList);
        return userList;
    }catch(e){
        console.error("Error getting document: ", e);
    }
}

async function getUserByUsername(db, username) {
    const userCol = collection(db, 'users');
    const q = query(userCol, where('name', '==', username));
    
    try {
        const userSnapshot = await getDocs(q);
        const userList = userSnapshot.docs.map(doc => doc.data());
        console.log(userList);
        return userList;
    } catch (e) {
        console.error("Error getting document: ", e);
    }
}

async function getUserById(db, id) {
    const userRef = doc(db, 'users', id);
    
    try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            console.log(userDoc.data());
            return userDoc.data();
        } else {
            console.log("No such document!");
        }
    } catch (e) {
        console.error("Error getting document: ", e);
    }
}

async function addUser(db, user) {
    const userCol = collection(db, 'users');
    
    try {
        // get id for user before adding
        const docRef = await addDoc(userCol, user.toObject());
        console.log("Document written with ID: ", docRef.id);
        alert("User added successfully with user name: " + user.name);
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("User added failed with" + user.name);
    }
}

async function updateUser(db, userId, userData) {
    const userRef = doc(db, 'users', userId);
    
    try {
        await updateDoc(userRef, userData);
        console.log("Document updated with ID: ", userId);
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

async function deleteUser(db, userId) {
    const userRef = doc(db, 'users', userId);
    
    try {
        await deleteDoc(userRef);
        console.log("Document deleted with ID: ", userId);
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

export { getUsers, addUser };