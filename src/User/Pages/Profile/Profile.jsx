/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"; // ใช้เพื่อการนำทางหลังจากออกจากระบบ
import './Profile.css';

function Profile({ username, name_surname, setToken, setRole, setUsername, setName_surname }) {
  const navigate = useNavigate(); // ใช้สำหรับการนำทางไปยังหน้า Login หลังออกจากระบบ
  console.log("Username in Profile:", username);

  // รีเซ็ตข้อมูลทั้งหมดเมื่อผู้ใช้ทำการล็อกเอาต์
  const handleLogout = () => {
    setToken("");
    setRole("");
    setUsername("");
    setName_surname("");

    navigate("/");
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">PROFILE</h1>
      <div className="profile-img"></div>
      <div className="profile-name">{name_surname}</div>
      <div className="profile-username">username : {username}</div>
      <div className="profile-logout">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
