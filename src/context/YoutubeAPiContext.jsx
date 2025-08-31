import {createContext, useContext} from "react";
import Youtube from "../Api/youtube.js";
import FakeYoutubeClient from "../Api/fakeYoutubeClient.js";
import YoutubeClient from "../Api/youtubeClient.js";
// import FakeYoutube from "../Api/fakeYoutube.js";

// eslint-disable-next-line react-refresh/only-export-components
export const YoutubeAPiContext = createContext();

const client = new FakeYoutubeClient();
// const client = new YoutubeClient()
const youtube = new Youtube(client)
export function YoutubeAPiProvider({children}) {
    return <YoutubeAPiContext.Provider value={{youtube}}>{children}</YoutubeAPiContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useYoutubeApi() {
    return useContext(YoutubeAPiContext);
}
