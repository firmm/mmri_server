import Store from '../posts_store'

const Post = async request => {
  const posts = new Store()
  const postDate = request.params.x
  const body = JSON.stringify(await posts.find(x))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(body, { headers })
}

export default Post
