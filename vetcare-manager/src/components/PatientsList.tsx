import { usePatientStore } from "../store/store";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);
  return <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll"></div>;
}
