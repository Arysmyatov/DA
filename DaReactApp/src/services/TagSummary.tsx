import React,   { useState, useEffect } from 'react';
import apiClient from "./api-client";

interface Tag {
    tagName: string;
    count: number;
    percentage: number;
}

const TagSummary = () => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiClient.get<Tag[]>("/Statistic/GetTags")
            .then(res => setTags(res.data))
            .catch((err) => setError(err.message));
    })

    return (
        <>
            {error && <div>{error}</div>}
            
        <ul>
            {tags.map(tag => (
                <li key={tag.tagName}>
                    {tag.tagName} - ({tag.count}) - {tag.percentage}%
                </li>
            ))}
        </ul>
        </>
    );
}

export default TagSummary