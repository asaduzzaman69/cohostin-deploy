export const parseTagFromPosts = (posts) => {
    let tagsArr = [];
    posts.forEach(el1 => {
        el1.tags.forEach(el2 => {
            tagsArr.push(el2.name)
        })
    })
    tagsArr = [...new Set(tagsArr)]
    return tagsArr
}



export const convertTheTagWithDash = (string) => {
    const result = string.split(' ').join('-');
    return result.toLowerCase();  
  
  }
  
  

