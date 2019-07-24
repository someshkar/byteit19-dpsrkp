import firebase from "firebase"

export function pushUpdate(title, content, timestamp) {
  return firebase
    .database()
    .ref("updates")
    .push({ title, content, timestamp })
}

export function onUpdateAdded(callback) {
  firebase
    .database()
    .ref("updates")
    .on("child_added", s => callback(s.val(), s))
}

export function getAllUpdates(callback) {
  firebase
    .database()
    .ref("updates")
    .on("value", s => callback(s.val(), s))
}
