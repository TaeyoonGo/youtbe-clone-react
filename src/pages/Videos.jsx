import React from 'react';
import {useParams} from "react-router";

export default function Videos() {
    const {keyword} = useParams();
    return (
        <div>
            <h1>Videos {keyword ? `🔍${keyword}` : '🔥'}</h1>
        </div>
    );
}
