import { useEffect } from 'react';

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - PlantLab`;
    }, [title])
};

export default useDocumentTitle;