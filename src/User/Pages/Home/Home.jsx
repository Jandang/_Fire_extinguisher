/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import "./Home.css";

function Home({ fireInfo }) {
    // ตรวจสอบว่าข้อมูลมีอยู่
    if (!Array.isArray(fireInfo) || fireInfo.length === 0) {
        return <div>No data available</div>;
    }

    // สร้าง state สำหรับเก็บคำค้นหาและผลลัพธ์ที่กรอง
    const [searchValue, setSearchValue] = useState("");
    const [filterInfo, setFilterInfo] = useState(fireInfo.filter((fire) => fire.status === "Assign"));

    // ฟังก์ชันค้นหา
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        // กรองข้อมูลตามคำค้นหา
        const filtered = fireInfo.filter((fire) =>
            fire.serialNumber.toLowerCase().includes(value.toLowerCase()) ||
            fire.site.toLowerCase().includes(value.toLowerCase())
        );

        setFilterInfo(filtered);
    };

    return (
        <div className="home-container">
            <div className="home-header">
                <div>
                    <img src="/img/logo1.svg" alt="" className="logo" />
                </div>
                <span>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleSearch}
                    />
                </span>
                <Link to="/notifications">
                    <span className="bi bi-bell-fill bell-icon"></span>
                </Link>
            </div>
            <div className="home-body">
                {filterInfo.length > 0 ? (
                    filterInfo.map((fire) => (
                        <Link to={`/fire-details/${fire.serialNumber}`} key={fire.serialNumber} className="fire-card-link">
                            <Card
                                key={fire.serialNumber}
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

                    ))
                ) : (
                    <div>No results found</div>
                )}
            </div>
        </div>
    );
}

export default Home;
