const axios = require('axios');

function redditArt() {
    axios.get('https://www.reddit.com/r/Art.json')
        .then((response) => {
            for (let i = 0; i < 20; i++) {
                let object = response.data.data.children[i].data;
  
                if (object.over_18 == false) {

                    console.log(object.id);
                    console.log(object.title);
                    console.log(object.author);
                    console.log(object.selftext);
                    console.log(object.url);
                    console.log(object.link_flair_text);
                    console.log(object.post_hint);
                    console.log(object.thumbnail);
                    
                }
            }

        })
        .catch((error) => {
            console.log(error);
        })
};

redditArt();