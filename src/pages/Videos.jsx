import React from 'react';
import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard.jsx";
import {useYoutubeApi} from "../context/YoutubeAPiContext.jsx";



export default function Videos() {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();
    const {isLoading,error,data:videos} = useQuery({
        queryKey: ['videos',keyword], queryFn : () => {
            return youtube.search(keyword)
        }

    });
    return (
        <div>
            <h1>Videos {keyword ? `🔍${keyword}` : '🔥'}</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>someThing is Wrong😑</p>}
            {videos && <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5a gap-2 gap-y-4">
                {videos.map(video => <VideoCard key={video.id} video={video}/>)}
            </ul>}
        </div>
    );
}
