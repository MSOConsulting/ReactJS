import _ from "lodash";

export default function Paginate(itemArray, currentPage, PageSize) {
  let startIndex = (currentPage - 1) * PageSize;
  return _(itemArray)
    .slice(startIndex)
    .take(PageSize)
    .value();
}
