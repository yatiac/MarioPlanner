import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const createNotification = (notification: FirebaseFirestore.DocumentData) => {
    return admin.firestore().collection('notifications').add({
        ...notification,
        time: admin.firestore.FieldValue.serverTimestamp()
    })
    .then((doc) => console.log('notification added', doc));
}

export const projectCreated = functions.firestore
.document('projects/{projectId}')
.onCreate((doc) =>{
    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${project?.authorFirstName} ${project?.authorLastName}`
    }

    return createNotification(notification);
});

export const userJoined = functions.auth.user()
    .onCreate((user)=>{
        return admin.firestore().collection('users').doc(user.uid).get().then((doc) =>{
            const newUser = doc.data();
            const notification = {
                content: 'Joined the party',
                user: `${newUser?.firstName} ${newUser?.lastName}`
            }
            return createNotification(notification);
        });
});
