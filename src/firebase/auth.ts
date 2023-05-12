import { GoogleAuthProvider, User, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "./app";

import { WritableAtom, atom } from "nanostores";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const init = () => {
    const store: WritableAtom<User | null> = atom(null);

    onAuthStateChanged(auth, currentUser => {
        store.set(currentUser);
    })

    return {
        subscribe: store.subscribe,
        login: () => {
            signInWithPopup(auth, provider);
        },
        logout: () => {
            signOut(auth);
        }
    };
}

export const user = init();