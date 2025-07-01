import React, { useEffect, useState } from "react";
import "./MetalGrades.css"
import { Row, Col, Image, Table, Input, Button, Card } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import CommonHeaderCarousal from "../../CommonUsedComponents/CommonTopCarousalAllPages/CommonHeaderCarousal";
import { MdKeyboardArrowRight } from "react-icons/md";
const { Search } = Input;

const MetalGrades = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

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
            { grade: "410S", tensileStrength: "415", yieldStrength: "205", elongation: "22", hardnessBHN: "183", hardnessRb: "89" },
            { grade: "410", tensileStrength: "450", yieldStrength: "205", elongation: "20", hardnessBHN: "217", hardnessRb: "89" },
            { grade: "420", tensileStrength: "700 (max)", yieldStrength: "-", elongation: "15", hardnessBHN: "217", hardnessRb: "95" },
            { grade: "430", tensileStrength: "450", yieldStrength: "205", elongation: "22", hardnessBHN: "183", hardnessRb: "89" },
            { grade: "416", tensileStrength: "515", yieldStrength: "205", elongation: "30", hardnessBHN: "207", hardnessRb: "89" },
            { grade: "431 condition T", tensileStrength: "850", yieldStrength: "635", elongation: "11", hardnessBHN: "302", hardnessRb: "-" },
            { grade: "431", tensileStrength: "862", yieldStrength: "655", elongation: "20", hardnessBHN: "285", hardnessRb: "-" },
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
    }, [selectedCategory]);

    // Helper function to get current page title
    const getCurrentPageTitle = () => {
        if (!selectedCategory) return "Material Grades";
        const category = steelCategories.find(cat => cat.id === selectedCategory);
        return category ? category.title : "Material Grades";
    };

    // Main Categories Overview
    const renderCategoriesOverview = () => (
        <section style={marginVariables}>
            <div id="MetalgradesContainer" >
                <div>
                    <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                        At Bhawal Metal Industries, we have strictly focused on stainless steel. Over time, we have continuously integrated our products within stainless steel materials to meet market demands and client requirements, adding more grades to our portfolio. Currently, the company's material offerings can be categorized into five main segments.
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

                <Row gutter={[24, 24]} style={{ marginTop: "var(--subsection-margin)" }}>
                    {steelCategories.map((category, index) => (
                        <Col lg={8} md={12} sm={24} xs={24} key={category.id}>
                            <div
                                className="category-card"
                                data-aos="blur-to-clear"
                                data-aos-delay={400 + index * 100}
                                data-aos-duration="1200"
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <div className="category-content">
                                    <h3 className="category-title">
                                        {category.title}
                                    </h3>
                                    <br />
                                    <p className="category-subtitle">
                                        {category.subtitle}
                                    </p>
                                    <p className="category-description">
                                        {category.description}
                                    </p>
                                    <div className="AnimatedbtnContainer">
                                        <button className="ColourButton" style={{ width: "100%", justifyContent: "center" }}>Read More <MdKeyboardArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Quick Access Section */}
                {/* <div style={{ marginTop: "var(--section-margin)" }}>
                    <div className="containerGap">
                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                            Why Choose Bhawal Metal Industries?
                        </h2>
                    </div>
                    <Row gutter={[32, 32]} style={{ marginTop: "var(--subsection-margin)" }}>
                        <Col lg={8} md={24} sm={24} xs={24}>
                            <div className="feature-card" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                <h4>Premium Quality</h4>
                                <p>All our stainless steel grades meet international standards and undergo rigorous quality testing.</p>
                                <div className="AnimatedbtnContainer" style={{ marginTop: "var(--button-margin)" }}>
                                    <button className="ColourButton" style={{ width: "100%", justifyContent: "center" }}>
                                        Quality Assurance <MdKeyboardArrowRight />
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={24} sm={24} xs={24}>
                            <div className="feature-card" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                <h4>Expert Guidance</h4>
                                <p>Our metallurgists provide technical support to help you choose the right grade for your application.</p>
                                <div className="AnimatedbtnContainer" style={{ marginTop: "var(--button-margin)" }}>
                                    <button className="ColourButton" style={{ width: "100%", justifyContent: "center" }}>
                                        Get Expert Help <MdKeyboardArrowRight />
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={24} sm={24} xs={24}>
                            <div className="feature-card" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">
                                <h4>Custom Solutions</h4>
                                <p>We offer customized solutions including precision components and specialized processing.</p>
                                <div className="AnimatedbtnContainer" style={{ marginTop: "var(--button-margin)" }}>
                                    <button className="ColourButton" style={{ width: "100%", justifyContent: "center" }}>
                                        Request Custom Quote <MdKeyboardArrowRight />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div> */}
            </div>
        </section>
    );

    // Render Other Categories Section
    const renderOtherCategories = (currentCategoryId) => {
        const otherCategories = steelCategories.filter(cat => cat.id !== currentCategoryId);

        return (
            <div style={{ marginTop: "var(--large-margin)", paddingTop: "var(--section-margin)", ...marginVariables }}>
                <div className="containerGap">
                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                        Explore Other Steel Categories
                    </h2>
                    <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                        Discover more specialized stainless steel solutions for your industrial needs
                    </p>
                </div>

                <Row gutter={[24, 24]} style={{ marginTop: "var(--subsection-margin)" }}>
                    {otherCategories.map((category, index) => (
                        <Col lg={6} md={12} sm={24} xs={24} key={category.id}>
                            <div
                                className="category-card"
                                data-aos="blur-to-clear"
                                data-aos-delay={300 + index * 100}
                                data-aos-duration="1200"
                                onClick={() => setSelectedCategory(category.id)}
                                style={{ minHeight: "320px" }}
                            >
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <div className="category-content">
                                    <h3 className="category-title">
                                        {category.title}
                                    </h3>
                                    <p className="category-subtitle">
                                        {category.subtitle}
                                    </p>
                                    <p className="category-description">
                                        {category.description}
                                    </p>
                                    <div className="AnimatedbtnContainer">
                                        <button className="ColourButton" style={{ width: "100%", justifyContent: "center" }}>
                                            Learn More <MdKeyboardArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    };

    // Detailed Category View - Single Dynamic Component
    const renderCategoryDetail = (categoryId) => {
        const category = steelCategories.find(cat => cat.id === categoryId);

        return (
            <section style={marginVariables}>
                <div id="MetalgradesContainer" className="contentInfoContainer" style={{ paddingBottom: "0px" }}>
                    {/* Back Button */}
                    <div style={{ marginBottom: "var(--button-margin)" }}>
                        <div className="AnimatedbtnContainer">
                            <button
                                className="ColourButton"
                                onClick={() => setSelectedCategory(null)}
                                style={{ justifyContent: "center", display: "flex", alignItems: "center", gap: "8px" }}
                            >
                                <ArrowLeftOutlined /> Back to All Categories
                            </button>
                        </div>
                    </div>

                    {/* Category Header */}
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                {category?.title}
                            </h2>
                            <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200" style={{ fontSize: "1.1rem", color: "#617E87", fontStyle: "italic" }}>
                                {category?.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Dynamic Content Based on Category */}
                    {categoryId === 'austenitic' ? (
                        // Austenitic Steel - Full Content
                        <>
                            <div>
                                <Row>
                                    <Col lg={12}>
                                        <div className="AboutUsContentContainer">
                                            <div>
                                                <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                                    Austenitic steels are non-magnetic stainless steels with high chromium and nickel content and low carbon levels. They are the most widely used stainless steel grade, with the most common composition being 18% chromium and 8% nickel, also known as 18/8 steel.
                                                </p>
                                                <br />
                                                <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                                    Austenitic steels are generally classified into two groups: the Chromium-Nickel AISI 300 series and the Chromium-Nickel-Manganese 200 series. Adding 2-3% molybdenum enhances corrosion resistance, often referred to as "acid-proof steel." Grade 304 is the most common type, typically containing 18% chromium and 8% nickel.
                                                </p>
                                                <br />
                                                <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                                    Bhawal Metal Industries works with all materials in this grade, including Bright Round Bars, PSQ Bars, Flat Bars, HR Bars & RCS, Cold Drawn Round/Flat/Square/Hexagon Bars, Forged Components, and Precision Components.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} style={{ width: "100%" }}>
                                        <div>
                                            <div className="AboutUsImageContainer" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                                <img src="/Images/Metalgrades.jpeg" alt="" loading="lazy" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Chemical Properties Table */}
                            <div>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">
                                        Chemical Properties of Austenitic Steel
                                    </h2>
                                </div>
                                <div className="GraphImage">
                                    <Table columns={austeniticData.columns} dataSource={austeniticData.data} pagination={{ pageSize: 20 }} data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200" />
                                </div>
                            </div>

                            {/* Mechanical Properties Table */}
                            <div>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200">
                                        Mechanical Properties of Austenitic Steel
                                    </h2>
                                </div>
                                <div className="GraphImage">
                                    <Table columns={austeniticData.mechanicalColumns} dataSource={austeniticData.mechanicalData} data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200" />
                                </div>
                            </div>

                            {/* Key Properties & Applications Section */}
                            <div>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                        Key Properties & Applications
                                    </h2>
                                    <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                        Understanding the fundamental characteristics that make austenitic stainless steel the preferred choice across industries
                                    </p>
                                </div>

                                <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
                                    {/* Formability Card */}
                                    <Col lg={12} md={24} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                            <div className="property-header">
                                                <h3 className="property-title">Formability</h3>
                                            </div>
                                            <div className="property-content">
                                                <ul className="property-list">
                                                    <li>Austenitic stainless steels are generally exhibits excellent formability.</li>
                                                    <li>In welded joints, good mechanical strength is developed without the necessity of preheating or post-weld annealing. It is advised to use heat treatment process or alternative selection of low carbon grades to prevent corrosion in the weld area.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Strength at Temperature Card */}
                                    <Col lg={12} md={24} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">
                                            <div className="property-header">
                                                <h3 className="property-title">Strength at Temperature</h3>
                                            </div>
                                            <div className="property-content">
                                                <ul className="property-list">
                                                    <li>These steels are well suited to both higher service temperatures of around 600°C – or even higher if scaling resistance is the only consideration and extremely low cryogenic temperatures, depending on the load and permissible distortion.</li>
                                                    <li>At sub-zero temperatures, some austenitic steel grades retain good ductility and impact strength. These alloys also maintain tensile and creep strength at elevated temperatures.</li>
                                                    <li>They are used for the storage of liquefied gases at cryogenic temperatures and for heat exchangers & pollution control equipment at high temperatures.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <br /><br /><br />
                                <br />

                                {/* Application by Grade Section */}
                                <div style={{ marginTop: "60px" }}>
                                    <div className="containerGap">
                                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200">
                                            Application by Grade
                                        </h2>
                                        <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="600" data-aos-duration="1200">
                                            Specialized applications for different stainless steel grades across various industries
                                        </p>
                                    </div>

                                    <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
                                        {/* 304 and 304L Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="700" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">304 AND 304L</h4>
                                                    <p className="grade-subtitle">(Standard Grade)</p>
                                                </div>
                                                <div className="grade-content">
                                                    <p>Used for Tanks, Storage vessels and pipes for corrosive liquids, mining, chemical, cryogenic, food and beverage, Cutlery, Architecture, Sinks, food processing, domestic sinks and tubs, pharmaceutical equipment and deep drawing applications</p>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* 310 Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="800" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">310 (High Chrome and Nickel Grades)</h4>
                                                </div>
                                                <div className="grade-content">
                                                    <p>Furnace parts and equipment, kiln, and catalytic converter components. Also resistant to temperature 900°C to 1100°C.</p>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* 316 and 316L Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="900" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">316 AND 316L (High Moly Content Grades)</h4>
                                                </div>
                                                <div className="grade-content">
                                                    <p>Used where higher corrosion resistance is required, i.e. marine equipment, Chemical storage tanks, pressure vessels, and piping.</p>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* 321 and 316Ti Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="1000" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">321 AND 316Ti ("Stabilized" Grades)</h4>
                                                </div>
                                                <div className="grade-content">
                                                    <p>A titanium stabilised version of 316 is used where high temperature strength & good resistance to intergranular corrosion is required. Also used for superheaters, compensators & expansion bellows.</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </>
                    ) : categoryId === 'martensitic' ? (
                        // Martensitic Steel - Full Content
                        <>
                            <div>
                                <Row>
                                    <Col lg={12}>
                                        <div className="AboutUsContentContainer">
                                            <div>
                                                <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                                    Martensitic stainless steels are a class of stainless steels that are classified as the 400 series. The carbon content of martensitic stainless steels ranges from 0.15 to 1.2%, while the chromium content ranges from 10.5 to 18%. These steels can be hardened and tempered, similar to carbon steels, and are ferromagnetic.
                                                </p>
                                                <br />
                                                <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                                    The crystal structure of martensitic stainless steels is body-centered cubic (BCC), which gives them their characteristic magnetic properties and high strength. They are heat treatable and can achieve high hardness levels through proper quenching and tempering processes.
                                                </p>
                                                <br />
                                                <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                                    Due to their high carbon content, welding of martensitic stainless steels requires special consideration to prevent cracking. Preheating and post-weld heat treatment are often necessary to achieve desired properties and prevent defects.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} style={{ width: "100%" }}>
                                        <div>
                                            <div className="AboutUsImageContainer" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                                <img src="/Images/Metalgrades.jpeg" alt="" loading="lazy" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Chemical Properties Table */}
                            <div>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">
                                        Chemical Properties of Martensitic Steel
                                    </h2>
                                </div>
                                <div className="GraphImage">
                                    <Table columns={marteniticData.columns} dataSource={marteniticData.data} pagination={{ pageSize: 20 }} data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200" />
                                </div>
                            </div>

                            {/* Mechanical Properties Table */}
                            <div>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200">
                                        Mechanical Properties of Martensitic Steel
                                    </h2>
                                </div>
                                <div className="GraphImage">
                                    <Table columns={marteniticData.mechanicalColumns} dataSource={marteniticData.mechanicalData} data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200" />
                                </div>
                            </div>

                            {/* Key Properties & Applications Section */}
                            <div>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                        Key Properties & Applications
                                    </h2>
                                    <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                        Understanding the fundamental characteristics that make martensitic stainless steel ideal for high-strength applications
                                    </p>
                                </div>

                                <Row gutter={[24, 24]} style={{ marginTop: "var(--subsection-margin)" }}>
                                    {/* Formability Card */}
                                    <Col lg={8} md={12} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                            <div className="property-header">
                                                <h3 className="property-title">Formability</h3>
                                            </div>
                                            <div className="property-content">
                                                <ul className="property-list">
                                                    <li>Martensitic grades are moderately cold formed due to high carbon content.</li>
                                                    <li>The strength obtained by heat treatment depends on the carbon content of the steels.</li>
                                                    <li>Increasing the carbon content increases the strength and hardness potential but decreases ductility and toughness.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Weldability Card */}
                                    <Col lg={8} md={12} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">
                                            <div className="property-header">
                                                <h3 className="property-title">Weldability</h3>
                                            </div>
                                            <div className="property-content">
                                                <ul className="property-list">
                                                    <li>It offers very limited weldability due to its hardenability.</li>
                                                    <li>Special consideration may be required to prevent cracking by preheating and post weld heat treatment.</li>
                                                    <li>Proper procedures needed to achieve desired characteristics/properties.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Corrosion Resistance Card */}
                                    <Col lg={8} md={12} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200">
                                            <div className="property-header">
                                                <h3 className="property-title">Corrosion Resistance</h3>
                                            </div>
                                            <div className="property-content">
                                                <ul className="property-list">
                                                    <li>Martensitic grades generally exhibits moderate corrosion resistance due to high carbon content.</li>
                                                    <li>Suitable for applications where material is subjected to both corrosion and wear.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <br /><br /><br />
                                {/* Applications Section */}
                                <div style={{ marginTop: "var(--section-margin)" }}>
                                    <div className="containerGap">
                                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                            Applications of Martensitic Stainless Steels
                                        </h2>
                                    </div>

                                    <Row gutter={[32, 32]} style={{ marginTop: "var(--subsection-margin)" }}>
                                        <Col lg={24} md={24} sm={24} xs={24}>
                                            <div className="property-card" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                                <div className="property-content">
                                                    <p style={{ marginBottom: "20px", fontSize: "1.1rem", lineHeight: "1.6" }}>
                                                        <strong>Martensitic stainless steels are used where the application requires good tensile strength, creep, and fatigue strength properties.</strong> Due to their high strength in combination with some corrosion resistance, martensitic steels are suitable for applications where the material is subjected to both corrosion and wear.
                                                    </p>
                                                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px" }}>
                                                        Martensitic steels with high carbon content are often used for <strong>tool steels, cutlery, fasteners, dies, surgical and dental instruments.</strong> They are also used in petrochemical industry for <strong>gas and steam turbine blades.</strong>
                                                    </p>
                                                    {/* <div className="AnimatedbtnContainer" style={{ textAlign: "center" }}>
                                                        <button className="ColourButton" style={{ justifyContent: "center", display: "flex", alignItems: "center", gap: "8px", margin: "0 auto" }}>
                                                            Get Quote for Martensitic Steel <MdKeyboardArrowRight />
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <br /><br /><br />
                                <br />

                                {/* Application by Grade Section */}
                                <div style={{ marginTop: "var(--section-margin)" }}>
                                    <div className="containerGap">
                                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200">
                                            Application by Grade
                                        </h2>
                                        <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="600" data-aos-duration="1200">
                                            Specialized applications for different martensitic stainless steel grades across various industries
                                        </p>
                                    </div>

                                    <Row gutter={[24, 24]} style={{ marginTop: "var(--subsection-margin)" }}>
                                        {/* 410 Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="700" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">410</h4>
                                                    <p className="grade-subtitle">(Basic Martensitic Grade)</p>
                                                </div>
                                                <div className="grade-content">
                                                    <p>Used for cutlery, surgical instruments, valve parts, pump shafts, bolts, screws, and general engineering applications requiring moderate corrosion resistance and high strength.</p>
                                                    <div className="AnimatedbtnContainer" style={{ marginTop: "var(--small-margin)" }}>
                                                        <button className="ColourButton" style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem", padding: "8px 16px" }}>
                                                            Grade 410 Quote <MdKeyboardArrowRight />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* 416 Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="800" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">416</h4>
                                                    <p className="grade-subtitle">(Free Machining Grade)</p>
                                                </div>
                                                <div className="grade-content">
                                                    <p>Excellent machinability due to sulfur addition. Used for precision machined parts, valve components, pump parts, and aircraft fittings.</p>
                                                    <div className="AnimatedbtnContainer" style={{ marginTop: "var(--small-margin)" }}>
                                                        <button className="ColourButton" style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem", padding: "8px 16px" }}>
                                                            Grade 416 Quote <MdKeyboardArrowRight />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* 420 Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="900" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">420</h4>
                                                    <p className="grade-subtitle">(High Carbon Grade)</p>
                                                </div>
                                                <div className="grade-content">
                                                    <p>High hardness and wear resistance. Used for cutting tools, surgical instruments, dental instruments, springs, and measuring tools.</p>
                                                    <div className="AnimatedbtnContainer" style={{ marginTop: "var(--small-margin)" }}>
                                                        <button className="ColourButton" style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem", padding: "8px 16px" }}>
                                                            Grade 420 Quote <MdKeyboardArrowRight />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* 430F & 431 Grade */}
                                        <Col lg={6} md={12} sm={24} xs={24}>
                                            <div className="grade-application-card" data-aos="blur-to-clear" data-aos-delay="1000" data-aos-duration="1200">
                                                <div className="grade-header">
                                                    <h4 className="grade-title">430F & 431</h4>
                                                    <p className="grade-subtitle">(Specialized Grades)</p>
                                                </div>
                                                <div className="grade-content">
                                                    <p>430F offers free machining properties, while 431 provides higher strength and corrosion resistance for aerospace and high-performance applications.</p>
                                                    <div className="AnimatedbtnContainer" style={{ marginTop: "var(--small-margin)" }}>
                                                        <button className="ColourButton" style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem", padding: "8px 16px" }}>
                                                            Grade 430F/431 Quote <MdKeyboardArrowRight />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </>
                    ) : categoryId === 'duplex' ? (
                        // Duplex Stainless Steel - Full Content
                        <>
                            <div>
                                <Row>
                                    <Col lg={12}>
                                        <div className="AboutUsContentContainer">
                                            <div>
                                                <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                                    <strong>Duplex stainless steel offers excellent resistance to corrosion and very high mechanical strength.</strong> The high corrosion resistance of duplex stainless steel ensures significantly more uptime than carbon steels and conventional stainless steels, while the mechanical strength allows for lighter constructions, a more compact system design and less welding.
                                                </p>
                                                <br />
                                                <h3 data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200" style={{ color: "#617E87", fontSize: "1.4rem", marginBottom: "15px" }}>
                                                    An alternative to nickel alloys
                                                </h3>
                                                <p data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                                    Using our metallurgical expertise, we continue to achieve breakthroughs in the area of duplex stainless steel, adding more specialized, higher performance products to the program.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} style={{ width: "100%" }}>
                                        <div>
                                            <div className="AboutUsImageContainer" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">
                                                <img src="/Images/Metalgrades.jpeg" alt="Duplex Stainless Steel" loading="lazy" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Chemical Properties Table */}
                            <div style={{ marginTop: "var(--section-margin)" }}>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">
                                        Chemical Properties of Duplex Stainless Steels
                                    </h2>
                                </div>
                                <div className="GraphImage">
                                    <Table columns={duplexData.columns} dataSource={duplexData.data} pagination={{ pageSize: 10 }} data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200" />
                                </div>
                            </div>

                            {/* Mechanical Properties Section */}
                            <div style={{ marginTop: "var(--section-margin)" }}>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                        Mechanical Properties of Duplex Stainless Steels
                                    </h2>
                                </div>

                                <Row gutter={[32, 32]} style={{ marginTop: "var(--subsection-margin)" }}>
                                    {/* Duplex 2205 Properties */}
                                    <Col lg={12} md={24} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                            <div className="property-header">
                                                <h3 className="property-title">Mechanical Properties of Duplex 2205</h3>
                                            </div>
                                            <div className="property-content">
                                                <div className="mechanical-properties-table">
                                                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                                        <thead>
                                                            <tr style={{ backgroundColor: "#617E87", color: "white" }}>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Density</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Melting Range</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Tensile Strength</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Yield Strength (0.2%Offset)</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Elongation</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>7.83 g/cm3</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1385-1440°C</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>MPa - 655</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>MPa - 450</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>25 %</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Duplex 2507 Properties */}
                                    <Col lg={12} md={24} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                            <div className="property-header">
                                                <h3 className="property-title">Mechanical Properties of S.S. 2507</h3>
                                            </div>
                                            <div className="property-content">
                                                <div className="mechanical-properties-table">
                                                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                                        <thead>
                                                            <tr style={{ backgroundColor: "#840000", color: "white" }}>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Density</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Melting Range</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Tensile Strength</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Yield Strength (0.2%Offset)</th>
                                                                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "center" }}>Elongation</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>7.8 g/cm3</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1350°C</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>MPa - 799</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>MPa - 551</td>
                                                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>15 %</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Applications Section */}
                            <div style={{ marginTop: "var(--section-margin)" }}>
                                <div className="containerGap">
                                    <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                        Applications of Duplex Stainless Steels
                                    </h2>
                                </div>

                                <Row gutter={[32, 32]} style={{ marginTop: "var(--subsection-margin)" }}>
                                    {/* Applications List */}
                                    <Col lg={12} md={24} sm={24} xs={24}>
                                        <div className="property-card" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">
                                            <div className="property-content" style={{ padding: "30px" }}>
                                                <ul className="applications-list" style={{ listStyle: "none", padding: "0", margin: "0" }}>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Architecture</strong> - waterfront building
                                                    </li>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Infrastructure:</strong> bridge, sea walls, piers, tunnels.
                                                    </li>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Oil and Gas:</strong> a wide range of equipment: flow lines, manifolds, risers, pumps, valves.
                                                    </li>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Pulp and Paper:</strong> digesters, pressure vessels, liquor tanks etc.
                                                    </li>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Chemical engineering:</strong> pressure vessels, heat exchangers, condensers, distillation columns, agitators, marine chemical tankers.
                                                    </li>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Water:</strong> desalination plants, large tanks for water storage, waste water treatment
                                                    </li>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>renewable energy:</strong> Biogas tanks
                                                    </li>
                                                    <li style={{ marginBottom: "15px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Mobility:</strong> tramcars and bus frames, tank trucks, iron ore wagons.
                                                    </li>
                                                    <li style={{ marginBottom: "0px", fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                                                        • <strong>Engineering:</strong> pumps, valves, fittings, springs, etc.
                                                    </li>
                                                </ul>
                                                {/* <div className="AnimatedbtnContainer" style={{ marginTop: "var(--table-margin)", textAlign: "center" }}>
                                                    <button className="ColourButton" style={{ justifyContent: "center", display: "flex", alignItems: "center", gap: "8px", margin: "0 auto" }}>
                                                        Get Quote for Duplex Steel <MdKeyboardArrowRight />
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Applications Image */}
                                    <Col lg={12} md={24} sm={24} xs={24}>
                                        <div className="AboutUsImageContainer" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                            <img src="/Images/Metalgrades.jpeg" alt="Duplex Stainless Steel Applications" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                    ) : (
                        // Other Categories - Coming Soon Content
                        <div style={{ textAlign: "center", padding: "var(--section-margin) 20px" }}>
                            <div style={{ fontSize: "4rem", marginBottom: "var(--button-margin)" }}>{category?.icon}</div>
                            <h3 style={{ color: "#617E87", marginBottom: "var(--button-margin)" }}>Coming Soon</h3>
                            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
                                Detailed information about {category?.title.toLowerCase()} including chemical properties,
                                mechanical properties, and applications will be available soon.
                            </p>
                            <div style={{ marginTop: "var(--subsection-margin)" }}>
                                <p><strong>Key Features:</strong></p>
                                <p>{category?.description}</p>
                                <div className="AnimatedbtnContainer" style={{ marginTop: "var(--table-margin)" }}>
                                    <button className="ColourButton" style={{ justifyContent: "center", display: "flex", alignItems: "center", gap: "8px", margin: "0 auto" }}>
                                        Get Notified When Available <MdKeyboardArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Categories Section - Always Show at Bottom */}
                    {renderOtherCategories(categoryId)}
                </div>
            </section>
        );
    };

    return (
        <>
            <CommonHeaderCarousal 
                slidesData={CarousalImages} 
                heading={getCurrentPageTitle()} 
                tagline="BHAWAL METAL INDUSTRIES" 
                pageLink={getCurrentPageTitle()} 
            />
            {selectedCategory ? renderCategoryDetail(selectedCategory) : renderCategoriesOverview()}
        </>
    );
};

export default MetalGrades;

