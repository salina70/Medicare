import { useSelector } from "react-redux";
import NextAppointment from "../../components/pageComponents/dashboard/patient/NextAppointment";
import QuickActions from "../../components/pageComponents/dashboard/patient/QuickAction";
import RecentActivity from "../../components/pageComponents/dashboard/patient/RecentActivity";
import UpcomingVisits from "../../components/pageComponents/dashboard/patient/UpcomingAppointnemnt";
import WelcomeHeader from "../../components/pageComponents/dashboard/patient/WelcomePatient";
import {
  upcomingAppointment,
  recentActivity,
  upcomingAppointments,
  quickActions,
} from "../../data/patientDashboard";

const PatientDashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="space-y-6">
      <WelcomeHeader name={user?.name ?? "User"} />

      <NextAppointment appointment={upcomingAppointment} />

      <QuickActions actions={quickActions} />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentActivity items={recentActivity} />

        <UpcomingVisits appointments={upcomingAppointments} />
      </div>
    </div>
  );
};

export default PatientDashboard;
