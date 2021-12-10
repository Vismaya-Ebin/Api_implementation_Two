const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
const createImg = document.createElement("img");
async function loadImages() {
  try {
    const fetchApi = await fetch(dogApiUrl);
    const apiResponse = await fetchApi.json();
    createImg.src = apiResponse.message;
    createImg.style.margin = "30px";
    
    createImg.classList.add("img-rounded");
      document.querySelector(".containerImg").appendChild(createImg);
      console.log(data.url);
   
  } catch (err) {
    console.log("API Error", err);
  }
}

const heading = document.getElementsByTagName("h1");
heading[0].style.color ="yellow";
document.body.style.backgroundColor ="black";
document.getElementById("kit-btn").addEventListener("click", loadImages);

