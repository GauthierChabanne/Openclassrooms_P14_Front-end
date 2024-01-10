import React from "react";
import { AllColumns } from "./Column";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Filter from "./Filter";
import "../styles/Table.css"

/**
 * The table used to show all employees.
 * @component
 * @example
 * return (
 *  <Table />
 * )
 */

function Table() {
  const allEmployee = useSelector((state) => state.employees.allEmployees);

  const columns = useMemo(() => AllColumns, []);
  const data = useMemo(() => allEmployee, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    prepareRow,
    setPageSize,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div>
      <div className="table-utils">
        <div className="table-select">
          <span>Show</span>
          <select
          className="table-select__selector"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span>entries</span>
        </div>
        <Filter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table
        className="table"
        {...getTableProps()}
      >
        <thead className="table__header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="table__header__head"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span className="table__header__head__sort">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaAngleDown />
                      ) : (
                        <FaAngleUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr className="even:bg-gray-100" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="text-lg p-4 border-2"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-3">
        <button
          className="mr-3 inline-block px-8 py-3 text-sm font-medium text-white bg-[#111827] border border-[#111827] rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </button>
        <span className="page-index">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          className="ml-3 inline-block px-8 py-3 text-sm font-medium text-white bg-[#111827] border border-[#111827] rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
