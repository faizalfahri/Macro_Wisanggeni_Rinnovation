import { readLink } from "../data/index";

import { useNavigate } from "react-router-dom";

const MorePro = () => {
    let navigate = useNavigate();
    return (
        <div className="more-pro">
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
                    <a onClick={() => navigate("/sesudah-login")}><button className="btn-back">Kembali</button></a>
                </div>


                <div className="container-fluid">
                    {/* Row 1 */}
                    <div className="row">

                        {/* Col 1 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-1.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Real Estate Group
                            </p>
                        </div>

                        {/* Col 2 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-2.png" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Big Creek
                            </p>
                        </div>

                        {/* Col 3 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-3.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Andes Group
                            </p>
                        </div>

                        {/* Col 4 */}
                        <div className="col pro-card">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-4.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Paku Jawa
                            </p>
                        </div>

                    </div>

                    {/* Row 2 */}
                    <div className="row mt-5">

                        {/* Col 1 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-1.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Real Estate Group
                            </p>
                        </div>

                        {/* Col 2 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-2.png" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Big Creek
                            </p>
                        </div>

                        {/* Col 3 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-3.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Andes Group
                            </p>
                        </div>

                        {/* Col 4 */}
                        <div className="col pro-card">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-4.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Paku Jawa
                            </p>
                        </div>

                    </div>

                    {/* Row 3 */}
                    <div className="row mt-5">

                        {/* Col 1 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-1.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Real Estate Group
                            </p>
                        </div>

                        {/* Col 2 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-2.png" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Big Creek
                            </p>
                        </div>

                        {/* Col 3 */}
                        <div className="col pro-card margin-right">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-3.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Andes Group
                            </p>
                        </div>

                        {/* Col 4 */}
                        <div className="col pro-card">
                            <div className="icons-pro">
                                <img className="stars-icon" src="/src/assets/img-pro/stars-icon.png" alt="image" />
                                <img className="love-icon" src="/src/assets/img-pro/love-icon.png" alt="image" />
                            </div>
                            <div className="image-pro">
                                <img className="pro-1" src="/src/assets/img-pro/pro-4.jpg" alt="image" />
                            </div>
                            <div className="line-white"></div>
                            <p className="title-pro">
                                Paku Jawa
                            </p>
                        </div>

                    </div>

                </div>

            </article>

        </div>


    );
};

export default MorePro;
