import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  homeAtom,
  NetworkAtom,
  JobsAtom,
  NotificationAtom,
  MesagingAtom,
} from "./store/atom.js";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

export function MainApp() {
  const homeCount = useRecoilValue(homeAtom);
  const networkCount = useRecoilValue(NetworkAtom);
  const jobsCount = useRecoilValue(JobsAtom);
  const notificationCount = useRecoilValue(NotificationAtom);
  const msgCount = useRecoilValue(MesagingAtom);

  return (
    <>
      <button>Home {homeCount}</button>
      <button>Network{networkCount}</button>
      <button>Jobs{jobsCount}</button>
      <button>Notification{notificationCount} </button>
      <button>Messages{msgCount}</button>
    </>
  );
}

export default App;

// okk, understood the atom concept as if we need just value use useRecoilValue hook, if we need to change its state we use useRecoilState and if we need an updater then we need useSetRecoilState, as of now i have understood this , next concept is selectors, but this class is "ghode khul gaye wali class" and its need moe focus do i'll cont it later on with full attention. ( maybe next week which is w9th).
