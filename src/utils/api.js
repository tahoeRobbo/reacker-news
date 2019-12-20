const url = 'https://hacker-news.firebaseio.com/v0'
const json = '.json?print=pretty'

function fetchItem (id) {
  return fetch(`${url}/item/${id}${json}`)
    .then((res) => res.json())
}

function removeDeleted (posts) {
  return posts.filter(({ deleted }) => deleted !== true)
}

function removeDead (posts) {
  return posts.filter(({ dead }) => dead !== true)
}

export function onlyPosts (posts) {
  return posts.filter(({ type }) => type === 'story')
}

function onlyComments (posts) {
  return posts.filter(({ type }) => type === 'comment')
}

export function fetchInitialPosts (type) {
  return fetch(`${url}/${type}stories${json}`)
    .then((res) => res.json())
    .then((ids) =>{
      if (!ids) {
        throw new Error('There was an error fetching posts')
      }

      return ids.slice(0, 50)
    }).then((ids) => Promise.all(ids.map(fetchItem)))
    .then((items) =>  removeDeleted(onlyPosts(removeDead(items))))
}

export function fetchComments (ids) {
  return Promise.all(ids.map(fetchItem))
    .then((items) => removeDeleted(onlyComments(removeDead(items))))
}

export function fetchUser (userName) {
  return fetch(`${url}/user/${userName}${json}`)
    .then((res) => res.json())
}

export function fetchPosts (ids) {
  return Promise.all(ids.map(fetchItem))
    .then((items) => removeDeleted(onlyPosts(removeDead(items))))
}
