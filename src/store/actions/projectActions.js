export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;     
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date() 
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });            
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            });
        })
    }
};