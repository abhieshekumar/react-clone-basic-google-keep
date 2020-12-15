import{useState, useEffect} from 'react';
import {firebase} from '../firebase';

// used to fetch all the notes and also works for updates on notes
export const useNotes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {        
        let unsubscribe = firebase
        .firestore()
        .collection('notes')
        .where('user', "==", 'jhf9euqwoj32098uo')
        .onSnapshot((querySnapshot) => {
                let data = [];
                querySnapshot.forEach((doc) => {
                    data = [...data, {id: doc.id, ...doc.data()}];
                });
                setNotes(data);
            });
        return unsubscribe;
    }, [])
    return [notes];
}
