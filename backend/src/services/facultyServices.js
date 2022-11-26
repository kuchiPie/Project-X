// ClienteGet(req, callback) {
//     // simply pass the callback argument directly to the `repo.get` call
//     repo.get(req.params.clienteId, callback);
// };

import {getFaculty, createFaculty, updateFaculty, deleteFaculty} from '../repository/facultyRepository.js'

export default class FacultyService{
    async getFacultyService(req) {
        const data = await getFaculty();
        return data.data;
    }

    async createFacultyService(req) {
        try {
            const data = await createFaculty(req.body);
        return { success: true, data: data};
            } catch (error) {
            throw error;
        }
    }

    async updateFacultyService(req) {
        const {id} = req.params;
        const data = await updateFaculty(id, req.body);
        return { success: true, data: data};
    }

    async deleteFacultyService(req) {
        const {id} = req.params;
        const data = await deleteFaculty(id);
        return { success: true, data: data};
    }
}