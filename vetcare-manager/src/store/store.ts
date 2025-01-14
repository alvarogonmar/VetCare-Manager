import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { v4 as uuidv4 } from "uuid"
import { DraftPatient, Patient } from "../types"

type PatientState = {
    patients: Patient[]
    activeID: Patient["id"]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient["id"]) => void
    getPatientById: (id: Patient["id"]) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
     return {...patient, id: uuidv4() } // CREAR ID
}

export const usePatientStore = create<PatientState>()(devtools(
    persist((set) => ({
        patients: [],
        activeID: "",
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({ // SET ES COMO EL RETURN, pero es el que se utiliza con zustand, setear informacion
    patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeID: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map(patient => patient.id === state.activeID ? 
                    {id: state.activeID, ...data} : patient),
                    activeID: ''
            }))
        }
    }), {
        name: "patient-storage",
        storage: createJSONStorage(() => localStorage) // con localstorage no debes especificar pero si pones el sessionStorage ahi si
    })
))
