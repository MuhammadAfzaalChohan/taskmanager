"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
function paginate(items, pageSize, pageNumber) {
    let startIndex = pageNumber * pageSize - pageSize;
    let endIndex = pageNumber * pageSize;
    return items.slice(startIndex, endIndex);
}
