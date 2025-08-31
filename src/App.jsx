import './App.css'
import SearchHeader from "./components/SearchHeader.jsx";
import {Outlet} from "react-router";
import React from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {YoutubeAPiProvider} from "./context/YoutubeAPiContext.jsx";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <SearchHeader></SearchHeader>
            <YoutubeAPiProvider>
                <QueryClientProvider client={queryClient}>
                    <Outlet/>
                </QueryClientProvider>
            </YoutubeAPiProvider>
        </>
    )
}

export default App
