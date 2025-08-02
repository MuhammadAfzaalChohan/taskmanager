"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
function paginate(items, pageSize, pageNumber) {
    var startIndex = pageNumber * pageSize - pageSize;
    var endIndex = pageNumber * pageSize;
    return items.slice(startIndex, endIndex);
}
