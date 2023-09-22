const productArray = [
  {
    id: "price_1MlNlwL8hk1dUwiAbNSMfmDn",
    img: "./collars-imgs/flair.jpg",
    gallery: ["./collars-imgs/flair.jpg", "./collars-imgs/flair2.jpg"],
    title: "Flair Collar",
    price: 19.99,
    page: "ItemPage",
    description:
      "Our Flair Collar is made for when your furry friend is feeling a little more modern than usual, with it's modern art like patterns and colors it will be hard to look away! ",
  },
  {
    id: "price_1MlNmTL8hk1dUwiALDlgLKqz",
    img: "./collars-imgs/scenic.jpg",
    gallery: ["./collars-imgs/scenic.jpg", "./collars-imgs/scenic2.jpg"],
    title: "Scenic Collar",
    price: 19.99,
    page: "Col2",
    description:
      "Our Scenic Collar looks very attractive in any fur tone or lenght. With these awesome and fun colors, you might want to get two, or one, or just tell a friend, either way we love you and your pooch ♥️",
  },
  {
    id: "price_1MlNn1L8hk1dUwiALHRExa94",
    img: "./collars-imgs/blossom.jpg",
    gallery: ["./collars-imgs/blossom.jpg", "./collars-imgs/blossom2.jpg"],
    title: "Blossom Collar",
    price: 19.99,
    page: "Col3",
    description:
      "Our Blossom Collar was designed as one of our most colorful collars. With bright and unique different patterns from the inside and out, side to side, cha cha cha! 💃",
  },
  {
    id: "price_1MlNnSL8hk1dUwiAs7IYC7Ch",
    img: "./collars-imgs/atlas.jpg",
    gallery: ["./collars-imgs/atlas.jpg", "./collars-imgs/atlas2.jpg"],
    title: "Atlas Collar",
    price: 19.99,
    page: "Col4",
    description:
      "Never lose sigth of your pups even when you're upset at them for chewing your new years resolution, homework etc... With these bright colors our Atlas Collar has to offer!",
  },
  {
    id: "price_1MlNnoL8hk1dUwiA7uixAm0s",
    img: "./collars-imgs/vintage.jpg",
    gallery: ["./collars-imgs/vintage.jpg", "./collars-imgs/vintage2.jpg"],
    title: "Vintage Collar",
    price: 19.99,
    page: "Col5",
    description:
      "Vintage Collar consists of vintage like patterns. Who said vintage was out of style when your pups will look so good!",
  },
  {
    id: "price_1MlNoDL8hk1dUwiAekb3K6aW",
    img: "./collars-imgs/tribal.jpg",
    gallery: ["./collars-imgs/tribal.jpg", "./collars-imgs/tribal2.jpg"],
    title: "Tribal Collar",
    price: 19.99,
    page: "Col6",
    description:
      "We've create our Tribal Collar from inspiration of the Precolumbian Tribal Dogs who where the first to enter North America as our domesticated furry friends. Cool conversation starter and a little history on your pooch neck!",
  },
  {
    id: "price_1MlNoXL8hk1dUwiAyAnAgwpf",
    img: "./collars-imgs/terra.jpg",
    gallery: ["./collars-imgs/terra.jpg", "./collars-imgs/terra2.jpg"],
    title: "Terra Collar",
    price: 19.99,
    page: "Col7",
    description:
      "Our Terra Collar is for the pups that can't keep off messy adventures, with most of it's dark colors and cool designs, very hard to notice dirt spots and you can procrastnate on washing it a little longer!",
  },
  {
    id: "price_1MlNonL8hk1dUwiAsshp2AK9",
    img: "./collars-imgs/sunshine.jpg",
    gallery: ["./collars-imgs/sunshine.jpg", "./collars-imgs/sunshine2.jpg"],
    title: "Sunshine Collar",
    price: 19.99,
    page: "Col8",
    description:
      "Our Sunrise Collar is made with a bright yellow and beautiful patterns that can catch the attention of other furry friends. More furry friends equals more play dates!",
  },
  {
    id: "price_1MlNpBL8hk1dUwiAafFDksUo",
    img: "./collars-imgs/spring.jpg",
    gallery: ["./collars-imgs/spring.jpg", "./collars-imgs/spring2.jpg"],
    title: "Spring Collar",
    price: 19.99,
    page: "Col9",
    description:
      "Our Spring Collar with floral designs will make your furry pal stand out from the rest, in a world where every pooch is unique and special!",
  },
];

function getProductData(id) {
  let foundItem = productArray.find((value) => {
    return value.id === id;
  });

  if (foundItem === undefined) {
    console.log("Product was not found..");
    return undefined;
  }

  return foundItem;
}

export { productArray, getProductData };
