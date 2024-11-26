import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Input, Space} from 'antd';

const { Search } = Input;

const DataTable = ({ columns, data }) => {
  const [filteredData, setFilteredData] = useState(data);

  
  const handleSearch = (text) => {
    const filteredDataSource = data.filter((item) =>
      Object.values(item.user).some((value) =>
        String(value).toLowerCase().includes(text.toLowerCase())
      )
    );
    setFilteredData(filteredDataSource);
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Search
          placeholder="Rechercher"
          onSearch={handleSearch}
          style={{ width: 200 }}
        />
      </Space>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{
          pageSize: 5, // Nombre d'éléments par page
          hideOnSinglePage: true, // Masquer la pagination si une seule page
        }}
      />
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;