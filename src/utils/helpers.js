import * as moment from 'moment'

export function formatDateTimeFrom (timestamp) {
  return moment(timestamp * 1000).fromNow()
}

export function formatDateTimeMMDDYY (timestamp) {
  return moment(timestamp * 1000).format('MM/DD/YY')
}
