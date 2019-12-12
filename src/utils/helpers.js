import * as moment from 'moment'

console.log(moment)

export function logMoment () {console.log(moment)}

export function formatDateTime (timestamp) {
  return moment(timestamp * 1000).fromNow()
}
