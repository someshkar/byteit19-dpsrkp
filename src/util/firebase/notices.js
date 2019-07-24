import firebase from "firebase"

function pushNotice(title, content, timestamp) {
  return firebase
    .database()
    .ref("notices")
    .push({ title, content, timestamp })
}

function onNoticeAdded(callback) {
  firebase
    .database()
    .ref("notices")
    .on("child_added", s => callback(s.val(), s))
}

function getAllNotices(callback) {
  firebase
    .database()
    .ref("notices")
    .on("value", s => callback(s.val(), s))
}

export default {
  pushNotice,
  onNoticeAdded,
  getAllNotices,
}
