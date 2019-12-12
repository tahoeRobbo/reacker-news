import * as moment from 'moment'

export function formatDateTime (timestamp) {
  return moment(timestamp * 1000).fromNow()
}
