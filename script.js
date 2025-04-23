const data = {
  author: {
    name: "Selkie Myth",
    penName: "Selkie Myth",
    bio: "Author of Beneath The Dragon Eye Moons.",
    description:
      "Join Elaine as she travels through the world of Pallos, with magic, monsters, and a global system everyone can tap into. ",
    image:
      "https://cdn.glitch.global/af094f8f-cb9e-4e46-aef7-ee8b98c8965b/20890132.jpg?v=1657175829330",
  },
  books: [
    {
      link: "https://www.amazon.com/gp/product/B0DT8T73PQ?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/41KLgX1qPIL.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DTK8WXWN?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/41sDoV-2AZL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DTK74PF7?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/51R5hmfEWWL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DT7Q3N57?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/51L1Nhhl0eL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0B92NQ65Y?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/417Uv0pZfRL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DTFJPK2C?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/510Wxp+OzjL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DTKFTVYF?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/51lwRCeLUtL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DTGT97H7?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/413OjvdIcNL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DTJN6S5T?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/41Zq98TXrwL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DT9YVW3S?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/41Vr8cTfNkL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DTHMP58R?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/41kg03rDLOL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DT7SNDFZ?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/41Wdvo5ZltL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DT7TF72Q?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/41VoAo8B9AL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B0DT7FXDVG?storeType=ebooks",
      image: "https://m.media-amazon.com/images/I/412ck6CPwpL._SY300_.jpg",
    },
  ],
  artwork: [
{image:"btdem/Aoin.png"},
{image:"btdem/battlescene.jpg"},
{image:"btdem/Beneath the Dragoneye Moons artwork.png"},
{image:"btdem/Bi_Pride.webp"},
{image:"btdem/Broomstick 1.png"},
{image:"btdem/Broomstick 2.png"},
{image:"btdem/Commission03.png"},
{image:"btdem/Dino Knight.png"},
{image:"btdem/Elaine and Artemis eating all the mangos!.jpg"},
{image:"btdem/Elaine Fanart.png"},
{image:"btdem/Elaine Flower.jpg"},
{image:"btdem/Elaine half done.jpg"},
{image:"btdem/Elaine in Nippon-Koku.jpg"},
{image:"btdem/Elaine Iona Dancing.png"},
{image:"btdem/Elaine_mount1.webp"},
{image:"btdem/Elaine_png.webp"},
{image:"btdem/FairyRing.png"},
{image:"btdem/Gratitude 2.png"},
{image:"btdem/image0.webp"},
{image:"btdem/Iona and Elaine.png"},
{image:"btdem/Meanwhile the sidekicks 2.jpg"},
{image:"btdem/Meanwhile the sidekicks.png"},
{image:"btdem/Moonlit Mango.jpg"},
{image:"btdem/no_wings.jpg"},
{image:"btdem/Resized Banner.png"},
{image:"btdem/Romantic Flower Field.png"},
{image:"btdem/sevenpplcom.png"},
{image:"btdem/The Ranger Team.jpeg"},
{image:"btdem/Val_1.webp"},
{image:"btdem/Wife Fanart.jpeg"}
],
  links: {
    patreon: "https://www.patreon.com/SelkieMyth",
    royalroad: "https://www.royalroad.com/profile/174291",
    discord: "https://discord.gg/TekYkwMYQn",
  },
  background:
    "https://cdn.glitch.global/af094f8f-cb9e-4e46-aef7-ee8b98c8965b/final_banner.jpg?v=1657176560875",
};

// onload
window.onload = function () {
  // set up the author
  const author = document.getElementById("author");
  author.innerHTML = data.author.name;

  // set up the bio
  const bio = document.getElementById("bio");
  bio.innerHTML = data.author.bio;

  // set up the description
  const description = document.getElementById("description");
  description.innerHTML = data.author.description;

  // set up the pen name
  const penName = document.getElementsByClassName("penName");
  for (let i = 0; i < penName.length; i++) {
    penName[i].innerHTML = data.author.penName;
  }

  // set up the image
  const image = document.getElementsByClassName("profileicon");
  for (let i = 0; i < image.length; i++) {
    image[i].src = data.author.image;
    image[i].href = data.author.image;
  }

  // set up the books
  const books = document.getElementById("bookholder");
  for (let i = 0; i < data.books.length; i++) {
    const book = document.createElement("a");
    book.href = data.books[i].link ;
    book.target = "_blank";
    book.innerHTML = `<r><img src="${data.books[i].image}"><a href="${data.books[i].link}" class="w3-bar-item w3-button w3-hover-black">
    <i class="fa-brands fa-amazon"></i>
    
  </a></r>`;
    books.appendChild(book);
  }

  // set up the artwork
  //style="width: 100%;border-radius:50px"
  for (let i = 0; i < data.artwork.length; i++) {
    const art = document.createElement("img");
    art.src = data.artwork[i].image;
    art.style = "width: 100%;border-radius:50px";
    if (data.artwork[i].link) {
      art.style = "width: 100%;border-radius:50px;cursor:pointer;";
      art.onclick = function () {
        window.location.href = data.artwork[i].link;
      };
    }

    const artwork =
      i < data.artwork.length / 2
        ? document.getElementById("images-1")
        : document.getElementById("images-2");
    artwork.appendChild(art);
  }

  // set up the links
  for (let key in data.links) {
    const link = document.getElementsByClassName(key);
    for (let i = 0; i < link.length; i++) {
      link[i].href = data.links[key];
    }
  }

  // set up the background

  const background = document.getElementById("background");
  background.src = data.background;
};
