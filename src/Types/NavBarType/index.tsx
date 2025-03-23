export default interface NavBarType{
    option: string;
    setOption: React.Dispatch<React.SetStateAction<string>>;
    setNotification: React.Dispatch<React.SetStateAction<string>>;
    setFollowerText: React.Dispatch<React.SetStateAction<string>>;
  };