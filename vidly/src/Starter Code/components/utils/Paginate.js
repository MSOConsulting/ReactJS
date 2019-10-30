import _ from "lodash";

export default function Paginate(itemArray, currentPage, pageSize) {
  const startIndex = currentPage - 1 * pageSize;
  return _(itemArray)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
