import { getStudentList, createStudent, updateStudent, deleteStudent, getStudentByID } from "../repository/studentsRepository.js";


export default class StudentService{

    async getStudentbyIDService(req) {
        const {id} = req.params;
        const data = await getStudentByID(id);
        return { success: true, data: data.data};
    }

    async getStudentListService(req) {
        const {keyword,batch, branch, limit, skip} = req.query;
        const data = await getStudentList(
            keyword? keyword: '',
            batch? batch: '', 
            branch? branch: '', 
            limit? limit: null, 
            skip? skip: null);
        return { success: true, data: data.data};
    }

    async createStudentService(req) {
        try {
            const data = await createStudent(req.body);
        return { success: true, data: data};
            } catch (error) {
            throw error;
        }
    }

    async updateStudentService(req) {
        const {id} = req.params;
        const data = await updateStudent(id, req.body);
        return { success: true, data: data};
    }

    async deleteStudentService(req) {
        const {id} = req.params;
        const data = await deleteStudent(id);
        return { success: true, data: data};
    }
}