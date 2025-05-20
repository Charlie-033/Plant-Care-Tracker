import React, { useEffect } from 'react';

const DocumentTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - PlantLab`;
    }, [title])
};

export default DocumentTitle;