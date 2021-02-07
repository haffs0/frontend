import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const TransactionContext = createContext()

export const SchoolContextProvider = ({children}) => {
    const [teachers, setTeachers] = useState([])
    const [students, setStudents] = useState([])
    const [openTeacherModel, setOpenTeacherModel] = useState(false)
    const [openStudentModel, setOpenStudentModel] = useState(false)
  
    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/api/teachers/")
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    const openTeacher = () => setOpenTeacherModel(true)
    const openStudent = () => setOpenStudentModel(true)
    const closeTeacher = () => setOpenTeacherModel(false)
    const closeStudent = () => setOpenStudentModel(false)
   
    return (
        <TransactionContext.Provider
            value={
                {
                 teachers,
                 students,
                 openTeacher,
                 openStudent,
                 closeStudent,
                 closeTeacher,
                 openTeacherModel,
                 openStudentModel
                }
            }
        >
            {children}
        </TransactionContext.Provider>
    )
};