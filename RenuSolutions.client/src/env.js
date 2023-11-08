export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'dev-5f8lqpo8uazfphqk.us.auth0.com'
// NOTE may need to adjust the http or https depending on your server
// NOTE the port should match the port your server is running on
// NOTE that https is in c#
export const audience = 'https://renusolutions.tech'
export const clientId = 'ZxjOGSuFAFiFSnMzwP93fswfWluxkRQY'
