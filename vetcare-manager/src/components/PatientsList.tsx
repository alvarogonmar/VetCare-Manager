import { usePatientStore } from "../store/store";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <p>yes</p>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients {""}
            <span className="text-indigo-600 font-bold">
              and they will appear here
            </span>
          </p>
        </>
      )}
    </div>
  );
}
