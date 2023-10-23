const iconphone = {};

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
    title: "Galaxy s22",
    price: 42300,
    currency: "RUB",
    color: [colors.blue],
    screen_size: "6.1",
    kod_product: "56789",
    update_frequency: "120 Гц",
    battery_capacity: "3700 мAч",
    communication_standard: "2G, 3G, 4G LTE",
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Samsung",
  },
  {
    id: "583ea83a09e8447a0eb1b82a",
    title: "Galaxy s23",
    price: 43800,
    currency: "RUB",
    color: [colors.red],
    screen_size: "6.1",
    kod_product: "56788",
    update_frequency: "120Гц",
    battery_capacity: "3900 мAч",
    communication_standard: "2G, 3G, 4G LTE",
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Samsung",
  },
  {
    id: "583ea34a08e4589a0eb1b83a",
    title: "Galaxy s20 FE",
    price: 52800,
    currency: "RUB",
    color: [colors.gray],
    screen_size: "6.5",
    kod_product: "56790",
    update_frequency: "120Гц",
    battery_capacity: "4500 мAч",
    communication_standard: "2G, 3G, 4G LTE",
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
    screen_size: "4.7",
    kod_product: "56791",
    update_frequency: "60Гц",
    battery_capacity: "2000 мAч",
    communication_standard: "2G, 3G, 4G",
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
    screen_size: "2.1",
    kod_product: "56792",
    update_frequency: "60Гц",
    battery_capacity: "2100 мAч",
    communication_standard: "2G, 3G",
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
    screen_size: "5.1",
    kod_product: "56793",
    update_frequency: "60Гц",
    battery_capacity: "3500 мAч",
    communication_standard: "2G, 3G, 4G LTE",
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
    screen_size: "5.5",
    kod_product: "56794",
    update_frequency: "90Гц",
    battery_capacity: "4000 мAч",
    communication_standard: "2G, 3G, 4G LTE",
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
    screen_size: "6.7",
    kod_product: "56795",
    update_frequency: "120Гц",
    battery_capacity: "2500 мAч",
    communication_standard: "2G, 3G, 4G LTE",
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
    screen_size: "4.7",
    kod_product: "56796",
    update_frequency: "90Гц",
    battery_capacity: "2300 мAч",
    communication_standard: "2G, 3G, 4G LTE",
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
    screen_size: "6.7",
    kod_product: "56797",
    update_frequency: "120Гц",
    battery_capacity: "5100 мAч",
    communication_standard: "2G, 3G, 4G LTE, 5G",
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Nubia",
  },
  {
    id: "888ea83a09e9487a0eb1b82a",
    title: "Red Magic 8 Pro",
    price: 12800,
    currency: "RUB",
    color: [colors.red],
    screen_size: "6.8",
    kod_product: "56798",
    update_frequency: "120Гц",
    battery_capacity: "6000 мAч",
    communication_standard: "2G, 3G, 4G LTE, 5G",
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Nubia",
  },
  {
    id: "777ea73a09e9487a0eb1b72a",
    title: "Pixel 7 Pro",
    price: 12800,
    currency: "RUB",
    color: [colors.red],
    screen_size: "6.7",
    kod_product: "56799",
    update_frequency: "120Гц",
    battery_capacity: "5000 мAч",
    communication_standard: "2G, 3G, 4G LTE, 5G",
    img_url:
      "https://fetch.ee/assets/item-images/583e/a843a9436d700e54ef37.jpg",
    brand: "Google",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(smartphones);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(smartphones.find((phone) => phone.id === id));
    }, 1000);
  });

export default {
  fetchAll,
  getById,
};
