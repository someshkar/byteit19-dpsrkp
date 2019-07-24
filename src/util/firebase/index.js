import firebase from "./firebase"
import updates from "./updates"
import notices from "./notices"

function mapOver(horn) {
  return function(o) {
    for (let k of Object.keys(o)) {
      horn(o[k]) // please
    }
  }
}

export { firebase, updates, notices, mapOver }
