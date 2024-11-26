import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import PropTypes from 'prop-types';

function App({ columns, data }) {


    const columnstT = columns.map((e, columnIndex) => ({
        dataField: e.field, // Maps the field name to dataField
        text: e.label,      // Maps the label to text
        filter: e.filter ? textFilter() : undefined, // Adds filtering if specified
        formatter: e.render ? (cell, row) => e.render(row) : undefined, // Use render if it exists
    }));

    return (
        <>
            <h3>Product Table</h3>
            <BootstrapTable
                keyField="id"
                data={data}
                columns={columnstT}
                filter={filterFactory()} // Applies filters
                striped
                hover
                condensed
            />
        </>
    );
};
App.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            field: PropTypes.string.isRequired,
            scope: PropTypes.string,
            render: PropTypes.func,
        })
    ).isRequired,
    data: PropTypes.array.isRequired,
};
export default App;
