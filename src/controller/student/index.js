import StudentModel from "../../model/student/index.js";

const studentController = {
    getALL: async(req,res) => {
        console.log(req.user);
        try {

            const students = await StudentModel.findAll({
                where: {
                    // firstName: "Ali",
                },
                order: [["createdAt"]],
                // limit: 5,
            });
            res.status(200).json({data: students})
          
        } catch (error) {
            res.status(500).json({message: `Internal Server Error: ${error}`})
        }

    },
    getSingle: async(req,res) => {
        try {
            const {id} = req.params;
            // console.log(`This is Params====>: ${(req)}`);
            const student = await StudentModel.findByPk(id);
            if(!student){
                return res.status(400).json({message: "No Student with this name exists"});
            }
            res.status(200).json({data: student});
        } catch (error) {
            res.status(500).json({message: `Internal Server error: ${error}`})
        }
    },
    create: async (req,res) => {
        try {
            const payload = req.body;
            const student = new StudentModel();
            student.firstName = payload.firstName;
            student.lastName = payload.lastName;
            student.phone = payload.phone;
            student.email = payload.email;
            await student.save();
            res.status(200).json({data: student});

        } catch (error) {
            res.status(500).json({message: `Internal Server Error: ${error}`})
        }
        
    },
    update: async(req,res)=>{
        try {
            const {id} = req.params;
            const payload = req.body;

            // const studentIndex = await StudentModel.findIndex((ele) => ele.id == id);
            const student = await StudentModel.findByPk(id);
            

            if(!student){
                return res.status(404).json({message: "No Student Exists"})
            }
            // if(payload.firstName){
            //     updateStudent.firstName = payload.firstName;
            // }
            // if(payload.phone){
            //     updateStudent.phone = payload.phone;
            // }
            // if(payload.lastName){
            //     updateStudent.lastName = payload.lastName;
            // }
            // if(payload.email){
            //     updateStudent.email = payload.email;
            // }
            await StudentModel.update(payload, {
                where: {id: id}
            })
            const updateStudent = await StudentModel.findByPk(id);
            res.status(200).json({message: `Student Updated Successfuly:`, data: updateStudent});
        } catch (error) {
            res.status(500).json({message: `Internal Server error: ${error}`})
        }
    },
    delete: async(req,res) => {
        try {
            const { id } = req.params;
      
            const student = await StudentModel.findByPk(id);
            if (!student) {
              return res.status(404).json({ message: "No student with this id" });
            }
            await student.destroy();
            res.status(200).json({ message: "Student Deleted" });
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }
    }
}

export default studentController;