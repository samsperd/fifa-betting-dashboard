import { DataGrid } from '@mui/x-data-grid';
import { useGetFootballRankingsQuery } from '../services/footballApi'


const columns = [
  { field: 'ranking', headerName: 'Ranking', width: 70 },
  { field: 'rowName', headerName: 'Country', width: 130 },
  { field: 'points', headerName: 'Points', width: 130 },
  {
    field: 'previousPoints',
    headerName: 'Previous Points',
    type: 'number',
    width: 90,
  },
  {
    field: 'previousRanking',
    headerName: 'Previous Ranking',
    description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


function Table() {


  const { data, isFetching } = useGetFootballRankingsQuery()

  if (isFetching) {
    return "Loading..."
  }

  console.log(data);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>
        Table
      </h1>
      <DataGrid
        rows={data?.rankings}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Table;
