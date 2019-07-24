import firebase from "firebase"

function pushUpdate(title, content, timestamp) {
  return firebase
    .database()
    .ref("updates")
    .push({ title, content, timestamp })
}

function onUpdateAdded(callback) {
  firebase
    .database()
    .ref("updates")
    .on("child_added", s => callback(s.val(), s))
}

function getAllUpdates(callback) {
  firebase
    .database()
    .ref("updates")
    .on("value", s => callback(s.val(), s))
}

export default {
  pushUpdate,
  onUpdateAdded,
  getAllUpdates,
}
