/**
 * @param {array} pageList
 * @param {number} currentPage
 * @param {number} pageShift
 * @return {array}
 */
export const createListPage = (pageList, currentPage, pageShift) => {
    const totalPage = pageList.length;
    if (currentPage < 1) {currentPage = 1;}
    if (currentPage > totalPage) {currentPage = totalPage;}

    let leftShift = currentPage - pageShift - 1;
    let rightShift = currentPage + pageShift;
    if (leftShift < 0) {
        rightShift += 0 - leftShift;
        leftShift = 0;
    }

    if (rightShift > totalPage) {
        leftShift -= rightShift - totalPage;
        rightShift = totalPage;
    }

    leftShift = leftShift < 0 ? 0 : leftShift;
    return pageList.slice(leftShift, rightShift);
};

/**
 *
 * @param {number} offset
 * @param {number} limit
 * @param {number} size
 * @return {number}
 */
export const currentPage = (offset, limit, size) => {
        return Math.ceil((offset + size) / limit);
};

/**
 *
 * @param {number} total
 * @param {number} limit
 * @return {number}
 */
export const totalPage = (total, limit) => {
    return Math.ceil(total / limit);
};
