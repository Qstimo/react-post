import React from "react";


export const useSortedComments = (item, sort) => {
    const sorted = React.useMemo(() => {
        if (sort) {
            return [...item].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return item;
    }, [item, sort]);
    return sorted;
}

export const useComments = (item, sort, search) => {
    const sortedData = useSortedComments(item, sort);
    const sortedSearchComments = React.useMemo(() => {
        return sortedData.filter(comment => comment.body.toLowerCase().includes(search.toLowerCase()));
    }, [sortedData, search]);
    return sortedSearchComments;
};






// export const useSortedComments = (item, sort) => {
//     const sortedComments = React.useMemo(() => {
//         if (sort) {
//             return [...item].sort((a, b) => a[sort].localeCompare(b[sort]));
//         }
//         return item;
//     }, [sort, item]);
//     return sortedComments;
// }

// export const useComments = (item, sort, search) => {
//     const sortedComments = useSortedComments(item, sort,);
//     const searchSortedComments = React.useMemo(() => {
//         return sortedComments.filter((elem) =>
//             elem.text.toLowerCase().includes(search.toLowerCase()),
//         );
//     }, [sortedComments, search]);
//     return searchSortedComments;
// };