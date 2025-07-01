import React, { useEffect, useState } from "react";
import "./MetalGrades.css"
import { Row, Col, Image, Table, Input, Button, Card, Collapse, Modal } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, CaretRightOutlined, CloseOutlined } from '@ant-design/icons';
import CommonHeaderCarousal from "../../CommonUsedComponents/CommonTopCarousalAllPages/CommonHeaderCarousal";
import { MdKeyboardArrowRight } from "react-icons/md";
const { Search } = Input;
const { Panel } = Collapse;

const MetalGrades = () => {
    // Modal state for mobile devices
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedModalContent, setSelectedModalContent] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Dynamic Margin Variables - Change these values to adjust spacing throughout the component
    const marginVariables = {
        '--section-margin': '60px',           // Main section spacing
        '--subsection-margin': '40px',        // Subsection spacing  
        '--card-margin': '24px',              // Card spacing
        '--button-margin': '20px',            // Button spacing
        '--small-margin': '15px',             // Small elements spacing
        '--large-margin': '30px',             // Large section breaks
        '--table-margin': '30px',             // Table spacing
        '--property-margin': '32px',          // Property cards spacing
    };

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

    // Steel Categories Data
    const steelCategories = [
        {
            id: 'austenitic',
            title: 'Austenitic Steel',
            subtitle: 'Non-magnetic steels with high chromium and nickel content',
            description: 'The most widely used stainless steel grade, featuring excellent corrosion resistance and formability. Contains 18% chromium and 8% nickel (18/8 steel).',
            icon: '🔬',
            color: '#617E87',
            image: '/Images/Metalgrades.jpeg'
        },
        {
            id: 'martensitic',
            title: 'Martensitic Stainless Steels',
            subtitle: 'Magnetic steels with high strength and hardness',
            description: 'Hardenable stainless steels with high carbon content, offering excellent strength and wear resistance for cutting tools and surgical instruments.',
            icon: '⚔️',
            color: '#840000',
            image: '/Images/Metalgrades.jpeg'
        },
        {
            id: 'duplex',
            title: 'Duplex Stainless Steel',
            subtitle: 'Combination of austenitic and ferritic structures',
            description: 'Superior strength and corrosion resistance, ideal for marine environments, chemical processing, and oil & gas applications.',
            icon: '🔗',
            color: '#617E87',
            image: '/Images/Metalgrades.jpeg'
        },
        {
            id: 'precipitation',
            title: 'PH Stainless Steel',
            subtitle: 'High strength steels with excellent mechanical properties',
            description: 'Combines high strength with good corrosion resistance, perfect for aerospace, nuclear, and high-performance applications.',
            icon: '🚀',
            color: '#840000',
            image: '/Images/Metalgrades.jpeg'
        }
    ];

    // Martensitic Steel Data
    const marteniticData = {
        columns: [
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
        ],
        data: [
            { key: "1", designationEN: "X12Cr13", enNumberDesignation: "1.4006", gradeASTM: "410", c: "0.08-0.15", si: "1", mn: "1.5", pMax: "0.04", s: "0.015", n: "", cr: "11.5-13.5", mo: "", ni: "0.75", others: "" },
            { key: "2", designationEN: "X15Cr13", enNumberDesignation: "1.4024", gradeASTM: "", c: "0.12-0.17", si: "1", mn: "1", pMax: "0.04", s: "0.015", n: "", cr: "12.0-14.0", mo: "", ni: "", others: "" },
            { key: "3", designationEN: "X20Cr13", enNumberDesignation: "1.4021", gradeASTM: "420", c: "0.16-0.25", si: "1", mn: "1.5", pMax: "0.04", s: "0.015", n: "", cr: "12.0-14.0", mo: "", ni: "", others: "" },
            { key: "4", designationEN: "X30Cr13", enNumberDesignation: "1.4028", gradeASTM: "420", c: "0.26-0.35", si: "1", mn: "1.5", pMax: "0.04", s: "0.015", n: "", cr: "12.0-14.0", mo: "", ni: "", others: "" },
            { key: "5", designationEN: "X39Cr13", enNumberDesignation: "1.4031", gradeASTM: "420", c: "0.36-0.42", si: "1", mn: "1", pMax: "0.04", s: "0.015", n: "", cr: "12.5-14.5", mo: "", ni: "", others: "" },
            { key: "6", designationEN: "X46Cr13", enNumberDesignation: "1.4034", gradeASTM: "420", c: "0.43-0.50", si: "1", mn: "1", pMax: "0.04", s: "0.015", n: "", cr: "12.5-14.5", mo: "", ni: "", others: "" },
            { key: "7", designationEN: "X50CrMoV15", enNumberDesignation: "1.4116", gradeASTM: "", c: "0.45-0.55", si: "1", mn: "1", pMax: "0.04", s: "0.015", n: "", cr: "14.0-15.0", mo: "0.5-0.8", ni: "", others: "V: 0.10 to 0.20" },
            { key: "8", designationEN: "X55CrMo14", enNumberDesignation: "1.411", gradeASTM: "", c: "0.48-0.60", si: "1", mn: "1", pMax: "0.04", s: "0.015", n: "", cr: "13.0-15.0", mo: "0.5-0.8", ni: "", others: "V0.15" },
            { key: "9", designationEN: "X38CrMo14", enNumberDesignation: "1.4419", gradeASTM: "", c: "0.36-0.42", si: "1", mn: "1", pMax: "0.04", s: "0.015", n: "", cr: "13.0-14.5", mo: "0.60 to 1.00", ni: "", others: "" },
            { key: "10", designationEN: "X39CrMo17-1", enNumberDesignation: "1.4122", gradeASTM: "", c: "0.33-0.45", si: "1", mn: "1.5", pMax: "0.04", s: "0.015", n: "", cr: "15.5-17.5", mo: "0.80 to 1.30", ni: "1", others: "" },
            { key: "11", designationEN: "X3CrNiMo13-4", enNumberDesignation: "1.4313", gradeASTM: "", c: "0.05", si: "0.7", mn: "1.5", pMax: "0.04", s: "0.015", n: "0.02", cr: "12.0-14.0", mo: "0.30 to 0.70", ni: "3.5-4.5", others: "" },
            { key: "12", designationEN: "X4CrNiMo16-5-1", enNumberDesignation: "1.4418", gradeASTM: "", c: "0.06", si: "0.7", mn: "1.5", pMax: "0.04", s: "0.015", n: "0.02", cr: "15.0-17.0", mo: "0.80 to 1.50", ni: "4.0-6.0", others: "" },
            { key: "13", designationEN: "X1CrNiMoCu12-5-2", enNumberDesignation: "1.4422", gradeASTM: "", c: "0.02", si: "0.5", mn: "2", pMax: "0.04", s: "0.003", n: "0.02", cr: "11.0-13.0", mo: "1.30 to 1.80", ni: "4.0-5.0", others: "Cu:0.20 to 0.80" },
            { key: "14", designationEN: "X12CrS13", enNumberDesignation: "1.4005", gradeASTM: "416", c: "0.15", si: "1", mn: "1.25", pMax: "0.06", s: "0.15", n: "", cr: "12.0-14.0", mo: "", ni: "0.6", others: "" },
            { key: "15", designationEN: "X1CrNiMoCu12-7-3", enNumberDesignation: "1.4423", gradeASTM: "", c: "0.02", si: "0.5", mn: "2", pMax: "0.04", s: "0.003", n: "0.02", cr: "11.0-13.0", mo: "2.30 to 2.80", ni: "6.0-7.0", others: "Cu:0.20 to 0.80" },
            { key: "16", designationEN: "X17CrNi16-2", enNumberDesignation: "1.4057", gradeASTM: "431", c: "0.2", si: "1", mn: "1", pMax: "0.4", s: "0.03", n: "", cr: "16.0-18.0", mo: "", ni: "0.75", others: "" },
        ],
        mechanicalColumns: [
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
                title: "Rb",
                dataIndex: "hardnessRb",
                sorter: (a, b) => parseFloat(a.hardnessRb) - parseFloat(b.hardnessRb),
            },
        ],
        mechanicalData: [
            { grade: "415", tensileStrength: "415", yieldStrength: "205", elongation: "22", hardnessBHN: "183", hardnessRb: "89" },
            { grade: "450", tensileStrength: "450", yieldStrength: "205", elongation: "20", hardnessBHN: "217", hardnessRb: "89" },
            { grade: "700 (max)", tensileStrength: "700", yieldStrength: "-", elongation: "15", hardnessBHN: "217", hardnessRb: "95" },
            { grade: "450", tensileStrength: "450", yieldStrength: "205", elongation: "22", hardnessBHN: "183", hardnessRb: "89" },
            { grade: "515", tensileStrength: "515", yieldStrength: "205", elongation: "30", hardnessBHN: "207", hardnessRb: "89" },
            { grade: "850", tensileStrength: "850", yieldStrength: "635", elongation: "11", hardnessBHN: "302", hardnessRb: "-" },
            { grade: "862", tensileStrength: "862", yieldStrength: "655", elongation: "20", hardnessBHN: "285", hardnessRb: "-" },
        ]
    };

    // Duplex Stainless Steel Data
    const duplexData = {
        columns: [
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
        ],
        data: [
            { key: "1", designationEN: "X2CrNiMoN22-5-3", enNumberDesignation: "1.4462", gradeASTM: "31803", c: "0.03", si: "1", mn: "2", pMax: "0.035", s: "0.015", n: "0.10-0.22", cr: "21.0-23.0", mo: "2.5-3.5", ni: "4.5-6.5", others: "" },
            { key: "2", designationEN: "X2CrNiN23-4", enNumberDesignation: "1.4362", gradeASTM: "2304", c: "0.03", si: "1", mn: "2", pMax: "0.035", s: "0.015", n: "0.05-0.20", cr: "22.0-24.0", mo: "0.1-0.6", ni: "3.5-5.5", others: "Cu:0.10 to 0.60" },
            { key: "3", designationEN: "X2CrNiCuN23-4", enNumberDesignation: "1.4655", gradeASTM: "", c: "0.03", si: "1", mn: "2", pMax: "0.035", s: "0.015", n: "0.05-0.20", cr: "22.0-24.0", mo: "0.1-0.6", ni: "3.5-5.5", others: "Cu:1.00 to 3.00" },
            { key: "4", designationEN: "X2CrNiMoN25-7-4 (S)", enNumberDesignation: "1.441", gradeASTM: "2507", c: "0.03", si: "1", mn: "2", pMax: "0.035", s: "0.015", n: "0.24-0.35", cr: "24.0-26.0", mo: "3.0-4.5", ni: "6.0-8.0", others: "" },
        ],
        mechanicalData2205: [
            { property: "Density", value: "7.83 g/cm3" },
            { property: "Melting Range", value: "1385-1440°C" },
            { property: "Tensile Strength", value: "MPa - 655" },
            { property: "Yield Strength (0.2%Offset)", value: "MPa - 450" },
            { property: "Elongation", value: "25 %" },
        ],
        mechanicalData2507: [
            { property: "Density", value: "7.8 g/cm3" },
            { property: "Melting Range", value: "1350°C" },
            { property: "Tensile Strength", value: "MPa - 799" },
            { property: "Yield Strength (0.2%Offset)", value: "MPa - 551" },
            { property: "Elongation", value: "15 %" },
        ]
    };

    // Austenitic Steel Data (existing data)
    const austeniticData = {
        columns: [
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
        ],
        data: [
            { key: "1", designationEN: "X5CrNi18-10", enNumberDesignation: "1.4301", gradeASTM: "304", c: "0.07", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "17.5-19.5", mo: "-", ni: "8.0-10.5", others: "" },
            { key: "2", designationEN: "X2CrNi18-10", enNumberDesignation: "1.4311", gradeASTM: "304 LN", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.12-0.22", cr: "17.5-19.5", mo: "-", ni: "8.5-11.5", others: "" },
            { key: "3", designationEN: "X6CrNi18-10", enNumberDesignation: "1.4948", gradeASTM: "304 H", c: "0.04-0.08", si: "1", mn: "2", pMax: "0.035", s: "0.015", n: "0.11", cr: "17.0-19.0", mo: "-", ni: "8.0-11.0", others: "" },
            { key: "4", designationEN: "X2CrNi19-9", enNumberDesignation: "1.4307", gradeASTM: "304 L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "17.5-19.5", mo: "-", ni: "8.0-10.5", others: "" },
            { key: "5", designationEN: "X2CrNi19-11", enNumberDesignation: "1.4306", gradeASTM: "304 L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "18.0-20.0", mo: "-", ni: "10.0-12.0", others: "" },
            { key: "6", designationEN: "X8CrNi25-21", enNumberDesignation: "1.4845", gradeASTM: "310 S", c: "0.1", si: "1.5", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "24.0-26.0", mo: "-", ni: "19.0-22.0", others: "" },
            { key: "7", designationEN: "X5CrNiMo17-12-2", enNumberDesignation: "1.4401", gradeASTM: "316", c: "0.07", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "16.5-18.5", mo: "2.0-2.5", ni: "10.0-13.0", others: "" },
            { key: "8", designationEN: "X3CrNiMo17-13-3", enNumberDesignation: "1.4436", gradeASTM: "316", c: "0.05", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "16.5-18.5", mo: "2.5-3.0", ni: "10.5-13.0", others: "" },
            { key: "9", designationEN: "", enNumberDesignation: "", gradeASTM: "316N", c: "0.08", si: "0.75", mn: "2", pMax: "0.045", s: "0.03", n: "0.10-0.16", cr: "16.0-18.0", mo: "2.0-3.0", ni: "10.0-14.0", others: "" },
            { key: "10", designationEN: "", enNumberDesignation: "", gradeASTM: "316H", c: "0.04-0.10", si: "0.75", mn: "2", pMax: "0.045", s: "0.03", n: "", cr: "16.0-18.0", mo: "2.0-3.0", ni: "10.0-14.0", others: "" },
            { key: "11", designationEN: "X3CrNiMo17-12-3", enNumberDesignation: "1.4404", gradeASTM: "316L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "16.5-18.5", mo: "2.0-2.5", ni: "10.0-13.0", others: "" },
            { key: "12", designationEN: "X3CrNiMo18-14-3", enNumberDesignation: "1.4435", gradeASTM: "316L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "17.0-19.0", mo: "2.5-3.0", ni: "12.5-15.0", others: "" },
            { key: "13", designationEN: "X3CrNiMo17-12-3", enNumberDesignation: "1.4432", gradeASTM: "316L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "16.5-18.5", mo: "2.5-3.0", ni: "10.5-13.0", others: "" },
            { key: "14", designationEN: "X3CrNiMoN17-11-2", enNumberDesignation: "1.4406", gradeASTM: "316LN", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.12-0.22", cr: "16.5-18.5", mo: "2.0-2.5", ni: "10.0-12.5", others: "" },
            { key: "15", designationEN: "X3CrNiMoTi17-12-2", enNumberDesignation: "1.4571", gradeASTM: "316Ti", c: "0.08", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "", cr: "16.5-18.5", mo: "2.0-2.5", ni: "10.5-13.5", others: "Ti:5 * CTo 0.70" },
            { key: "16", designationEN: "", enNumberDesignation: "", gradeASTM: "317", c: "0.08", si: "0.75", mn: "2", pMax: "0.045", s: "0.03", n: "0.1", cr: "18.0-20.0", mo: "3.0-4.0", ni: "11.0-15.0", others: "" },
            { key: "17", designationEN: "X2CrNiMo18-15-4", enNumberDesignation: "1.4438", gradeASTM: "317L", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.11", cr: "17.5-19.5", mo: "3.0-4.0", ni: "13.0-16.0", others: "" },
            { key: "18", designationEN: "X2CrNiMoN18-12-4", enNumberDesignation: "1.4434", gradeASTM: "317LN", c: "0.03", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "0.10-0.20", cr: "16.5-19.5", mo: "3.0-4.0", ni: "10.5-14.0", others: "" },
            { key: "19", designationEN: "X2CrNiTi18-10", enNumberDesignation: "1.4541", gradeASTM: "321", c: "0.08", si: "1", mn: "2", pMax: "0.045", s: "0.015", n: "", cr: "17.0-19.0", mo: "", ni: "9.0-12.0", others: "Ti:5 * C to 0.70" },
        ],
        mechanicalColumns: [
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
                title: "Rb",
                dataIndex: "hardnessRb",
                sorter: (a, b) => parseFloat(a.hardnessRb) - parseFloat(b.hardnessRb),
            },
        ],
        mechanicalData: [
            { grade: "304", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "201", hardnessRb: "92" },
            { grade: "304L", tensileStrength: "485", yieldStrength: "170", elongation: "40", hardnessBHN: "201", hardnessRb: "92" },
            { grade: "310S", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
            { grade: "316", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
            { grade: "316L", tensileStrength: "485", yieldStrength: "170", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
            { grade: "317", tensileStrength: "515", yieldStrength: "205", elongation: "35", hardnessBHN: "217", hardnessRb: "95" },
            { grade: "317L", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
            { grade: "321", tensileStrength: "515", yieldStrength: "205", elongation: "40", hardnessBHN: "217", hardnessRb: "95" },
        ]
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle modal opening for mobile
    const handleMobileClick = (contentType, title) => {
        if (isMobile) {
            setSelectedModalContent({ type: contentType, title });
            setModalVisible(true);
            return false; // Prevent accordion expansion
        }
        return true; // Allow accordion expansion on desktop
    };

    // Get modal content based on type
    const getModalContent = () => {
        if (!selectedModalContent) return null;

        switch (selectedModalContent.type) {
            case 'austenitic':
                return renderAusteniticContent();
            case 'martensitic':
                return renderMarteniticContent();
            case 'duplex':
                return renderDuplexContent();
            case 'precipitation':
                return renderPHContent();
            default:
                return null;
        }
    };

    // Helper function to get current page title
    const getCurrentPageTitle = () => {
        return "Material Grades";
    };

    // Render content for each steel category
    const renderAusteniticContent = () => (
        <div>
            <Row gutter={[24, 24]} style={{ marginBottom: "var(--section-margin)" }}>
                <Col lg={12}>
                    <div className="AboutUsContentContainer">
                        <div>
                            <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                Austenitic steels are non-magnetic stainless steels with high chromium and nickel content and low carbon levels. They are the most widely used stainless steel grade, with the most common composition being 18% chromium and 8% nickel, also known as 18/8 steel.
                            </p>
                            <br />
                            <p data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                Austenitic steels are generally classified into two groups: the Chromium-Nickel AISI 300 series and the Chromium-Nickel-Manganese 200 series. Adding 2-3% molybdenum enhances corrosion resistance, often referred to as "acid-proof steel."
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div  data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AusteniticSteelNew.png" alt="Austenitic Steel" loading="lazy" />
                    </div>
                </Col>
            </Row>

            {/* Chemical Properties Table */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                    Chemical Properties
                </h3>
                <div className="GraphImage">
                    <Table columns={austeniticData.columns} dataSource={austeniticData.data} pagination={{ pageSize: 10 }} />
                </div>
            </div>

            {/* Mechanical Properties Table */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                    Mechanical Properties
                </h3>
                <div className="GraphImage">
                    <Table columns={austeniticData.mechanicalColumns} dataSource={austeniticData.mechanicalData} />
                </div>
            </div>

            {/* Key Properties */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                    Key Properties & Applications
                </h3>
                <Row gutter={[24, 24]} style={{ marginTop: "var(--subsection-margin)" }}>
                    <Col lg={12} md={24}>
                        <div className="property-card">
                            <div className="property-header">
                                <h4 className="property-title">Formability</h4>
                            </div>
                            <div className="property-content">
                                <ul className="property-list">
                                    <li>Excellent formability and weldability</li>
                                    <li>Good mechanical strength in welded joints</li>
                                    <li>No preheating or post-weld annealing required</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={24}>
                        <div className="property-card">
                            <div className="property-header">
                                <h4 className="property-title">Temperature Performance</h4>
                            </div>
                            <div className="property-content">
                                <ul className="property-list">
                                    <li>Service temperatures up to 600°C</li>
                                    <li>Excellent cryogenic temperature performance</li>
                                    <li>Maintains ductility at sub-zero temperatures</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

    const renderMarteniticContent = () => (
        <div>
            <Row gutter={[24, 24]} style={{ marginBottom: "var(--section-margin)" }}>
                <Col lg={12}>
                    <div className="AboutUsContentContainer">
                        <div>
                            <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                Martensitic stainless steels are classified as the 400 series. Carbon content ranges from 0.15 to 1.2%, while chromium content ranges from 10.5 to 18%. These steels can be hardened and tempered, similar to carbon steels, and are ferromagnetic.
                            </p>
                            <br />
                            <p data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                The crystal structure is body-centered cubic (BCC), giving them magnetic properties and high strength. They are heat treatable and can achieve high hardness levels through proper quenching and tempering.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AusteniticSteelNew.png" alt="Martensitic Steel" loading="lazy" />
                    </div>
                </Col>
            </Row>

            {/* Chemical Properties Table */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter">Chemical Properties</h3>
                <div className="GraphImage">
                    <Table columns={marteniticData.columns} dataSource={marteniticData.data} pagination={{ pageSize: 10 }} />
                </div>
            </div>

            {/* Mechanical Properties Table */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter">Mechanical Properties</h3>
                <div className="GraphImage">
                    <Table columns={marteniticData.mechanicalColumns} dataSource={marteniticData.mechanicalData} />
                </div>
            </div>

            {/* Applications */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter">Applications</h3>
                <div className="property-card">
                    <div className="property-content">
                        <p style={{ marginBottom: "20px", fontSize: "1.1rem", lineHeight: "1.6" }}>
                            <strong>Used for high-strength applications:</strong> tool steels, cutlery, fasteners, dies, surgical and dental instruments. Also used in petrochemical industry for gas and steam turbine blades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDuplexContent = () => (
        <div>
            <Row gutter={[24, 24]} style={{ marginBottom: "var(--section-margin)" }}>
                <Col lg={12}>
                    <div className="AboutUsContentContainer">
                        <div>
                            <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                <strong>Duplex stainless steel offers excellent resistance to corrosion and very high mechanical strength.</strong> The high corrosion resistance ensures significantly more uptime, while the mechanical strength allows for lighter constructions and more compact system design.
                            </p>
                            <br />
                            <h4 style={{ color: "#617E87", fontSize: "1.2rem", marginBottom: "15px" }}>
                                An alternative to nickel alloys
                            </h4>
                            <p data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                Using our metallurgical expertise, we continue to achieve breakthroughs in duplex stainless steel, adding more specialized, higher performance products.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AusteniticSteelNew.png" alt="Duplex Steel" loading="lazy" />
                    </div>
                </Col>
            </Row>

            {/* Chemical Properties Table */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter">Chemical Properties</h3>
                <div className="GraphImage">
                    <Table columns={duplexData.columns} dataSource={duplexData.data} pagination={{ pageSize: 10 }} />
                </div>
            </div>

            {/* Mechanical Properties */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter">Mechanical Properties</h3>
                <Row gutter={[32, 32]}>
                    <Col lg={12} md={24} style={{ width: "100%" }}>
                        <div className="property-card">
                            <div className="property-header">
                                <h4 className="property-title">Duplex 2205</h4>
                            </div>
                            <div className="property-content">
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#617E87", color: "white" }}>
                                            <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Property</th>
                                            <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Density</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>7.83 g/cm3</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Melting Range</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1385-1440°C</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Tensile Strength</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>655 MPa</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Yield Strength</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>450 MPa</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Elongation</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>25%</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={24} style={{ width: "100%" }}>
                        <div className="property-card">
                            <div className="property-header">
                                <h4 className="property-title">S.S. 2507</h4>
                            </div>
                            <div className="property-content">
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#840000", color: "white" }}>
                                            <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Property</th>
                                            <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Density</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>7.8 g/cm3</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Melting Range</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1350°C</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Tensile Strength</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>799 MPa</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Yield Strength</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>551 MPa</td></tr>
                                        <tr><td style={{ padding: "10px", border: "1px solid #ddd" }}>Elongation</td><td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>15%</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Applications */}
            <div style={{ marginBottom: "var(--section-margin)" }}>
                <h3 className="BigHeading textCenter">Applications</h3>
                <Row gutter={[32, 32]}>
                    <Col lg={12} md={24}>
                        <div className="property-card">
                            <div className="property-content">
                                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                                    <li style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Architecture:</strong> waterfront buildings</li>
                                    <li style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Infrastructure:</strong> bridges, sea walls, piers, tunnels</li>
                                    <li style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Oil and Gas:</strong> flow lines, manifolds, risers, pumps, valves</li>
                                    <li style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Pulp and Paper:</strong> digesters, pressure vessels, liquor tanks</li>
                                    <li style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Chemical engineering:</strong> pressure vessels, heat exchangers</li>
                                    <li style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Water treatment:</strong> desalination plants, storage tanks</li>
                                    <li style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Renewable energy:</strong> biogas tanks</li>
                                    <li style={{ marginBottom: "0px", fontSize: "1rem", lineHeight: "1.5" }}>• <strong>Engineering:</strong> pumps, valves, fittings, springs</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={24}>
                        <div>
                            <img src="/Images/Metalgrades.jpeg" alt="Duplex Applications" loading="lazy" style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

    const renderPHContent = () => (
        <div>
            <div className="PHSteelLayout">
                <div className="PHSteelIntroSection" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1000">
                    <Row gutter={[40, 40]} align="middle"  style={{alignItems:"unset"}}>
                        <Col lg={14} md={24} sm={24} xs={24}>
                            <div className="PHSteelContent">
                                <p >
                                    SAE Type 630 stainless steel (more commonly known as 17-4 PH, or simply 17-4; also known as UNS 17400) is a grade of martensitic precipitation hardened stainless steel. It contains approximately 15–17.5% chromium and 3–5% nickel, as well as 3–5% copper. The name comes from the chemical makeup which is approximately 17% chromium and 4% nickel.
                                </p>
                                <br />
                                <h4 style={{ fontSize: "1.6rem", fontWeight: "600", color: "#617E87", marginBottom: "30px" }}>
                                    Chemical Properties of PH Stainless Steels
                                </h4>
                                
                                {/* 17-4 PH Table */}
                                <div style={{ marginBottom: "30px" }}>
                                    <h5 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#333", marginBottom: "15px" }}>
                                        17-4 ph
                                    </h5>
                                    <div className="ChemicalPropertiesTable" style={{ marginBottom: "20px" }}>
                                        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                                            <thead>
                                                <tr style={{ backgroundColor: "#f5f5f5" }}>
                                                    <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}>Chemical Properties of S.S. 17-4 ph</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                                            <thead>
                                                <tr style={{ backgroundColor: "#f8f8f8" }}>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>C</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Si</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Mn</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>P</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>S</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Ni</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Cr</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Cu</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Nb+Ta</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Fe</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.07%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>1%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>1%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.04%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.03%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>3-5%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>15-17.5%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>3-5%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.45%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Balance</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 15-5 PH Table */}
                                <div style={{ marginBottom: "30px" }}>
                                    <h5 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#333", marginBottom: "15px" }}>
                                        15-5 ph
                                    </h5>
                                    <div className="ChemicalPropertiesTable">
                                        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                                            <thead>
                                                <tr style={{ backgroundColor: "#f5f5f5" }}>
                                                    <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}>Chemical Properties of S.S. 17-4 ph</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                                            <thead>
                                                <tr style={{ backgroundColor: "#f8f8f8" }}>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>C</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Si</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Mn</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>P</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>S</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Ni</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Cr</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Cu</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Nb+Ta</th>
                                                    <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Fe</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.07%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>1%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>1%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.04%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.03%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>3.5-5.5%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>14-15.5%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>4.5%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>0.45%</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Balance</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={10} md={24} sm={24} xs={24}>
                            <div className="PHSteelImage">
                                <Image
                                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AusteniticSteelNew.png"
                                    alt="PH Stainless Steel Rods"
                                    loading="lazy"
                                    style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "16px" }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Mechanical Properties Section */}
                <div className="MechanicalPropertiesSection" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1000">
                    <div style={{ marginTop: "50px" }}>
                        <h4 style={{ fontSize: "1.6rem", fontWeight: "600", color: "#617E87", marginBottom: "30px" }}>
                            Mechanical Properties of PH Stainless Steels
                        </h4>
                        
                        <div className="MechanicalPropertiesTable">
                            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", fontSize: "0.9rem" }}>
                                <thead>
                                    <tr style={{ backgroundColor: "#f5f5f5" }}>
                                        <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontWeight: "600" }}>Material</th>
                                        <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontWeight: "600" }}>Condition</th>
                                        <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontWeight: "600" }}>Ultimate<br/>Tensile<br/>Strength<br/>(ksi)</th>
                                        <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontWeight: "600" }}>0.2 %<br/>Yield<br/>Strength<br/>(ksi)</th>
                                        <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontWeight: "600" }}>Elongation<br/>% in 2D</th>
                                        <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontWeight: "600" }}>%<br/>Reduction<br/>of Area</th>
                                        <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontWeight: "600" }}>Rockwell C<br/>Hardness</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Alloy 15-5 PH<br/>Bar AMS 5659</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Cond A</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>–</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>–</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>–</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>–</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>363 HB max</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Alloy 15-5 PH<br/>Bar AMS 5659</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>H900</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>190</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>170</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>10</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>35</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>388-444</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Alloy 15-5 PH<br/>Bar AMS 5659</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>H925</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>170</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>155</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>10</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>38</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>375-429</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Alloy 15-5 PH<br/>Bar AMS 5659</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>H1025</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>155</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>145</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>12</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>45</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>331-401</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Alloy 15-5 PH<br/>Bar AMS 5659</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>H1075</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>145</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>125</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>13</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>45</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>311-375</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Alloy 15-5 PH<br/>Bar AMS 5659</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>H1100</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>140</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>115</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>14</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>45</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>302-363</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Alloy 15-5 PH<br/>Bar AMS 5659</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>H1150</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>135</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>105</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>16</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>50</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>277-352</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Properties and Applications Section */}
                <div className="PropertiesApplicationsSection" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1000">
                    <div style={{ marginTop: "50px" }}>
                        <Row gutter={[40, 40]}>
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="PropertiesCard" style={{
                                    backgroundColor: "#f8f9fa",
                                    padding: "30px",
                                    borderRadius: "16px",
                                    // height: "100%",
                                    border: "1px solid #e9ecef"
                                }}>
                                    <h4 >
                                        Properties-17-4 PH Stainless Steel
                                    </h4>
                                    <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
                                        <div style={{ marginBottom: "20px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                            <span style={{ color: "#617E87", fontSize: "1.2rem", marginTop: "2px" }}>•</span>
                                            <span>
                                                17-4 can be heat treated to high levels of strength and hardness, and features corrosion resistance and machinability comparable to austenitic 304 stainless. Being martensitic, 17-4 is magnetic. 17-4 is capable of being hardened up to approximately 44 Rc when heat treated to condition H900.
                                            </span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                            <span style={{ color: "#617E87", fontSize: "1.2rem", marginTop: "2px" }}>•</span>
                                            <span>
                                                Over aging (aging beyond the peak strength condition) improves resistance to stress corrosion cracking.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="ApplicationCard" style={{
                                    backgroundColor: "#f8f9fa",
                                    padding: "30px",
                                    borderRadius: "16px",
                                    // height: "100%",
                                    border: "1px solid #e9ecef"
                                }}>
                                    <h4 >
                                        Application
                                    </h4>
                                    <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
                                        <p>
                                            Uses for 17-4 stainless steel include components which require high hardness and/or corrosion resistance at temperatures of up to 600 °F (316 °C). Specific applications for 17-4 include the petroleum and chemical industries, as well as use in aircraft parts.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <CommonHeaderCarousal
                slidesData={CarousalImages}
                heading={getCurrentPageTitle()}
                tagline="BHAWAL METAL INDUSTRIES"
                pageLink={getCurrentPageTitle()}
            />
            <section style={marginVariables}>
                <div id="MetalgradesContainer">
                    {/* Introduction */}
                    <div className="containerGap">
                        <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                            At Bhawal Metal Industries, we have strictly focused on stainless steel. Over time, we have continuously integrated our products within stainless steel materials to meet market demands and client requirements, adding more grades to our portfolio. Currently, the company's material offerings can be categorized into four main segments.
                        </p>
                    </div>

                    <div className="containerGap">
                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                            Our Stainless Steel Categories
                        </h2>
                        <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                            Explore our comprehensive range of stainless steel grades designed for various industrial applications
                        </p>
                    </div>

                    {/* Accordion Layout */}
                    <div style={{ marginTop: "var(--section-margin)" }}>
                        <Collapse
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            ghost
                            size="large"
                            data-aos="blur-to-clear"
                            data-aos-delay="400"
                            data-aos-duration="1200"
                            onChange={(activeKeys) => {
                                // Handle mobile modal opening
                                if (isMobile && activeKeys && activeKeys.length > 0) {
                                    const key = activeKeys[activeKeys.length - 1];
                                    let title = '';
                                    switch (key) {
                                        case 'austenitic':
                                            title = 'Austenitic Steel';
                                            break;
                                        case 'martensitic':
                                            title = 'Martensitic Stainless Steels';
                                            break;
                                        case 'duplex':
                                            title = 'Duplex Stainless Steel';
                                            break;
                                        case 'precipitation':
                                            title = 'PH Stainless Steel';
                                            break;
                                    }
                                    handleMobileClick(key, title);
                                }
                            }}
                        >
                            {/* Austenitic Steel Panel */}
                            <Panel
                                header={
                                    <div className="PanelRow">
                                        <div style={{
                                            fontSize: "2rem",
                                            minWidth: "60px",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                            🔬
                                        </div>
                                        <div>
                                            <h3 style={{
                                                margin: "0",
                                                color: "#617E87",
                                                fontSize: isMobile ? "1.2rem" : "1.5rem",
                                                fontWeight: "600",
                                                
                                            }}>
                                                Austenitic Steel
                                            </h3>
                                            <p style={{
                                                margin: "5px 0 0 0",
                                                color: "#666",
                                                fontSize: isMobile ? "0.9rem" : "1rem",
                                                
                                            }}>
                                                Non-magnetic steels with high chromium and nickel content
                                            </p>
                                        </div>
                                        {isMobile && (
                                            <div style={{
                                                // marginLeft: "auto",
                                                color: "#617E87",
                                                fontSize: "0.8rem",
                                                fontWeight: "500"
                                            }}>
                                                View More
                                            </div>
                                        )}
                                    </div>
                                }
                                key="austenitic"
                                style={{
                                    marginBottom: "16px",
                                    border: "1px solid #e8e8e8",
                                    borderRadius: "8px",
                                    overflow: "hidden"
                                }}
                                showArrow={!isMobile}
                            >
                                {!isMobile && renderAusteniticContent()}
                            </Panel>

                            {/* Martensitic Steel Panel */}
                            <Panel
                                header={
                                    <div className="PanelRow">
                                        <div style={{
                                            fontSize: "2rem",
                                            minWidth: "60px",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                            ⚔️
                                        </div>
                                        <div>
                                            <h3 style={{
                                                margin: "0",
                                                color: "#840000",
                                                fontSize: isMobile ? "1.2rem" : "1.5rem",
                                                fontWeight: "600",
                                                
                                            }}>
                                                Martensitic Stainless Steels
                                            </h3>
                                            <p style={{
                                                margin: "5px 0 0 0",
                                                color: "#666",
                                                fontSize: isMobile ? "0.9rem" : "1rem",
                                                
                                            }}>
                                                Magnetic steels with high strength and hardness
                                            </p>
                                        </div>
                                        {isMobile && (
                                            <div style={{
                                                // marginLeft: "auto",
                                                color: "#840000",
                                                fontSize: "0.8rem",
                                                fontWeight: "500"
                                            }}>
                                                View More
                                            </div>
                                        )}
                                    </div>
                                }
                                key="martensitic"
                                style={{
                                    marginBottom: "16px",
                                    border: "1px solid #e8e8e8",
                                    borderRadius: "8px",
                                    overflow: "hidden"
                                }}
                                showArrow={!isMobile}
                            >
                                {!isMobile && renderMarteniticContent()}
                            </Panel>

                            {/* Duplex Steel Panel */}
                            <Panel
                                header={
                                    <div className="PanelRow">
                                        <div style={{
                                            fontSize: "2rem",
                                            minWidth: "60px",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                            🔗
                                        </div>
                                        <div>
                                            <h3 style={{
                                                margin: "0",
                                                color: "#617E87",
                                                fontSize: isMobile ? "1.2rem" : "1.5rem",
                                                fontWeight: "600",
                                               
                                            }}>
                                                Duplex Stainless Steel
                                            </h3>
                                            <p style={{
                                                margin: "5px 0 0 0",
                                                color: "#666",
                                                fontSize: isMobile ? "0.9rem" : "1rem",
                                               
                                            }}>
                                                Combination of austenitic and ferritic structures
                                            </p>
                                        </div>
                                        {isMobile && (
                                            <div style={{
                                                // marginLeft: "auto",
                                                color: "#617E87",
                                                fontSize: "0.8rem",
                                                fontWeight: "500"
                                            }}>
                                                View More
                                            </div>
                                        )}
                                    </div>
                                }
                                key="duplex"
                                style={{
                                    marginBottom: "16px",
                                    border: "1px solid #e8e8e8",
                                    borderRadius: "8px",
                                    overflow: "hidden"
                                }}
                                showArrow={!isMobile}
                            >
                                {!isMobile && renderDuplexContent()}
                            </Panel>

                            {/* PH Steel Panel */}
                            <Panel
                                header={
                                    <div className="PanelRow">
                                        <div style={{
                                            fontSize: "2rem",
                                            minWidth: "60px",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                            🚀
                                        </div>
                                        <div>
                                            <h3 style={{
                                                margin: "0",
                                                color: "#840000",
                                                fontSize: isMobile ? "1.2rem" : "1.5rem",
                                                fontWeight: "600",
                                                
                                            }}>
                                                PH Stainless Steel
                                            </h3>
                                            <p style={{
                                                margin: "5px 0 0 0",
                                                color: "#666",
                                                fontSize: isMobile ? "0.9rem" : "1rem",
                                                
                                            }}>
                                                High strength steels with excellent mechanical properties
                                            </p>
                                        </div>
                                        {isMobile && (
                                            <div style={{
                                                // marginLeft: "auto",
                                                color: "#840000",
                                                fontSize: "0.8rem",
                                                fontWeight: "500"
                                            }}>
                                                View More
                                            </div>
                                        )}
                                    </div>
                                }
                                key="precipitation"
                                style={{
                                    marginBottom: "16px",
                                    border: "1px solid #e8e8e8",
                                    borderRadius: "8px",
                                    overflow: "hidden"
                                }}
                                showArrow={!isMobile}
                            >
                                {!isMobile && renderPHContent()}
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </section>

            {/* Mobile Modal */}
            <Modal
                title={
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333"
                    }}>
                        {selectedModalContent?.type === 'austenitic' && '🔬'}
                        {selectedModalContent?.type === 'martensitic' && '⚔️'}
                        {selectedModalContent?.type === 'duplex' && '🔗'}
                        {selectedModalContent?.type === 'precipitation' && '🚀'}
                        {selectedModalContent?.title}
                    </div>
                }
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
                width="95vw"
                style={{
                    top: 20,
                    maxWidth: "100%",
                    margin: "0 auto",
                    padding: "0px"
                }}
                bodyStyle={{
                    padding: "00px 0px",
                    maxHeight: "80vh",
                    overflowY: "auto"
                }}
                closeIcon={<CloseOutlined style={{ fontSize: "18px", color: "#666" }} />}
                maskClosable={true}
                destroyOnClose={true}
                className="modal-container"
            >
                <div style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6"
                }}>
                    {getModalContent()}
                </div>
            </Modal>
        </>
    );
};

export default MetalGrades;

