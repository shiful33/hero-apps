import { useState } from "react";
import { useLoading } from "../Contexts/LoadingContext";


function SearchComponent() {
    const [query, setQuery] = useState('');
    const { startLoading, stopLoading } = useLoading();

    const handleSearch = async (searchQuery) => {
        if (!searchQuery) return;

        startLoading();

        try {
            const response = await fetch(`/api/search/q=${searchQuery}`);
        } catch (error) {
            console.error("search failed:", error);
        } finally {
            stopLoading();
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className="p-4">
            <input type="text" value={query} onChange={handleChange} onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(query); }}
            className="w-full p-2 border" placeholder="Type to search"
            />
        </div>
    )
};

export default SearchComponent;