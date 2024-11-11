/* eslint-disable react/prop-types */
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import './FireDetails.css';

function FireDetails({ fireInfo, setFireInfo }) {
    const { serialNumber } = useParams(); // ดึง serialNumber จาก URL

    // ฟังก์ชันสำหรับดึงข้อมูลของถังดับเพลิง
    function getFireData() {
        return fireInfo.find((fire) => fire.serialNumber === serialNumber);
    }

    const fireData = getFireData();

    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // อัปเดตทุกๆ วินาที

        return () => clearInterval(timer); // ล้างตัวจับเวลาเมื่อ component ถูก unmount
    }, []);

    const formattedDate = currentDateTime.toLocaleDateString("th-TH");
    const formattedTime = currentDateTime.toLocaleTimeString();

    const handleSave = () => {
        const updatedFireInfo = fireInfo.map(fire => 
            fire.serialNumber === serialNumber 
                ? { ...fire, status: "Confirmed" } 
                : fire
        );
        setFireInfo(updatedFireInfo);
    };

    return (
        <div className="firedetails-container">
            <div className="fire-header">
                <Link to="/home">
                    <span className="bi bi-caret-left-fill back-icon"></span>
                </Link>
                <span className="firedetails-title">{serialNumber}</span>
            </div>
            <div className="fire-body">
                <div className="check-img">
                    <div className="check-text">
                        <i className="bi bi-box-arrow-in-down"></i>&nbsp;
                        อัปโหลดรูปภาพ
                    </div>
                </div>
                <div>
                    <div className="firedetails-info">
                        <div className='firedetails-time'>
                            <div>{formattedDate}</div>
                            <div>{formattedTime}</div>
                        </div>
                        <div>
                            {fireData ? (
                                <span>
                                    S/N : {serialNumber} <br />
                                    สถานที่ : {fireData.site} <br />
                                    วันที่ผลิต : {fireData.mfd || "-"} <br />
                                    วันที่หมดอายุ : {fireData.exp || "-"} <br />
                                    แบรนด์ : {fireData.brand || "-"} <br />
                                </span>
                            ) : (
                                <span>ไม่พบข้อมูลสำหรับ S/N : {serialNumber}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="firedetails-report">
                    <span>รายงาน : <br /></span>
                </div>
                <div className='firedetails-check'>
                    {/*-----------------------------------------------------สภาพของถัง------------------------------------------------------------*/}
                    <span style={{ fontWeight: "500" }}>สภาพของถังดับเพลิง</span>
                    <Form className='firedetails-radio'>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`}>
                                <Form.Check
                                    inline
                                    label="ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="ไม่ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>
                    {/*-----------------------------------------------------ความดันของถังอยู่ในระดับที่เหมาะสม------------------------------------------------------------*/}
                    <span style={{ fontWeight: "500" }}>ความดันของถังดับเพลิง</span>
                    <Form className='firedetails-radio'>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`}>
                                <Form.Check
                                    inline
                                    label="ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="ไม่ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>
                    {/*-----------------------------------------------------หัวฉีดและวาล์วไม่อุดตัน------------------------------------------------------------*/}
                    <span style={{ fontWeight: "500" }}>หัวฉีดและวาล์ว</span>
                    <Form className='firedetails-radio'>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`}>
                                <Form.Check
                                    inline
                                    label="ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="ไม่ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>
                    {/*-----------------------------------------------------สลักนิรภัยและซีลป้องกันไม่ถูกดึงออก------------------------------------------------------------*/}
                    <span style={{ fontWeight: "500" }}>สลักนิรภัยและซีลป้องกัน</span>
                    <Form className='firedetails-radio'>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`}>
                                <Form.Check
                                    inline
                                    label="ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="ไม่ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>
                    {/*-----------------------------------------------------ตำแหน่งการติดตั้งเหมาะสม------------------------------------------------------------*/}
                    <span style={{ fontWeight: "500" }}>ตำแหน่งการติดตั้ง</span>
                    <Form className='firedetails-radio'>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`}>
                                <Form.Check
                                    inline
                                    label="ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="ไม่ผ่าน"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>
                    {/*-----------------------------------------------------อื่นๆ------------------------------------------------------------*/}
                </div>
            </div>
            <div className="firedetails-button-container">
                <Link to="/home">
                    <button
                        className="firedetails-button"
                        onClick={handleSave}
                        >
                        บันทึก
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default FireDetails;
