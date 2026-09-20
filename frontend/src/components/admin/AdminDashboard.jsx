import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back, Admin
        </p>
      </div>


      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Patients */}
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Patients
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                1,248
              </h2>
            </div>

            <div className="rounded-full bg-blue-100 p-3 text-xl">
              👥
            </div>

          </div>
        </div>


        {/* Doctors */}
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Doctors
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                86
              </h2>
            </div>

            <div className="rounded-full bg-green-100 p-3 text-xl">
              👨‍⚕️
            </div>

          </div>
        </div>


        {/* Appointments */}
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Appointments
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                324
              </h2>
            </div>

            <div className="rounded-full bg-purple-100 p-3 text-xl">
              📅
            </div>

          </div>
        </div>


        {/* Departments */}
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Departments
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                12
              </h2>
            </div>

            <div className="rounded-full bg-orange-100 p-3 text-xl">
              🏥
            </div>

          </div>
        </div>

      </div>


      {/* Quick Actions */}
      <div className="mt-8">

        <h2 className="text-lg font-semibold text-gray-800">
          Quick Actions
        </h2>

        <p className="mb-4 text-sm text-gray-500">
          Manage your hospital
        </p>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Link
            to="/dashboard/add-patient"
            className="rounded-lg bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 text-2xl">
              👤
            </div>

            <h3 className="font-semibold text-gray-800">
              Add Patient
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Register a new patient
            </p>
          </Link>


          <Link
            to="/dashboard/add-doctor"
            className="rounded-lg bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 text-2xl">
              👨‍⚕️
            </div>

            <h3 className="font-semibold text-gray-800">
              Add Doctor
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Register a new doctor
            </p>
          </Link>


          <Link
            to="/dashboard/add-department"
            className="rounded-lg bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 text-2xl">
              🏥
            </div>

            <h3 className="font-semibold text-gray-800">
              Add Department
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Create a new department
            </p>
          </Link>


          <Link
            to="/dashboard/appointments"
            className="rounded-lg bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 text-2xl">
              📅
            </div>

            <h3 className="font-semibold text-gray-800">
              Appointments
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Manage appointments
            </p>
          </Link>

        </div>

      </div>


      {/* Recent Patients */}
      <div className="mt-8 rounded-lg bg-white shadow-sm">

        <div className="flex items-center justify-between border-b p-5">

          <div>
            <h2 className="font-semibold text-gray-800">
              Recent Patients
            </h2>

            <p className="text-sm text-gray-500">
              Recently registered patients
            </p>
          </div>

          <Link
            to="/dashboard/patients"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View All
          </Link>

        </div>


        <div className="divide-y">

          {/* Patient 1 */}
          <div className="flex items-center justify-between p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                RS
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Ram Sharma
                </h3>

                <p className="text-xs text-gray-500">
                  PAT-10234
                </p>
              </div>

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Active
            </span>

          </div>


          {/* Patient 2 */}
          <div className="flex items-center justify-between p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-600">
                SK
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Sita Karki
                </h3>

                <p className="text-xs text-gray-500">
                  PAT-10233
                </p>
              </div>

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Active
            </span>

          </div>


          {/* Patient 3 */}
          <div className="flex items-center justify-between p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-600">
                AB
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Anil Bhandari
                </h3>

                <p className="text-xs text-gray-500">
                  PAT-10232
                </p>
              </div>

            </div>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              Inactive
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
