import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DATA from '../../dummy_data'
import './mUITable.css'

const MUITable = () => {

  const columns = [
    {
      headerName: 'Name',
      field: 'name',
      width: 200,
      fontWeight: 'bold'
    },
    {
      headerName: 'Date of Birth',
      field: 'dob',
      width: 125,
    },
    {
      headerName: 'Age',
      field: 'age',
      width: 100,
    },
    {
      headerName: 'Gender',
      field: 'gender',
      width: 100,
    },
    {
      headerName: 'Favorite Color',
      field: 'favoriteColor',
      width: 125,
    },
    {
      headerName: 'Region',
      field: 'region',
      width: 125,
    },
  ];

  const rows = DATA

  return (
    <div className='muiTable'>
      <div style={{ height: 650, width: 840}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default MUITable
