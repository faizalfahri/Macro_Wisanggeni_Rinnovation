import {Row, Col} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const ReadPro = () => {
    let navigate = useNavigate();

    return (
        <div className="read-pro">
            <div className="container-fluid d-flex justify-content-center search-header">
                <input
                    className="input-search "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="button-search" type="submit">
                    Search
                </button>
            </div>

            <article className="container-fluid padding-solve">
                <div className="button-end">
                    <a onClick={() => navigate("/sesudah-login")}>
                        <button className="btn-back">Kembali</button>
                    </a>
                </div>

                <div className="header-read-pro">
                    <img src="/src/assets/img-pro/logo-andes.png" alt="image" />
                    <div className="title-group">
                        <h1>Andes Group</h1>
                        <div className="rating-pro">
                            <img src="/src/assets/img-pro/stars.png" alt="image" />
                            <p>4,8</p>
                        </div>
                        <p>17.085 user</p>
                    </div>
                </div>

                <div className="img-read-pro">
                    <img src="/src/assets/img-pro/read-pro.png" alt="image" />
                </div>

                <div className="title-read-pro">
                    <h3 className="mb-5">
                        CV. ANDES GROUP adalah kontraktor berpengalaman yang mengerjakan
                        proyek nasional dan saat ini memiliki kualifikasi K1.
                    </h3>
                    <p>
                        Nama : CV. ANDES GROUP <br />
                        Alamat : Jl. Ujung Air Pantai Cermin Kenagarian Surantih Kec. Sutera{" "}
                        <br /> Kabupaten : Kab. Pesisir Selatan <br /> Kode Pos : 00000
                    </p>
                </div>

                <div className="paragraf-read-pro">
                    <h3>Complete Jobs</h3>
                    <p>
                        Pembangunan Jembatan Jalan Lingkungan Sei. Sirah <br />
                        28 October 2009 - 11 December 2009 <br />
                        CV. ANDES GROUP menyelesaikan pekerjaan proyek Pembangunan Jembatan
                        Jalan Lingkungan Sei. Sirah sub bidang SI003 pada Dinas Prasana
                        Jalan dengan no SPK 03/Kont-ABT-KPA/W-VII/Perkim-PJ-TRP/X/2009 dan
                        nilai pekerjaan sebesar Rp.160,950,000{" "}
                    </p>
                </div>

                <div className="button-end mt-5">
                    <a>
                        <button className="btn-back btn-choose-pro">choose Professional</button>
                    </a>
                </div>

                <div className="container-fluid">
                    <Row>
                        <Col className="my-3">
                            <h1 className="text-center fw-bold">Professional</h1>
                            <p className="text-center">Find your best pro</p>
                        </Col>
                    </Row>
                    {/* Row 1 */}
                    <div className="row">
                        {/* Col 1 */}
                        <div
                            className="col pro-card margin-right"
                            onClick={() => navigate("/readpro")}
                        >
                            <div className="icons-pro">
                                <img
                                    className="stars-icon"
                                    src="/src/assets/img-pro/stars-icon.png"
                                    alt="image"
                                />
                                <img
                                    className="love-icon"
                                    src="/src/assets/img-pro/love-icon.png"
                                    alt="image"
                                />
                            </div>
                            <div className="image-pro">
                                <img
                                    className="pro-1"
                                    src="/src/assets/img-pro/pro-1.jpg"
                                    alt="image"
                                />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">Real Estate Group</p>
                        </div>

                        {/* Col 2 */}
                        <div
                            className="col pro-card margin-right"
                            onClick={() => navigate("/readpro")}
                        >
                            <div className="icons-pro">
                                <img
                                    className="stars-icon"
                                    src="/src/assets/img-pro/stars-icon.png"
                                    alt="image"
                                />
                                <img
                                    className="love-icon"
                                    src="/src/assets/img-pro/love-icon.png"
                                    alt="image"
                                />
                            </div>
                            <div className="image-pro">
                                <img
                                    className="pro-1"
                                    src="/src/assets/img-pro/pro-2.png"
                                    alt="image"
                                />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">Big Creek</p>
                        </div>

                        {/* Col 3 */}
                        <div
                            className="col pro-card margin-right"
                            onClick={() => navigate("/readpro")}
                        >
                            <div className="icons-pro">
                                <img
                                    className="stars-icon"
                                    src="/src/assets/img-pro/stars-icon.png"
                                    alt="image"
                                />
                                <img
                                    className="love-icon"
                                    src="/src/assets/img-pro/love-icon.png"
                                    alt="image"
                                />
                            </div>
                            <div className="image-pro">
                                <img
                                    className="pro-1"
                                    src="/src/assets/img-pro/pro-3.jpg"
                                    alt="image"
                                />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">Andes Group</p>
                        </div>

                        {/* Col 4 */}
                        <div className="col pro-card" onClick={() => navigate("/readpro")}>
                            <div className="icons-pro">
                                <img
                                    className="stars-icon"
                                    src="/src/assets/img-pro/stars-icon.png"
                                    alt="image"
                                />
                                <img
                                    className="love-icon"
                                    src="/src/assets/img-pro/love-icon.png"
                                    alt="image"
                                />
                            </div>
                            <div className="image-pro">
                                <img
                                    className="pro-1"
                                    src="/src/assets/img-pro/pro-4.jpg"
                                    alt="image"
                                />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">Paku Jawa</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ReadPro;
