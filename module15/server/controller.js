const {InquireModel, CourseModel} = require('./schema');
const defaultCourses = require('./defaultCourses');
CourseModel.create(defaultCourses)


module.exports = {
    // addToDo: async (req,res)=> {
    //    try{
    //     await ToDoModel.create(req.body)
    //     res.status(200).send("addToDo created")
    //    }catch(err){
    //     res.status(500).json(err)
    //    }
    // },
    // deleteToDo: async (req,res)=> {
    //     try{
    //         await ToDoModel.findByIdAndDelete(req.params.id)
    //          res.status(200).send("deleteToDo")
    //     }catch(err){
    //         res.status(500).json(err)
    //     }
    //  },
     getCourses: async (req,res)=> {
        try{
            const data = await CourseModel.find({})
             res.status(200).json(data)
        }catch(err){
            res.status(500).json(err)
        }
     },
     addInquiry: async (req,res)=> {
        try {
            await InquireModel.create({name: req.body.name, course_id: req.body.id, details: req.body.message})
            res.status(200).send("inquiry created")
        } catch (err) {
            res.status(500).json(err)
        }
     },
     getInquiry: async (req,res)=> {
        try{
            const data = await InquireModel.find({})
             res.status(200).json(data)
        }catch(err){
            res.status(500).json(err)
        }
     },
     getCoursesById: async (req,res)=> {
        try{
            const data = await CourseModel.findById(req.params.id)
             res.status(200).json(data)
        }catch(err){
            res.status(500).json(err)
        }
     },
    //  updateToDo: async (req,res)=> {
    //     try{
    //         const updatedToDo = await ToDoModel.findByIdAndUpdate(req.params.id, req.body)
    //          res.status(200).json(updatedToDo)
    //     }catch(err){
    //         res.status(500).json(err)
    //     }
    //  },

     reset: async (req,res)=> {
        try{
           await InquireModel.deleteMany({});
        
             res.status(200).send("reset")
        }catch(err){
            res.status(500).json(err)
        }
     }
}