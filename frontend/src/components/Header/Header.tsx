import { PiArrowCircleLeftBold, PiUserCircleFill } from "react-icons/pi";

interface HeaderProps {
  isHomePage: boolean;
  username?: string | undefined;
  logout?: () => void;
}

const Header = ({ isHomePage, username, logout }: HeaderProps) => {
  const handleBack = () => {
    return null;
  };

  return (
    <div className="flex flex-row top-0 px-10 w-full h-20 bg-white items-center justify-between z-10 sticky">
      <div className="text-black text-4xl font-primaryBold">
        {isHomePage ? (
          `Welcome ${username![0].toUpperCase() + username!.slice(1)}!` // capitalized
        ) : (
          <button
            className="hover:bg-gray-200 rounded-full"
            onClick={handleBack}
          >
            <PiArrowCircleLeftBold size={60} />
          </button>
        )}
      </div>
      <div>
        <button onClick={logout} className="hover:bg-gray-200 rounded-full">
          <PiUserCircleFill size={60} />
        </button>
      </div>
    </div>
  );
};

export default Header;
