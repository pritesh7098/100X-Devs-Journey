import { atom } from "recoil";

export const homeAtom = atom({
  key: "home",
  default: 0,
});

export const NetworkAtom = atom({
  key: "nw",
  default: 111,
});

export const JobsAtom = atom({
  key: "ja",
  default: 10,
});

export const NotificationAtom = atom({
  key: "na",
  default: 123,
});

export const MesagingAtom = atom({
  key: "ma",
  default: 15,
});
