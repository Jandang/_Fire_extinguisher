/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import './Notifications.css';

function Notifications({ fireInfo, username }) {
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (Array.isArray(fireInfo)) {
            // กรองข้อมูลให้แสดงเฉพาะรายการที่มีค่า to ตรงกับ username
            const result = fireInfo.filter((fire) => fire.to === username && fire.status === "Assign");
            setFiltered(result);
        }
    }, [fireInfo, username]); //เรียกใช้ effect เมื่อ fireTo หรือ username เปลี่ยนแปลง
    console.log("srg juk g",filtered);

    // ถ้าไม่มีข้อมูลให้แสดงข้อความ
    if (filtered.length === 0) {
        return (
            <div>
                <div className="fire-header">
                    <Link to="/home">
                        <span className="bi bi-caret-left-fill back-icon"></span>
                    </Link>
                    <span className="fire-title">NOTIFICATIONS</span>
                </div>
                <div
                    style={{ margin: "auto", textAlign: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold", color: "#FD6E2B" }}>
                    No items to display for {username}.
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="fire-header">
                <Link to="/home">
                    <span className="bi bi-caret-left-fill back-icon"></span>
                </Link>
                <span className="fire-title">NOTIFICATIONS</span>
            </div>
            <div className="fire-card-container">
                {filtered.map((fire) => (
                    <Link to={`/fire-details/${fire.serialNumber}`} key={fire.serialNumber} className="fire-card-link">
                        <Card
                            className="fire-card"
                            style={{
                                height: "max-content",
                                width: "320px",
                            }}
                        >
                            <Card.Body>
                                <Card.Title>S/N : {fire.serialNumber}</Card.Title>
                                <Card.Text>สถานที่ : {fire.site}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Notifications;
