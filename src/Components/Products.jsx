import React, { useState } from "react";
import innerbanner from '/src/assets/images/inner-banner-about.jpg';
import others2 from '/src/assets/images/others/other-2.mp4';
const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const titles = ['BODY', 'BONNET', 'SHIELD AND FIXTURE', 'YOKE', 'DISC', 'DISC', 'BLOWDOWN RING', 'CAP'];
    const titles2 = ['STEMS', 'STEMS', 'SPRING WASHER', 'SPRING ADJUDTING SCREW', 'SPRING ADJUSTING SCREW', 'PULLING TOOL', 'POSITION INDICATOR', 'PLUG', 'PLUG FILTER', 'LOWER CUP', 'LOCK NUT', 'GUIDE COVER', 'GLAND', 'GLAND RING', 'CAP', 'CAP PLUG', 'CAM', 'CAM ASSEMBLY', 'BODY FILTER', 'BACK SEAT', 'BACK SEAT', 'ADJUSTING RING SCREW', 'BONNET', 'GLAND FLANGE', 'NPT PLUG'];
    const titles4 = ['HAND LEAVER', 'LIFTING LUG', 'SUPPORT', 'WEATHER HOOD'];
    const titles5 = ['TYPE M', 'TYPE V'];

    const steelcastingsImages = import.meta.glob('/src/assets/images/steelcastings/*.jpeg', { eager: true });
    const investmentImages = import.meta.glob('/src/assets/images/investment/*.jpeg', { eager: true });
    const roundbarImages = import.meta.glob('/src/assets/images/roundbar/*.jpeg', { eager: true });
    const forgingsImages = import.meta.glob('/src/assets/images/forgings/*.jpg', { eager: true });
    const fabricationImages = import.meta.glob('/src/assets/images/fabrication/*.jpeg', { eager: true });
    const gearboxImages = import.meta.glob('/src/assets/images/gearbox/*.jpeg', { eager: true });
    const otherImages = import.meta.glob('/src/assets/images/Others/*.jpg', { eager: true });


    const sortImages = (images) =>
        Object.entries(images)
            .sort(([a], [b]) => {
                const getNum = (str) => parseInt(str.match(/\d+/)?.[0] || 0);
                return getNum(a) - getNum(b);
            })
            .map(([_, mod]) => mod.default);

    const steelcastingsPaths = sortImages(steelcastingsImages);
    const investmentPaths = sortImages(investmentImages);
    const roundbarPaths = sortImages(roundbarImages);
    const forgingsPaths = sortImages(forgingsImages);
    const fabricationPaths = sortImages(fabricationImages);
    const gearboxPaths = sortImages(gearboxImages);
    const otherPaths = sortImages(otherImages);



    const generateImageData = (count, start) => {

        return Array.from({ length: count }, (_, i) => ({
            id: start + i,
            title: i < 12 ? titles[0] : titles[1],
            material: 'Ferrous',
            dimension: '1/2" - 30"',
            imagePath: steelcastingsPaths[start + i],
        }));
    };
    const generateImageData2 = (count, start) => {
        return Array.from({ length: count }, (_, i) => ({
            id: start + i,
            title: i === 1 ? titles[6] :
                i === 2 ? titles[1] :
                    i === 3 ? titles[7] :
                        titles[4],
            material: 'Ferrous',
            dimension: '1/2" - 30"',
            imagePath: investmentPaths[start + i],
        }));
    };
    const generateImageData3 = (count, start = 1) => {
        return Array.from({ length: count }, (_, i) => ({
            id: start + i,
            title: titles2[i],
            material: 'Ferrous',
            dimension: '1/2" - 30"',
            imagePath: roundbarPaths[start + i],
        }));
    };
    const generateImageData4 = (count, start = 1) => {
        return Array.from({ length: count }, (_, i) => ({
            id: start + i,
            title: titles5[i],
            material: 'Ferrous',
            dimension: '1/2" - 30"',
            imagePath: forgingsPaths[start + i],
        }));
    };
    const generateImageData5 = (count, start = 1) => {
        return Array.from({ length: count }, (_, i) => ({
            id: start + i,
            title: titles4[i],
            material: 'Ferrous',
            dimension: '1/2" - 30"',
            imagePath: fabricationPaths[start + i],
        }));
    };
    const generateImageData6 = (count, start = 1) => {
        return Array.from({ length: count }, (_, i) => ({
            id: start + i,
            title: titles5[i],
            material: 'Ferrous',
            dimension: '1/2" - 30"',
            imagePath: gearboxPaths[start + i],
        }));
    };
    const generateImageData7 = (count, start = 1) => {
        return Array.from({ length: count }, (_, i) => ({
            id: start + i,
            material: 'Ferrous',
            dimension: '1/2" - 30"',
            imagePath: otherPaths[start + i],
        }));
    };
    const closeModal = () => {
        setSelectedProduct(null); // hide modal
    };
    const firstSet = generateImageData(27, 1);
    const secondSet = generateImageData2(4, 1);
    const thirdSet = generateImageData3(27, 1);
    const fourthSet = generateImageData4(10, 1);
    const fifthSet = generateImageData5(4, 1);
    const sixthSet = generateImageData6(2, 1);
    const otherSet = generateImageData7(1, 1);
    const handleImageClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="main">
            <div className="inner-banner-about" style={{
                backgroundImage: `url(${innerbanner})`,
            }}>
                <div className="container">
                    <div className="col-lg-12">
                        <h1>Comprehensive Solution For All Types Of Machined Components</h1>
                    </div>
                </div>
            </div>

            <div className="inner-content-bg">
                <div className="container">
                    <div className="col-lg-12" id="ecotech-imagecontainer">
                        <h1 className="m-3">Products</h1>

                        <div className="material-design"><span>Material we are Handling</span> <br />
                            <span>Round bar & Forging:</span> A105, LF2, LF3, F51, F55, 410, F6A, 304, 304L, 316, 316L, INCONEL 625, INCONEL 718 & HASTALLOY.<br />
                            <span>Steel Castings:</span> WCB/WCC, LCB/LCC, WC6, WC9, CF8, CF8M, CF3, CF3M, 4A, 6A.</div>
                        <h4>Steelcastings :</h4>
                        <div className="prod_cont">
                            {firstSet.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="prod_cont_inner">
                                        <div>
                                            <img
                                                src={product.imagePath}
                                                className="img-responsive ecotech-popup-trigger"
                                                alt={`Product ${product.id}`} onClick={() => handleImageClick(product)}
                                            />
                                        </div>
                                        <div className="product-heads">{product.title}</div>
                                        <ul className="ecotech-hidden-details-1">
                                            <li>
                                                <span>Material </span>
                                                <span>{product.material}</span>
                                            </li>
                                            <li>
                                                <span>Dimension (upto) inch</span>
                                                <span>{product.dimension}</span>
                                            </li>
                                        </ul>
                                        <div className="view-more">View more</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <h4>Investment Castings:</h4>
                        <div className="prod_cont">
                            {secondSet.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="prod_cont_inner">
                                        <div>
                                            <img
                                                src={product.imagePath}
                                                className="img-responsive ecotech-popup-trigger"
                                                alt={`Product ${product.id}`} onClick={() => handleImageClick(product)}
                                            />
                                        </div>
                                        <div className="product-heads">{product.title}</div>
                                        <ul className="ecotech-hidden-details-1">
                                            <li>
                                                <span>Material </span>
                                                <span>{product.material}</span>
                                            </li>
                                            <li>
                                                <span>Dimension (upto) inch</span>
                                                <span>{product.dimension}</span>
                                            </li>
                                        </ul>
                                        <div className="view-more">View more</div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <h4>Roundbars :</h4>
                        <div className="prod_cont">
                            {thirdSet.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="prod_cont_inner">
                                        <div>
                                            <img
                                                src={product.imagePath}
                                                className="img-responsive ecotech-popup-trigger"
                                                alt={`Product ${product.id}`} onClick={() => handleImageClick(product)}
                                            />
                                        </div>
                                        <div className="product-heads">{product.title}</div>
                                        <ul className="ecotech-hidden-details-1">
                                            <li>
                                                <span>Material </span>
                                                <span>{product.material}</span>
                                            </li>
                                            <li>
                                                <span>Dimension (upto) inch</span>
                                                <span>{product.dimension}</span>
                                            </li>
                                        </ul>
                                        <div className="view-more">View more</div>
                                    </div>
                                </div>
                            ))}


                        </div>

                        <h4>Forgings</h4>
                        <div className="prod_cont">
                            {fourthSet.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="prod_cont_inner">
                                        <div>
                                            <img
                                                src={product.imagePath}
                                                className="img-responsive ecotech-popup-trigger"
                                                alt={`Product ${product.id}`} onClick={() => handleImageClick(product)}
                                            />
                                        </div>
                                        <div className="product-heads">{product.title}</div>
                                        <ul className="ecotech-hidden-details-1">
                                            <li>
                                                <span>Material </span>
                                                <span>{product.material}</span>
                                            </li>
                                            <li>
                                                <span>Dimension (upto) inch</span>
                                                <span>{product.dimension}</span>
                                            </li>
                                        </ul>
                                        <div className="view-more">View more</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h4>Fabrication :</h4>
                        <div className="prod_cont">
                            {fifthSet.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="prod_cont_inner">
                                        <div>
                                            <img
                                                src={product.imagePath}
                                                className="img-responsive ecotech-popup-trigger"
                                                alt={`Product ${product.id}`} onClick={() => handleImageClick(product)}
                                            />
                                        </div>
                                        <div className="product-heads">{product.title}</div>
                                        <ul className="ecotech-hidden-details-1">
                                            <li>
                                                <span>Material </span>
                                                <span>{product.material}</span>
                                            </li>
                                            <li>
                                                <span>Dimension (upto) inch</span>
                                                <span>{product.dimension}</span>
                                            </li>
                                        </ul>
                                        <div className="view-more">View more</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4>Gearbox :</h4>
                        <div className="prod_cont">
                            {sixthSet.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="prod_cont_inner">
                                        <div>
                                            <img
                                                src={product.imagePath}
                                                className="img-responsive ecotech-popup-trigger"
                                                alt={`Product ${product.id}`} onClick={() => handleImageClick(product)}
                                            />
                                        </div>
                                        <div className="product-heads">{product.title}</div>
                                        <ul className="ecotech-hidden-details-1">
                                            <li>
                                                <span>Material </span>
                                                <span>{product.material}</span>
                                            </li>
                                            <li>
                                                <span>Dimension (upto) inch</span>
                                                <span>{product.dimension}</span>
                                            </li>
                                        </ul>
                                        <div className="view-more">View more</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4>Others :</h4>
                        <div className="prod_cont other-contant">

                               <div class="col-lg-3 col-md-6 col-xs-12"><div class="prod_cont_inner"><div><video width="640" height="360" class="img-responsive ecotech-popup-trigger" controls="">
                                <source src={others2} type="video/mp4" /></video></div><div class="product-heads">Wiremesh Welding(316)</div>
                                <ul class="ecotech-hidden-details-1"><li><span>Material </span><span>Ferrous</span></li><li><span>Dimension (upto) inch</span><span>1/2" - 30"</span></li></ul><div class="view-more">View more</div></div></div>
                            {otherSet.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="prod_cont_inner">
                                        <div>
                                            <img
                                                src={product.imagePath}
                                                className="img-responsive ecotech-popup-trigger"
                                                alt={`Product ${product.id}`} onClick={() => handleImageClick(product)}
                                            />
                                        </div>
                                        <div className="product-heads">{product.title}</div>
                                        <ul className="ecotech-hidden-details-1">
                                            <li>
                                                <span>Material </span>
                                                <span>{product.material}</span>
                                            </li>
                                            <li>
                                                <span>Dimension (upto) inch</span>
                                                <span>{product.dimension}</span>
                                            </li>
                                        </ul>
                                        <div className="view-more">View more</div>
                                    </div>
                                </div>
                            ))}
                        
                        </div>
                    </div>

                </div>
            </div>
            {selectedProduct && (
                <div className="custom-modal-overlay" onClick={closeModal}>

                    <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal}>x</button>
                        <h2>{selectedProduct.title}</h2>
                        <div>
                            <img src={selectedProduct.imagePath} alt={selectedProduct.title} />
                        </div>
                        <p><strong>Material:</strong> {selectedProduct.material}</p>
                        <p><strong>Dimension:</strong> {selectedProduct.dimension}</p>

                    </div>
                </div>
            )}
        </div>
    )
}
export default Products;