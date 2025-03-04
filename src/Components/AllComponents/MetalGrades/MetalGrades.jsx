import React from "react";
import "./MetalGrades.css"
import { Row, Col, Image, Table, Input } from "antd";
import CommonHeaderCarousal from "../../CommonUsedComponents/CommonTopCarousalAllPages/CommonHeaderCarousal";
const { Search } = Input;
const MetalGrades = () => {
    const CarousalImages = [

        {
            img: "https://images.unsplash.com/photo-1499359165151-4f7d7c46288c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Your Trusted Partner for Premium Stainless Steel Solutions"
        },
        {
            img: "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D",
            title: "Excellence in Stainless Steel – Crafted for Your Needs"
        },
    ];

    const columns = [
        {
            title: "Designation EN",
            dataIndex: "designationEN",
            sorter: (a, b) => a.designationEN.localeCompare(b.designationEN),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
                <Search
                    placeholder="Search Designation EN"
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onSearch={() => confirm()}
                    enterButton
                />
            ),
        },
        {
            title: "EN Number Designation",
            dataIndex: "enNumberDesignation",
            sorter: (a, b) => a.enNumberDesignation.localeCompare(b.enNumberDesignation),
        },
        {
            title: "GRADE ASTM",
            dataIndex: "gradeASTM",
            sorter: (a, b) => a.gradeASTM.localeCompare(b.gradeASTM),
        },
        {
            title: "C",
            dataIndex: "c",
            sorter: (a, b) => parseFloat(a.c) - parseFloat(b.c),
        },
        {
            title: "Si",
            dataIndex: "si",
            sorter: (a, b) => parseFloat(a.si) - parseFloat(b.si),
        },
        {
            title: "Mn",
            dataIndex: "mn",
            sorter: (a, b) => parseFloat(a.mn) - parseFloat(b.mn),
        },
        {
            title: "P max",
            dataIndex: "pMax",
            sorter: (a, b) => parseFloat(a.pMax) - parseFloat(b.pMax),
        },
        {
            title: "S",
            dataIndex: "s",
            sorter: (a, b) => parseFloat(a.s) - parseFloat(b.s),
        },
        {
            title: "N",
            dataIndex: "n",
            sorter: (a, b) => parseFloat(a.n) - parseFloat(b.n),
        },
        {
            title: "Cr",
            dataIndex: "cr",
            sorter: (a, b) => parseFloat(a.cr) - parseFloat(b.cr),
        },
        {
            title: "Mo",
            dataIndex: "mo",
            sorter: (a, b) => parseFloat(a.mo) - parseFloat(b.mo),
        },
        {
            title: "Ni",
            dataIndex: "ni",
            sorter: (a, b) => parseFloat(a.ni) - parseFloat(b.ni),
        },
        {
            title: "Others",
            dataIndex: "others",
        },
    ];

    const data = [
        { key: "1", designationEN: "X5CrNi18-10", enNumberDesignation: "1.4301", gradeASTM: "304", c: "0.07", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "17.5-19.5", mo: "-", ni: "8.0-10.5", others: "" },
        { key: "2", designationEN: "X2CrNi18-10", enNumberDesignation: "1.4311", gradeASTM: "304 LN", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.12-0.22", cr: "17.5-19.5", mo: "-", ni: "8.5-11.5", others: "" },
        { key: "3", designationEN: "X6CrNi18-10", enNumberDesignation: "1.4948", gradeASTM: "304 H", c: "0.04-0.08", si: "1", mn: "2", pMax: "0.035", s: "0.015", n: "0.11", cr: "17.0-19.0", mo: "-", ni: "8.0-11.0", others: "" },
        { key: "4", designationEN: "X2CrNi19-9", enNumberDesignation: "1.4307", gradeASTM: "304 L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "17.5-19.5", mo: "-", ni: "8.0-10.5", others: "" },
        { key: "5", designationEN: "X2CrNi19-11", enNumberDesignation: "1.4306", gradeASTM: "304 L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "18.0-20.0", mo: "-", ni: "10.0-12.0", others: "" },
        { key: "6", designationEN: "X8CrNi25-21", enNumberDesignation: "1.4845", gradeASTM: "310 S", c: "0.1", si: "1.5", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "24.0-26.0", mo: "-", ni: "19.0-22.0", others: "" },
        { key: "7", designationEN: "X5CrNiMo17-12-2", enNumberDesignation: "1.4401", gradeASTM: "316", c: "0.07", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "16.5-18.5", mo: "2.0-2.5", ni: "10.0-13.0", others: "" },
        { key: "8", designationEN: "X3CrNiMo17-13-3", enNumberDesignation: "1.4436", gradeASTM: "316", c: "0.05", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "16.5-18.5", mo: "2.5-3.0", ni: "10.5-13.0", others: "" },
        { key: "9", designationEN: "", enNumberDesignation: "", gradeASTM: "316N", c: "0.08", si: "0.75", mn: "2", pMax: "0.045", s: "0.03", n: "0.10-0.16", cr: "16.0-18.0", mo: "2.0-3.0", ni: "10.0-14.0", others: "" },
        { key: "9", designationEN: "", enNumberDesignation: "", gradeASTM: "316H", c: "0.04-0.10", si: "0.75", mn: "2", pMax: "0.045", s: "0.03", n: "", cr: "16.0-18.0", mo: "2.0-3.0", ni: "10.0-14.0", others: "" },
    ];


    const columnsMechanical = [
        {
            title: "Grade",
            dataIndex: "grade",
            sorter: (a, b) => a.grade.localeCompare(b.grade),
        },
        {
            title: "Tensile Strength Mpa, (Min)",
            dataIndex: "tensileStrength",
            sorter: (a, b) => parseFloat(a.tensileStrength) - parseFloat(b.tensileStrength),
        },
        {
            title: "Yield Strength Mpa, (Min)",
            dataIndex: "yieldStrength",
            sorter: (a, b) => parseFloat(a.yieldStrength) - parseFloat(b.yieldStrength),
        },
        {
            title: "%Age Elongation in 50mm gauge length min",
            dataIndex: "elongation",
            sorter: (a, b) => parseFloat(a.elongation) - parseFloat(b.elongation),
        },
        {
            title: "Hardness (Max) - BHN",
            dataIndex: "hardnessBHN",
            sorter: (a, b) => parseFloat(a.hardnessBHN) - parseFloat(b.hardnessBHN),
        },
        {
            title: "Hardness (Max) - Rb",
            dataIndex: "hardnessRb",
            sorter: (a, b) => parseFloat(a.hardnessRb) - parseFloat(b.hardnessRb),
        },
    ];

    const dataMechanical = [
        { grade: "301", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
        { grade: "304", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "201", hardnessRb: "92" },
        { grade: "304L", tensileStrength: "485", yieldStrength: "170", elongation: "40", hardnessBHN: "201", hardnessRb: "92" },
        { grade: "310S", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
        { grade: "316", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
        { grade: "316L", tensileStrength: "485", yieldStrength: "170", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
        { grade: "317", tensileStrength: "515", yieldStrength: "205", elongation: "35", hardnessBHN: "217", hardnessRb: "95" },
        { grade: "317L", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
        { grade: "321", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
    ];
    return (
        <>
            <CommonHeaderCarousal slidesData={CarousalImages} heading="Material Grades" tagline="BHAWAL METAL INDUSTRIES" />
            <section>
                <div id="MetalgradesContainer" className="contentInfoContainer">
                    <div>
                        <p data-aos="fade-up"
                            data-aos-duration="1000">At Bhawal Metal Industries, we have strictly focused on stainless steel. Over time, we have continuously integrated our products within stainless steel materials to meet market demands and client requirements, adding more grades to our portfolio. Currently, the company's material offerings can be categorized into three segments.
                        </p>
                    </div>
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter" data-aos="fade-up"
                                data-aos-duration="1200">Austenitic Steel</h2>
                        </div>
                        <div>
                            <Row>

                                <Col lg={12}>
                                    <div className="AboutUsContentContainer">
                                        <div data-aos="fade-right"
                                            data-aos-duration="1400">
                                            <p>Austenitic steels are non-magnetic stainless steels with high chromium and nickel content and low carbon levels. They are the most widely used stainless steel grade, with the most common composition being 18% chromium and 8% nickel, also known as 18/8 steel.</p>
                                            <br />
                                            <p>Austenitic steels are generally classified into two groups: the Chromium-Nickel AISI 300 series and the Chromium-Nickel-Manganese 200 series. Adding 2-3% molybdenum enhances corrosion resistance, often referred to as "acid-proof steel." Grade 304 is the most common type, typically containing 18% chromium and 8% nickel. </p>
                                            <br />
                                            <p>Bhawal Metal Industries works with all materials in this grade, including Bright Round Bars, PSQ Bars, Flat Bars, HR Bars & RCS, Cold Drawn Round/Flat/Square/Hexagon Bars, Forged Components, and Precision Components.</p>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} style={{ width: "100%" }}>
                                    <div data-aos="fade-left"
                                        data-aos-duration="1400">
                                        <div className="AboutUsImageContainer">
                                            <img src="https://img.freepik.com/free-vector/realistic-metallic-iron-tube-equipment-background-construction_1017-51450.jpg?t=st=1741082392~exp=1741085992~hmac=cd624afc5401df2f9435f3aec973815fefe9916a2c7d9b40a4c503c58c8e3b74&w=1480" alt="" loading="lazy" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter">Chemical Properties of Austenitic Steel</h2>
                        </div>
                        <div className="GraphImage">
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </div>
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter">Mechanical Properties of Austenitic Steel</h2>
                        </div>
                        <div className="GraphImage">
                            <Table columns={columnsMechanical} dataSource={dataMechanical} />
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}
export default MetalGrades