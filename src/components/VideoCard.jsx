import React from 'react';
import {FormatAgo} from "../utils/date.js";
import {useNavigate} from "react-router";
export default function VideoCard({video}) {
    const {title, thumbnails, channelId, publishedAt} = video.snippet;
    const navigate = useNavigate()
    return (
        <li onClick={() => {navigate(`videos/watch/${video.id}`,{state:{video}})}}>
            <img className="w-full" src={thumbnails.medium.url} alt={title}/>
            <p className="font-semibold my-2 line-clamp-2">{title}</p>
            <p className="text-sm opacity-80">{channelId}</p>
            <p className="text-sm opacity-80">{FormatAgo(publishedAt, 'ko')}</p>
        </li>
    );
}
