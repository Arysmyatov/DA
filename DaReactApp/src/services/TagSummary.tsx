import { Text } from "@chakra-ui/react";
import useTags  from "../hooks/useTags";

const TagSummary = () => {
    const {tags, error} = useTags();
    
    return (
        <>
            {error && <Text>{error}</Text>}
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