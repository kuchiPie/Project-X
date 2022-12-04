import StudentService from "../services/studentServices.js";

const studentService = new StudentService();

export const getStudentListController = async (req, res) => {
    try {
        const student = await studentService.getStudentListService(req)
        res.status(200).send(student)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const createStudentController = async (req, res) => {
    try {
        await studentService.createStudentService(req)
        res.status(200).send({success: true, message: "inserted successfully"})
    } catch (e) {
        res.status(500).send(e)
    }
}

export const updateStudentController = async (req, res) => {
    try {
        await studentService.updateStudentService(req)
        res.status(200).send({success: true, message: "updated successfully"})
    } catch (e) {
        res.status(500).send(e)
    }
}

export const deleteStudentController = async (req, res) => {
    try {
        await studentService.deleteStudentService(req)
        res.status(200).send({success: true, message: "deleted successfully"})
    } catch (e) {
        res.status(500).send(e)
    }
}