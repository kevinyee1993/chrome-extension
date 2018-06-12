console.log("Everything working!");

let images = document.getElementsByTagName('img');


// console.log(images[0].src);
for(let i = 0; i < images.length; i++) {
  images[i].src = "https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V_400x400.jpeg";
}
