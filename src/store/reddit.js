const redditArt = async () => {

  const endpoint = 'https://www.reddit.com/r/Art.json';
  
  try {
      const response = await fetch(endpoint);
      
      if (response.ok) {
          jsonResponse = await response.json();
          //console.log(jsonResponse.data.children[0].data);
          
          for (let i = 0; i < 30; i++) {
              let object = jsonResponse.data.children[i].data;

              //console.log(object);


              console.log(object.id);
              console.log(object.over_18);
              console.log(object.title);
              console.log(object.author);
              console.log(object.selftext);
              console.log(object.url);
              console.log(object.link_flair_text);
              console.log(object.post_hint);
              console.log(object.thumbnail);
          }
          
      }

  } catch (error) {
      console.log(error.response)
  }

};

redditArt();