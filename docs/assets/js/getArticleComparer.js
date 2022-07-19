function getArticleComparer(article) {
    return (a, b) => {
        const order = article?.sectionOrder === 'desc' ? -1 : 1;
        const sortBy = article?.sectionSortBy || "position";

        return a[sortBy] > b[sortBy] ? order :
               a[sortBy] < b[sortBy] ? -order :
               0;
    };
}

export default getArticleComparer;
