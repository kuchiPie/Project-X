import Admin from "../models/Admin"

export const adminAuth = async (req, res, next) => {
    const admin = await Admin.findOne({})

}