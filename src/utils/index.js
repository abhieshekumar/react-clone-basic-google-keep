import {firebase} from '../firebase';

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
