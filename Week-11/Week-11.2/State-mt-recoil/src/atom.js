//atom.js

import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 0,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    return networkAtomCount + jobsAtomCount + messagingAtomCount;
  },
});
