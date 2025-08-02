export function paginate<T>(items: T[], pageSize: number, pageNumber: number): T[] {
  let startIndex = pageNumber * pageSize - pageSize;
  let endIndex = pageNumber * pageSize;
  return items.slice(startIndex, endIndex);
}



