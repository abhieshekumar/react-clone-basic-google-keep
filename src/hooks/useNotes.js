import{useState, useEffect} from 'react';
import {firebase} from '../firebase';

// used to fetch all the notes and also works for updates on notes
export const useNotes = () => {
    const [notes, setNotes] = useState([]);
    console.log("There")
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

export const addNote = (body, color=`white`, title) => {
    firebase
        .firestore()
        .collection('notes')
        .add({
            body: body,
            color: color,
            created: new Date(),
            isArchived: false,
            isTrash: false,
            title: title,
            user: `jhf9euqwoj32098uo`
        }).then((docRef) => {
            // add successful
        })
}

export const change = (id, property, newValue) => {
    firebase
        .firestore()
        .collection('notes')
        .doc(id)
        .update({
            [property]: newValue
        })
        .then(() => {
            // update successful
        }).catch((err)=> {
            // error here
        })
}


