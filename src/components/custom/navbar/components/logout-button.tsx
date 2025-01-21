
export default function LogoutButton() {

  const handleLogout = async () => {

    try {
        const response = await fetch('/api/logout', { method: 'POST'});
        // If response is ok go to the login page
        if (response.ok) window.location.href = '/auth/login'; 
    } 

    catch (error) {
       if (error) throw new Error('Logout failed, Try again');
    } 

  };

  return (
    <>
        <button onClick={handleLogout}>
          <div className="flex items-center gap-1 bg-black text-white text-[15px] rounded py-1 px-4">
            <span>Logout </span>
              <i className="fa-solid fa-arrow-right-from-bracket ml-1"></i>
          </div>
        </button>
    </>
  );
}