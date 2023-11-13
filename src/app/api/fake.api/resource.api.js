export const resourceObject = {
  friends: { _id: "67rdca3eeb7f6fgeed471818", name: "Друзья" },
  instagramm: { _id: "67rdca3eeb7f6fgeed471820", name: "Инстаграмм" },
  vkontakte: { _id: "67rdca3eeb7f6fgeed471814", name: "ВКонтакте" },
  marketplace: { _id: "67rdca3eeb7f6fgeed471822", name: "МаркетПлейсы" },
  youtube: { _id: "67rdca3eeb7f6fgeed471824", name: "YuoTube" },
  telegramm: { _id: "67rdca3eeb7f6fgeed471829", name: "Telegramm" },
};
export const resource = [
  { id: "67rdca3eeb7f6fgeed471818", name: "Друзья" },
  { id: "67rdca3eeb7f6fgeed471820", name: "Инстаграмм" },
  { id: "67rdca3eeb7f6fgeed471814", name: "ВКонтакте" },
  { id: "67rdca3eeb7f6fgeed471822", name: "МаркетПлейсы" },
  { id: "67rdca3eeb7f6fgeed471824", name: "YuoTube" },
  { id: "67rdca3eeb7f6fgeed471829", name: "Telegramm" },
  { id: "67rdca3eeb7f6fgeed471830", name: "Другое" },
];

const fetchAll = () =>
  new Promise((resolve) =>
    window.setTimeout(function () {
      resolve(resource);
    }, 3000)
  );
export default {
  fetchAll,
};
