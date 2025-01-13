import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailsItem label="ID" data={patient.id} />
      <PatientDetailsItem label="Name" data={patient.name} />
      <PatientDetailsItem label="Caretaker" data={patient.caretaker} />
      <PatientDetailsItem label="Email" data={patient.email} />
      <PatientDetailsItem label="Date" data={patient.date.toString()} />
      <PatientDetailsItem label="Symptoms" data={patient.symptoms} />
    </div>
  );
}
