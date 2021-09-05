import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://cohostin.ghost.io',
  key: 'a69f9a0ff574d16f79178254d0',
  version: "v3"
});



export async function getPosts(options) {
    return await api.posts
      .browse({
        limit: "all",
    ...options,

    
      })
      
      .catch(err => {
        console.error(err);
      });

}

export const GetSinglePost = async (id) => {
 const res  =  await api.posts.read({id: id})
  return res;

}