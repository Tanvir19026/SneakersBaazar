import useAuth from "../../Hooks/UseAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto h-[300px] lg:max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex-shrink-0">
              {user.photoURL ? (
                <img
                  className="h-24 w-24 lg:h-32 lg:w-32 rounded-full"
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                <div className="h-24 w-24 lg:h-32 lg:w-32 flex items-center justify-center bg-gray-300 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-12 w-12 lg:h-16 lg:w-16 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Hello, <span className="text-red-500">{user.displayName}</span>!
              </h2>
              <p className="text-gray-600 text-2xl">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
