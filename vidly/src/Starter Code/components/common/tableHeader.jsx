import React, { Component } from "react";

class TableHeader extends Component {
  state = {};
  raiseSort = path => {
    //path is the path to the target property
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    let { sortColumn } = this.props;
    if (sortColumn.path === column.path) {
      return sortColumn.order === "asc" ? "fa fa-sort-up" : "fa fa-sort-down";
    }
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.name} <i className={this.renderSortIcon(column)} />
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
