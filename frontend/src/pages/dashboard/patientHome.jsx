
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PatientHome = () => {
  const navigate= useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r">

        {/* Logo */}
        <div className="flex items-center gap-3 border-b p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl text-white">
            ⚕
          </div>

          <div>
           <h2
  onClick={() => navigate("/")}
  className="cursor-pointer font-bold text-gray-800"
>
  MediCare
</h2>

            <p className="text-xs text-gray-500">
              Patient Portal
            </p>
          </div>
        </div>


        {/* Navigation */}
        <nav className="p-4">

          <p className="mb-3 px-3 text-xs font-semibold uppercase text-gray-400">
            Menu
          </p>

          <Link
            to="/patient"
            className="mb-2 flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white"
          >
            <span>🏠</span>
            Dashboard
          </Link>

          <Link
            to="/all-doctors"
            className="mb-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <span>👨‍⚕️</span>
            Find Doctor
          </Link>

          <Link
            to="/appointments"
            className="mb-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <span>📅</span>
            My Appointments
          </Link>

          <Link
            to="/profile"
            className="mb-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <span>👤</span>
            My Profile
          </Link>

          <Link
            to="/login"
            className="mt-6 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-500 hover:bg-red-50"
          >
            <span>🚪</span>
            Logout
          </Link>

        </nav>
      </aside>


      {/* Main Content */}
      <main className="ml-10 min-h-screen p-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back 👋
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your appointments and find doctors.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            👤
          </div>

        </div>


        {/* My Appointments */}
        <section className="mb-8 rounded-lg bg-white shadow-sm">

          <div className="flex items-center justify-between border-b p-5">

            <div>
              <h2 className="font-semibold text-gray-800">
                My Appointments
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your upcoming appointments
              </p>
            </div>

            <Link
              to="/appointments"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View All
            </Link>

          </div>


          {/* Appointment */}
          <div className="flex items-center justify-between p-5">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
                👨‍⚕️
              </div>

              <div>
                <h3 className="font-medium text-gray-800">
                  Dr. John Doe
                </h3>

                <p className="text-sm text-gray-500">
                  Cardiology
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  📅 September 10, 2026 · 10:00 AM
                </p>
              </div>

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Confirmed
            </span>

          </div>


          {/* Second Appointment */}
          <div className="border-t p-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl">
                  👩‍⚕️
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">
                    Dr. Sarah Smith
                  </h3>

                  <p className="text-sm text-gray-500">
                    Dermatology
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    📅 September 15, 2026 · 2:00 PM
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                Pending
              </span>

            </div>

          </div>

        </section>


        {/* Find Doctor */}
        <section className="rounded-lg bg-white shadow-sm">

          <div className="flex items-center justify-between border-b p-5">

            <div>
              <h2 className="font-semibold text-gray-800">
                Find a Doctor
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Find the right doctor for your needs
              </p>
            </div>

            <Link
              to="/doctors"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View All
            </Link>

          </div>


          {/* Doctors */}
          <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Doctor 1 */}
            <div className="rounded-lg border p-4">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
                  👨‍⚕️
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">
                    Dr. John Doe
                  </h3>

                  <p className="text-sm text-gray-500">
                    Cardiologist
                  </p>
                </div>

              </div>

              <div className="mb-4 flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  ⭐ 4.8
                </span>

                <span className="text-sm text-gray-500">
                  10+ Years
                </span>

              </div>

              <Link
                to="/doctors"
                className="block rounded-md bg-blue-600 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
              >
                Book Appointment
              </Link>

            </div>


            {/* Doctor 2 */}
            <div className="rounded-lg border p-4">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl">
                  👩‍⚕️
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">
                    Dr. Sarah Smith
                  </h3>

                  <p className="text-sm text-gray-500">
                    Dermatologist
                  </p>
                </div>

              </div>

              <div className="mb-4 flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  ⭐ 4.7
                </span>

                <span className="text-sm text-gray-500">
                  8+ Years
                </span>

              </div>

              <Link
                to="/appointments"
                className="block rounded-md bg-blue-600 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
              >
                Book Appointment
              </Link>

            </div>


            {/* Doctor 3 */}
            <div className="rounded-lg border p-4">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
                  👨‍⚕️
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">
                    Dr. David Lee
                  </h3>

                  <p className="text-sm text-gray-500">
                    Neurologist
                  </p>
                </div>

              </div>

              <div className="mb-4 flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  ⭐ 4.9
                </span>

                <span className="text-sm text-gray-500">
                  12+ Years
                </span>

              </div>

              <Link
                to="/all-doctors"
                className="block rounded-md bg-blue-600 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default PatientHome;
