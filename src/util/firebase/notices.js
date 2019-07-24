import firebase from "firebase"

export function pushNotice(title, content, timestamp) {
  return firebase
    .database()
    .ref("notices")
    .push({ title, content, timestamp })
}

export function onNoticeAdded(callback) {
  firebase
    .database()
    .ref("notices")
    .on("child_added", s => callback(s.val(), s))
}

export function getAllNotices(callback) {
  firebase
    .database()
    .ref("notices")
    .on("value", s => callback(s.val(), s))
}
