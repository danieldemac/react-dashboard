import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

const DataTable = (props:Props) => {

    const handleDelete = (id:number)=>{
      console.log(id + "foi deletado!")
    }

    const actionColumn:GridColDef = {
      field: 'actions', headerName:'Actions', width:200,
      renderCell:(params) => {
        return <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <Link>
            <img src="/delete.svg" alt="" />
            </Link> 
          </div>
        
        </div>
      }
    }
    
    type Props = {
      columns: GridColDef[],
      rows:object[]
      slug:string;
    }

    return (
        <div className="dataTable">
            <DataGrid
            className="dataGrid"
            rows={props.rows}
            columns={[...props.columns, actionColumn]}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 10,
                },
            },
            }}
            slots={{toolbar:GridToolbar}}
            slotProps={{
                toolbar:{
                    showQuickFilter:true,
                    quickFilterProps: {debounceMs: 500}
                }
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
             />
        </div>
    )
}

export default DataTable