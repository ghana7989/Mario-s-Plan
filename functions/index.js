const functions = require('firebase-functions');
const admin = require("firebase-admin")
admin.initializeApp(functions.config().firebase)



const createNotification = async (notiification) => {
    const doc = await admin.firestore()
        .collection("notifications")
        .add(notiification);
    return console.log("notification Added", doc);
}

exports.projectCreated = functions.firestore
    .document("projects/{projectId}")
    .onCreate(doc => {
        const project = doc.data()

        const notification = {
            content: "Added a New Project",
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })

exports.userJoined = functions.auth.user()
    .onCreate(async user => {
        const doc = await admin.firestore().collection("users")
            .doc(user.uid).get();
        const newUser = doc.data();
        const notification = {
            content: "Joined the Party!!",
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };
        return createNotification(notification);
    })