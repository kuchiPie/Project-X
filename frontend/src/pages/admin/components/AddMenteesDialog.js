import { useDebugValue, useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toolbar } from 'primereact/toolbar'
import SearchStudent from '../../../widgets/SearchStudent';
import { getAllStudents, mapSelectedStudents } from '../../../reduxSlices/studentSlice';
import { useDispatch, useSelector } from "react-redux";

const AddMenteesDialog = (props) => {
	// console.log(props.faculty)
	const emptyStudent = {
		name: "",
		institute_id: "",
		gender: "",
		department: "",
		session: "",
		phone_no: "",
	};

	const reduxStudent = useSelector(state => state.student);
	const token = useSelector(state => state.login.token)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllStudents({ keyword: "", batch: "", branch: "", limit: "1", skip: "" }));
	}, [])

	const [selectedStudents, setSelectedStudents] = useState();
	const [globalFilter, setGlobalFilter] = useState(null);

	const paginatorLeft = (
		<Button type="button" icon="pi pi-refresh" className="p-button-text" />
	);
	const paginatorRight = (
		<Button type="button" icon="pi pi-cloud" className="p-button-text" />
	);

	const header = (
		<>
			<div className="table-header">
				<span className="p-input-icon-left">
					<i className="pi pi-search" />
					<InputText type="search" onInput={(e) => { setGlobalFilter(e.target.value) }} placeholder="Search" />
				</span>
			</div>
		</>
	)
	
	const getSearchData = (searchKeyword, searchBranch, searchBatch) => {
		dispatch(getAllStudents({ keyword: searchKeyword, batch: searchBatch, branch: searchBranch, limit: "", skip: "" }));
	}

	const mapMenteesToFaculty = ()=> {
		var studentIds = []
		console.log(selectedStudents,12)
		selectedStudents.forEach(element => {
			studentIds.push(element.id)
		});
		dispatch(mapSelectedStudents({selStudents: studentIds, facultyId: props.faculty._id}));
	}

	const searchedStudents = [
	];

	reduxStudent.students.map(student => searchedStudents.push({ name: student.name, institute_id: student.rollno, department:student.branch, session:student.batch, phone_no:student.mobileNo, id: student._id}))
	// console.log(selectedStudents)
	return (
		<>
			<div className="w-full min-h-screen p-5">
				<SearchStudent dataHandler={getSearchData} loading={reduxStudent.isLoading} />
				<DataTable
					value={searchedStudents}
					paginator
					responsiveLayout="scroll"
					paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
					currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
					rows={10}
					rowsPerPageOptions={[10, 20, 50]}
					paginatorLeft={paginatorLeft}
					paginatorRight={paginatorRight}
					selection={selectedStudents}
					onSelectionChange={(e) => setSelectedStudents(e.value)}
					globalFilter={globalFilter}
					header={header}
				>
					<Column
						selectionMode="multiple"
						headerStyle={{ width: "3rem" }}
					></Column>
					<Column
						field="name"
						header="Name"
						style={{ minWidth: "8rem" }}
					></Column>
					<Column
						field="institute_id"
						header="Institute Id"
						style={{ minWidth: "8rem" }}
					></Column>
					<Column
						field="session"
						header="Session"
						style={{ minWidth: "8rem" }}
					></Column>
					<Column
						field="phone_no"
						header="Phone No."
						style={{ minWidth: "8rem" }}
					></Column>
				</DataTable>
				
				
				<div class="card">
					<div class="flex flex-wrap align-items-center justify-content-center card-container">
						<div class="max-w-full p-4 flex align-items-center justify-content-center">
							<Button label="Add Selected Mentees" onClick={mapMenteesToFaculty}/>
						</div>
					</div>
				</div>


			</div>
			
		</>
	);
};

export default AddMenteesDialog;
