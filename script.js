const data = {
  author: {
    name: "Olivier Jansen",
    penName: "Selkie Myth",
    bio: "Author of Beneath The Dragon Eye Moons.",
    description:
      "Join Elaine as she travels through the world of Pallos, with magic, monsters, and a global system everyone can tap into. ",
    image:
      "https://cdn.glitch.global/af094f8f-cb9e-4e46-aef7-ee8b98c8965b/20890132.jpg?v=1657175829330",
  },
  books: [
    {
      link: "https://www.amazon.com/gp/product/B08NWJMXXV",
      image: "https://m.media-amazon.com/images/I/41KLgX1qPIL.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B08QMPDDKL",
      image: "https://m.media-amazon.com/images/I/41sDoV-2AZL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B08Y5DSDQF",
      image: "https://m.media-amazon.com/images/I/51R5hmfEWWL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B094YTHBML",
      image: "https://m.media-amazon.com/images/I/51L1Nhhl0eL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B09GTTY8G8",
      image: "https://m.media-amazon.com/images/I/417Uv0pZfRL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B09Q2SS1BT",
      image: "https://m.media-amazon.com/images/I/510Wxp+OzjL._SY300_.jpg",
    },
    {
      link: "https://www.amazon.com/gp/product/B09ZPQBW2C",
      image: "https://m.media-amazon.com/images/I/51lwRCeLUtL._SY300_.jpg",
    },
  ],
  artwork: [
    "https://cdn.discordapp.com/attachments/753391562062299149/881607410840662046/Lunkat_transparent_bg.png",
    "https://images-ext-1.discordapp.net/external/23tpm4rXivER2OU4T_vlTtyrR5Z53IBBaN0IMvVyUgE/https/i.imgur.com/ubYOt4z.png?width=1093&height=660",
    "https://images-ext-1.discordapp.net/external/IiBwjxfQKsyrPOhSGJddooRemZXo2jIzSO8nqDZVX6U/https/i.imgur.com/TzrWOsL.jpg?width=660&height=660",
    "https://images-ext-2.discordapp.net/external/zsEVfuPsfY-uO-Ue8PD_0mw_dYArEC0wNX3QSTvdr5Q/https/i.imgur.com/tKOMy2O.png?width=466&height=659",
    "https://media.discordapp.net/attachments/933032744282357830/933052857568067644/SPOILER_phoenix_1.jpg",
    "https://media.discordapp.net/attachments/751244061104406680/804138261689532476/Val_1.jpg?width=934&height=660",
    "https://media.discordapp.net/attachments/753391562062299149/815164914707595274/image0.jpg",
    "https://media.discordapp.net/attachments/753391562062299149/913214632200654858/Elaine_Violet.jpg?width=466&height=659",
  ],
  links: {
    patreon: "https://www.patreon.com/SelkieMyth",
    royalroad: "https://www.royalroad.com/profile/174291",
    discord: "https://discord.gg/QNFpAk3p",
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
  penName.innerHTML = data.author.penName;

  // set up the image
  const image = document.getElementById("image");
  image.src = data.author.image;

  // set up the books
  const books = document.getElementById("bookholder");
  for (let i = 0; i < data.books.length; i++) {
    const book = document.createElement("a");
    book.href = data.books[i].link;
    book.target = "_blank";
    book.innerHTML = `<img src="${data.books[i].image}">`;
    books.appendChild(book);
  }

  // set up the artwork
  //style="width: 100%;border-radius:50px"
  for (let i = 0; i < data.artwork.length; i++) {
    const art = document.createElement("img");
    art.src = data.artwork[i];
    art.style = "width: 100%;border-radius:50px";
    const artwork =
      i < data.artwork.length / 2
        ? document.getElementById("images-1")
        : document.getElementById("images-2");
    artwork.appendChild(art);
  }

  // set up the links
  for (let key in data.links) {
    const link = document.getElementsByClassName(key);
    link.href = data.links[key];
  }

  // set up the background

  const background = document.getElementById("background");
  background.src = data.background;
};
