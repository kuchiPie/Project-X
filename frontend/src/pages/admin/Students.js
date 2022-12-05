import { useDebugValue, useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toolbar } from 'primereact/toolbar'
import SearchStudent from '../../widgets/SearchStudent';
import { getAllStudents } from '../../reduxSlices/studentSlice';
import { useDispatch, useSelector } from "react-redux";

const Students = () => {
	const emptyStudent = {
		name: "",
		institute_id: "",
		gender: "",
		department: "",
		session: "",
		phone_no: "",
	};

	const reduxStudent = useSelector(state => state.student);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllStudents({ keyword: "", batch: "", branch: "", limit: "", skip: "" }));
	}, [])

	const [selectedStudents, setSelectedStudents] = useState();
	const [deleteStudentDialog, setDeleteStudentDialog] = useState(false);
	const [studentInfoDialog, setStudentInfoDialog] = useState(false);
	const [student, setStudent] = useState(emptyStudent);
	const [submitted, setSubmitted] = useState(false);
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
	const actionBodyTemplate = (rowData) => {
		return (
			<>
				<Button
					icon="pi pi-pencil"
					className="p-button-rounded p-button-warning mr-2"
					onClick={() => editStudent(rowData)}
				/>
				<Button
					icon="pi pi-trash"
					className="p-button-rounded p-button-danger"
					onClick={() => confirmDeleteStudent(rowData)}
				/>
			</>
		);
	};

	const confirmDeleteStudent = (student) => {
		setStudent(student);
		setDeleteStudentDialog(true);
	};
	const hideDeleteStudentDialog = () => {
		setDeleteStudentDialog(false);
	};

	const hideStudentInfoDialog = () => {
		setStudentInfoDialog(false);
	};

	const editStudent = (student) => {
		setStudent({ ...student });
		setStudentInfoDialog(true);
	};

	const onInputChange = (e, name) => {
		const val = (e.target && e.target.value) || "";
		let _student = { ...student };
		_student[`${name}`] = val;

		setStudent(_student);
	};

	const studentInfoDialogFooter = (
		<>
			<Button label="Cancel" icon="pi pi-times" className="p-button-text" />
			<Button label="Save" icon="pi pi-check" className="p-button-text" />
		</>
	);

	const getSearchData = (searchKeyword, searchBranch, searchBatch) => {
		dispatch(getAllStudents({ keyword: searchKeyword, batch: searchBatch, branch: searchBranch, limit: "", skip: "" }));
	}

	const searchedStudents = [
	];

	reduxStudent.students.map(student => searchedStudents.push({ name: student.name, institute_id: student.rollno,department:student.branch,session:student.batch,phone_no:student.mobileNo}))

	return (
		<>
			<div className="w-full min-h-screen px-5">
				<h1>Manage Students</h1>
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
					<Column
						header="Actions"
						body={actionBodyTemplate}
						exportable={false}
						style={{ minWidth: "8rem" }}
					></Column>
				</DataTable>
			</div>
			<Dialog
				visible={deleteStudentDialog}
				style={{ width: "450px" }}
				header="Confirm"
				modal
				onHide={hideDeleteStudentDialog}
			>
				<div className="confirmation-content">
					<i
						className="pi pi-exclamation-triangle mr-3"
						style={{ fontSize: "2rem" }}
					/>
					{student && (
						<span>
							Are you sure you want to delete <b>{student.name}</b>?
						</span>
					)}
				</div>
			</Dialog>
			<Dialog
				visible={studentInfoDialog}
				style={{ width: "450px" }}
				header="Edit Student Profile"
				modal
				footer={studentInfoDialogFooter}
				onHide={hideStudentInfoDialog}
				className="p-fluid"
			>
				<div className="field">
					<label htmlFor="name">Name</label>
					<InputText
						id="name"
						value={student.name}

						required
						autoFocus
						className={classNames({ "p-invalid": submitted && !student.name })}
					/>
					{submitted && !student.name && (
						<small className="p-error">Name is required.</small>
					)}
				</div>
				<div className="field">
					<label htmlFor="institute_id">Institute Id</label>
					<InputText
						id="institute_id"
						value={student.institute_id}
						onChange={(e) => onInputChange(e, "institute_id")}
						required
						rows={3}
						cols={20}
					/>
				</div>
			</Dialog>
		</>
	);
};

export default Students;
