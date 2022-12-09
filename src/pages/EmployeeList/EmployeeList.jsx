import './employeeList.scss';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
import React from 'react';
import { useSelector } from "react-redux";
import Header from '../../components/Header/Header';

function EmployeeList() {

    const testData = useSelector((state) => state.createEmployee);

    const data = React.useMemo(
        () => testData.inputState,
        [testData.inputState]
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstNameInput', // accessor is the "key" in the data
            },
            {
                Header: 'Last Name',
                accessor: 'lastNameInput',
            },
            {
                Header: 'Start Date',
                accessor: 'startDateInput',
            },
            {
                Header: 'Department',
                accessor: 'valueDepartmentSelect',
            },
            {
                Header: 'Birth Date',
                accessor: 'birthDateInput',
            },
            {
                Header: 'Street',
                accessor: 'streetInput',
            },
            {
                Header: 'City',
                accessor: 'cityInput',
            },
            {
                Header: 'State',
                accessor: 'valueStateSelect',
            },
            {
                Header: 'Zip Code',
                accessor: 'zipCodeInput',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        setGlobalFilter,
        state: { pageIndex, pageSize, globalFilter },
    } = useTable({ columns, data, initialState: { pageIndex: 0 } },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    return (
        <div>
            <Header goTo='Home' page='Current Employees' link='/' />
            <div className="pagination">
                <div>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                </div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    Go to page : {' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <div>
                    <label>Search : </label>
                    <input
                        type="text"
                        value={globalFilter || ""}
                        onChange={e => setGlobalFilter(e.target.value)}
                    />
                </div>
            </div>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }} className='table'>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{
                                        borderBottom: 'solid 3px #54494b',
                                        background: '#91c7b1',
                                        color: '#54494b',
                                        fontWeight: 'bold',
                                        padding: '0.5em'
                                    }}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: '#f1f7ed',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList