import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";

interface Tag {
    tagName: string;
    count: number;
    percentage: number;
}

const useTags = () => {
    
    const [tags, setTags] = useState<Tag[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controler = new AbortController();
        
        apiClient.get<Tag[]>("/Statistic/GetTags", { signal: controler.signal })
            .then(res => setTags(res.data))
            .catch((err) => {
                if(err instanceof CanceledError) return; 
                setError(err.message)
            });
        
        return () => controler.abort();
    }, [])
    
    return { tags, error };
}

export default useTags;