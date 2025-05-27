import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward, IoArrowUpOutline } from 'react-icons/io5';
import { GiCrane, GiModernCity, GiFactory } from 'react-icons/gi';
import { BsBuilding, BsTools } from 'react-icons/bs';
import { MdConstruction, MdPrecisionManufacturing } from 'react-icons/md';
import { FaIndustry } from 'react-icons/fa';
import './Product.css';

const Products = () => {
    const [activeSliders, setActiveSliders] = useState({});

    const categoriesData = [
        {
            id: 1,
            categoryName: "Stainless Steel HR Round bars",
            icon: <BsBuilding />,
            products: [
                {
                    id: 1,
                    title: "Stainless Steel HR Round bars",
                    description: "High-quality hot rolled round bars for industrial applications with superior corrosion resistance",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/QMsba2epG5VIjL2cUv1d/410 ss round bar (1).png"
                },
                {
                    id: 2,
                    title: "Stainless Steel Bright Round bars",
                    description: "Precision bright round bars with excellent surface finish for critical applications",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/JDJJeRavFYn6YjAmqXH9/Bright Round Bars2.png"
                },
                {
                    id: 3,
                    title: "Stainless Steel Hex bars",
                    description: "Hexagonal bars offering superior strength and precise dimensions for specialized uses",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/qVkzptuq7oQmnkXhAQzJ/hex bars3.png"
                },
                {
                    id: 4,
                    title: "Stainless Steel Square bars",
                    description: "Square profile bars designed for structural and decorative applications",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/POdHsF3O09cGtXHVDuJG/square bars2.png"
                },
                {
                    id: 5,
                    title: "Stainless Steel Flat bars",
                    description: "Flat bars with excellent dimensional accuracy for various industrial requirements",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/eNVvs7eFjmjynlRF4StD/flat bars.jpg"
                }
            ]
        },
        {
            id: 2,
            categoryName: "Forged Components",
            icon: <GiFactory />,
            products: [
                {
                    id: 6,
                    title: "Die Forged Components",
                    description: "Precision die forged components with exceptional strength and reliability",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/QSibS8MTiXog6R5hxMYh/Die Forging Components (1).jpg"
                },
                {
                    id: 7,
                    title: "Forged Circles",
                    description: "High-strength forged circular components for critical industrial applications",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/5ri2HvBiK2lccs9JkN30/Forged Circle.jpg"
                },
                {
                    id: 8,
                    title: "Forged Rings",
                    description: "Premium forged rings engineered for demanding operational conditions",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/axKVPaaFyBPKPCksnX3L/Forged rings.png"
                },
                {
                    id: 9,
                    title: "Forged Flat bars",
                    description: "Robust forged flat bars offering superior mechanical properties",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/2dcIg4HK6mCX693B56Fd/Forged Flats.jpg"
                },
                {
                    id: 10,
                    title: "Forged Blocks",
                    description: "Heavy-duty forged blocks designed for high-stress applications",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/6p2HBXPV98r1nwQesVw1/forged blocks (2).jpg"
                }
            ]
        },
        {
            id: 3,
            categoryName: "Precision Components",
            icon: <MdPrecisionManufacturing />,
            products: [
                {
                    id: 11,
                    title: "Proof Machined Components",
                    description: "Precision-machined components with tight tolerances for critical applications",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/EK6vEOXEjtz8DIhiZvUp/Machined Blocks.jpg"
                },
                {
                    id: 12,
                    title: "Shafts",
                    description: "High-precision shafts manufactured to exact specifications for optimal performance",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/atufWUsGlp14fDR5HAOa/IMG20241129140754.jpg"
                },
                {
                    id: 13,
                    title: "Spindles",
                    description: "Precision spindles engineered for smooth operation and long service life",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/CLG75stXjFT6SUVuloKh/spindle 2.png"
                },
                {
                    id: 14,
                    title: "Threaded bars",
                    description: "Precision threaded bars with superior thread quality and dimensional accuracy",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/vuKK6LrUt7ClRbVgPLPh/threaded bars2.jpg"
                },
                {
                    id: 15,
                    title: "Tie rods",
                    description: "High-strength tie rods designed for structural and mechanical applications",
                    image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/2LYWQmLOICb1MtjE6buj/tie rods.jpg"
                }
            ]
        }
    ];

    const scrollSlider = (categoryId, direction) => {
        const slider = document.getElementById(`slider-${categoryId}`);
        const scrollAmount = 320; // card width + gap

        if (direction === 'left') {
            slider.scrollLeft -= scrollAmount;
        } else {
            slider.scrollLeft += scrollAmount;
        }
    };

    return (
        <section className="products-wrapper">
            <div className="products-container">
                {/* Main Header */}
                <div className="products-main-header">
                    <div className="header-content">
                        <div className="header-tagline">
                            <div className="tagline-line"></div>
                            <span className="tagline-text">What We Offer</span>
                        </div>
                        <h1 className="main-title">Our Products</h1>
                    </div>
                </div>

                {/* Categories */}
                {categoriesData.map((category, categoryIndex) => (
                    <div key={category.id} className={`category-section category-${categoryIndex + 1}`}>

                        {/* Category Header */}
                        <div className="category-header">
                            <div className="category-info">
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <h2 className="category-title">{category.categoryName}</h2>
                            </div>

                            {/* Category Navigation */}
                            <div className="category-nav">
                                <button
                                    className="nav-button nav-prev"
                                    onClick={() => scrollSlider(category.id, 'left')}
                                >
                                    <IoChevronBack />
                                </button>
                                <button
                                    className="nav-button nav-next"
                                    onClick={() => scrollSlider(category.id, 'right')}
                                >
                                    <IoChevronForward />
                                </button>
                            </div>
                        </div>

                        {/* Products Slider */}
                        <div className="products-slider-container">
                            <div
                                id={`slider-${category.id}`}
                                className="products-slider"
                            >
                                {category.products.map((product, productIndex) => (
                                    <div key={product.id} className={`product-card slider-card card-${productIndex + 1}`}>

                                        {/* Image/Icon Section */}
                                        <div style={{ height: "300px", overflow: "hidden" }}>
                                            <img src={product.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </div>

                                        {/* Content Section */}
                                        <div className="card-content">
                                            <h3 className="card-title">{product.title}</h3>
                                            <p className="card-description">{product.description}</p>

                                            {/* CTA Button */}
                                            <button className="cta-button">
                                                <span className="button-text">READ MORE</span>
                                                <IoArrowUpOutline className="button-icon" />
                                            </button>

                                            {/* Decorative Lines */}
                                            <div className="decorative-line"></div>
                                        </div>

                                        {/* Card Glow Effect */}
                                        <div className="card-glow"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Bottom Section */}
                {/* <div className="bottom-section">
          <div className="bottom-decoration">
            <div className="decoration-line decoration-left"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line decoration-right"></div>
          </div>
        </div> */}
            </div>
        </section>
    );
};

export default Products;