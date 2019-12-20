export const ACTION_TYPE_ERROR = 'That action is not supported.'
export const FAILURE = 'FAILURE'

export const FETCHING_COMMENTS = 'FETCHING_COMMENTS'
export const FETCHING_POST = 'FETCHING_POST'
export const FETCHING_POSTS = 'FETCHING_POSTS'
export const FETCHING_USER = 'FETCHING_USER'

export const SUCCESS_COMMENTS = 'SUCCESS_COMMENTS'
export const SUCCESS_POST = 'SUCCESS_POST'
export const SUCCESS_POSTS = 'SUCCESS_POSTS'
export const SUCCESS_USER = 'SUCCESS_USER'

// Theme Colors
export const styles = {
  bamboo: {
    background: 'bg-bamboo-200',
    primary: 'text-dark-brown',
    secondary: 'text-light-brown',
    selected: '#8c3019', // ruddy-brown
    commentBg: 'bg-peach-200'
  },
  neon: {
    background: 'bg-space',
    primary: 'text-teal',
    secondary: 'text-neon-pink',
    selected: '#cf0060', // fuschia
    commentBg: 'bg-dandelion-100'
  }
}

export const themeList = Object.keys(styles)
