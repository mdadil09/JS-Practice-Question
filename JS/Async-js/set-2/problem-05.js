// Use this URL - https://example.com/photo to make a fake fetch call and show an image on the DOM using the photo
// link received in the response. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this
// question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://source.unsplash.com/featured/300x201",
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

// your code here

// const displayOutput = document.getElementById("#output");

fakeFetch("https://example.com/photo")
  .then((res) => {
    const pic = res.data.photo.link;
    const img = document.createElement("img");
    img.src = pic;
    document.body.appendChild(img);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Output: an image on the DOM
