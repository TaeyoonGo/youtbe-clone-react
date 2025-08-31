import React from 'react';
import SearchHeader from "../components/SearchHeader.jsx";
import {useLocation} from "react-router";

export default function VideosDetail() {
    const {state : {video}} = useLocation();
    const {title} = video.snippet;
    return (
        <section>
            <iframe id="existing-iframe-example"
                    width="100%" height="640"
                    src={`https://www.youtube.com/embed/${video.id}`}
            />
            <div>
                <h2>{title}</h2>
            </div>
        </section>
    );
}
