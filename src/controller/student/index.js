import StudentModel from "../../model/student/index.js";

const studentController = {
    getALL: (req,res) => {
        try {
            res.status(200).json({data: students})
        } catch (error) {
            res.status(500).json({message: error})
        }

    },
    getSingle: (req,res) => {
        try {
            const {firstName} = req.params;
            const student = students.find((ele) =>ele.firstName==firstName);
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
    update: (req,res)=>{
        try {
            const {firstName} = req.params;
            const payload = req.body;

            const studentIndex = students.findIndex((ele) => ele.firstName = firstName)

            if(studentIndex == -1){
                return res.status(404).json({message: "No Student Exists"})
            }
            if(payload.firstName){
                students[studentIndex].firstName = payload.firstName;
            }
            if(payload.phone){
                students[studentIndex].phone = payload.phone;
            }
            res.status(200).json({message: "Student Updated Successfuly"});
        } catch (error) {
            res.status(500).json({message: `Internal Server error: ${error}`})
        }
    },
    delete: (req,res) => {
        try {
            const { firstName } = req.params;
      
            const studentIndex = students.findIndex((ele) => ele.firstName == firstName);
            if (studentIndex == -1) {
              return res.status(404).json({ message: "No student with this name" });
            }
            students.splice(studentIndex, 1);
            res.status(200).json({ message: "Student Deleted" });
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }
    }
}

export default studentController;