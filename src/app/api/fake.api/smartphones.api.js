const colors = {
  blue: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "голубой",
    color: "primary",
  },
  gray: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "серый",
    color: "secondary",
  },
  succ: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "зеленый",
    color: "success",
  },
  red: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "красный",
    color: "danger",
  },
  green: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "синий",
    color: "info",
  },
  black: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "черный",
    color: "dark",
  },
};
const smartphones = [
  {
    id: "583ea83a09e9497a0eb1b81a",
    title: "s22",
    price: 42300,
    currency: "RUB",
    color: [colors.blue],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Samsung",
  },
  {
    id: "583ea83a09e8447a0eb1b82a",
    title: "s23",
    price: 43800,
    currency: "RUB",
    color: [colors.red],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Samsung",
  },
  {
    id: "583ea34a08e4589a0eb1b83a",
    title: "s20",
    price: 52800,
    currency: "RUB",
    color: [colors.gray],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Samsung",
  },
  {
    id: "583ea43a09e6467a1eb1b78a",
    title: "n73",
    price: 62800,
    currency: "RUB",
    color: [colors.gray],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Nokia",
  },
  {
    id: "584ea56a09e9467a8eb1b90a",
    title: "n72",
    price: 32600,
    currency: "RUB",
    color: [colors.green],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Nokia",
  },
  {
    id: "584ea95a08e9097t0tb3b34a",
    title: "m30",
    price: 52700,
    currency: "RUB",
    color: [colors.black],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Xiaomi",
  },
  {
    id: "583ea56a08e9489a0eb1b82a",
    title: "m60",
    price: 42500,
    currency: "RUB",
    color: [colors.succ],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Xiaomi",
  },
  {
    id: "584ea85a07e9497a1eb1b23a",
    title: "14 PRO",
    price: 62900,
    currency: "RUB",
    color: [colors.green],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Apple",
  },
  {
    id: "584ea85a09e8497t7eb5b12a",
    title: "10 PRO",
    price: 23800,
    currency: "RUB",
    color: [colors.succ],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "OnePlus",
  },
  {
    id: "583ea83a09e9497a0eb1b82a",
    title: "x45",
    price: 12800,
    currency: "RUB",
    color: [colors.red],
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Nubia",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(smartphones);
    }, 2000);
  });

export default {
  fetchAll,
};
