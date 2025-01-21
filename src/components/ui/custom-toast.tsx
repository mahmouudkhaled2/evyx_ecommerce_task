const CustomToastEx = ({
    visible,
    message,
    onClose,
  }: {
    visible: boolean;
    message: string;
    onClose: () => void;
  }) => {
    return (
      <div
        className={`${
          visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <p className="text-sm font-medium text-gray-900">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="p-4 text-indigo-600 hover:text-indigo-800"
        >
          Close
        </button>
      </div>
    );
  };
  
  export default CustomToastEx;