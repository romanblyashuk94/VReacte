export const showPagesCount = (pageCount, currentPage) => {
    let array = Array.from(
        new Set([
            1,
            2,
            3,
            currentPage < 2 ? 1 : currentPage - 1,
            currentPage,
            currentPage >= pageCount ? pageCount : currentPage + 1,
            pageCount - 2,
            pageCount - 1,
            pageCount,
        ])
    ).sort((a, b) => a - b).filter((el) => el > 0 && el <= pageCount);

    for (let i = 1; i < array.length; i++) {
        if (array[i] - 1 !== array[i - 1]) {
            array = [...array.slice(0, i), 0, ...array.slice(i)];
            i++;
        }
    }
    return array;
};