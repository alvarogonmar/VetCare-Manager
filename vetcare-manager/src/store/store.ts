import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"
import { DraftPatient, Patient } from "../types"

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient["id"]) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
     return {...patient, id: uuidv4() } // CREAR ID
}

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
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
    }
}))