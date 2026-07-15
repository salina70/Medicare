const WelcomeHeader = ({ name }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Good morning, {name}👋</h1>

      <p className="mt-2 text-neutral-400">
        Manage your appointments and healthcare information.
      </p>
    </div>
  );
};

export default WelcomeHeader;
