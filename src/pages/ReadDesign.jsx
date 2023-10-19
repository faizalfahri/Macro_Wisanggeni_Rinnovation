import { useNavigate } from "react-router-dom";


const ReadDesign = () => {
    let navigate = useNavigate();
    return (
        <div className="read-design">
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
                    <a onClick={() => navigate("/moredesign")}><button className="btn-back">Kembali</button></a>
                </div>

                <div className="read-design-box">
                    <img src="/src/assets/img-design/read-design.jpg" alt="image" className="read-image"/>
                    <div className="read-text">
                        <h1>Minimalize House</h1> 
                        <p>Desain tema alam seringkali mencakup palet warna yang terinspirasi oleh alam, seperti 
                            hijau untuk tumbuhan, biru untuk air, coklat atau tanah liat untuk elemen tanah, dan sebagainya. Warna-warna ini menciptakan perasaan keseimbangan dan kedamaian.
                        </p>
                    </div>
                </div>

                <div className="container">
                    {/* design hal 1 */}
                    <div className="row justify-content-between">
                        <div className="col label-card margin-right">
                            <img
                                className="image-design"
                                src="/src/assets/img-design/design-1.jpg"
                                alt="image"
                            />
                            <div className=" align-items-center">
                                <h5>American Classic</h5>
                                <p>Crafting Dream Homes, the American Way</p>
                            </div>
                        </div>
                        <div className="col label-card">
                            <img
                                src="/src/assets/img-design/design-2.jpg"
                                alt="image"
                                className="image-design"
                            />
                            <div>
                                <h5>Rooftop Design</h5>
                                <p>Rooftop Bliss, Everyday Escape</p>
                            </div>
                        </div>
                    </div>

                    {/* design hal 2 */}
                    <div className="row justify-content-between">
                        <div className="col label-card margin-right">
                            <img
                                className="image-design"
                                src="/src/assets/img-design/design-3.jpg"
                                alt="image"
                            />
                            <div className=" align-items-center">
                                <h5>Simple Korean Kitchen</h5>
                                <p>The Beauty of Korean Simplicity</p>
                            </div>
                        </div>
                        <div className="col label-card">
                            <img
                                src="/src/assets/img-design/design-4.jpg"
                                alt="image"
                                className="image-design"
                            />
                            <div>
                                <h5>Swimming Area Design</h5>
                                <p>Designing Pools, Creating Lifestyles</p>
                            </div>
                        </div>
                    </div>

                    {/* design hal 3 */}
                    <div className="row justify-content-between">
                        <div className="col label-card margin-right">
                            <img
                                className="image-design"
                                src="/src/assets/img-design/design-5.jpg"
                                alt="image"
                            />
                            <div className=" align-items-center">
                                <h5>Bathroom Classic</h5>
                                <p>Classic Bathrooms, Modern Dreams</p>
                            </div>
                        </div>
                        <div className="col label-card">
                            <img
                                src="/src/assets/img-design/design-6.jpg"
                                alt="image"
                                className="image-design"
                            />
                            <div>
                                <h5>House with elevator</h5>
                                <p>A modern house equipped with an elevator is a dream</p>
                            </div>
                        </div>
                    </div>

                    {/* design hal 4 */}
                    <div className="row justify-content-between">
                        <div className="col label-card margin-right">
                            <img
                                className="image-design"
                                src="/src/assets/img-design/design-7.jpg"
                                alt="image"
                            />
                            <div className=" align-items-center">
                                <h5>Garage</h5>
                                <p>Parking in Style, Living in Comfort.</p>
                            </div>
                        </div>
                        <div className="col label-card">
                            <img
                                src="/src/assets/img-design/design-8.jpg"
                                alt="image"
                                className="image-design"
                            />
                            <div>
                                <h5>Workspace Design</h5>
                                <p>Crafting Inspirational Workspaces</p>
                            </div>
                        </div>
                    </div>

                    {/* design hal 5 */}
                    <div className="row justify-content-between">
                        <div className="col label-card margin-right">
                            <img
                                className="image-design"
                                src="/src/assets/img-design/design-9.jpg"
                                alt="image"
                            />
                            <div className=" align-items-center">
                                <h5>Bedroom</h5>
                                <p>Sleeping in Style, Waking Up to Comfort</p>
                            </div>
                        </div>
                        <div className="col label-card">
                            <img
                                src="/src/assets/img-design/design-10.jpg"
                                alt="image"
                                className="image-design"
                            />
                            <div>
                                <h5>Living room Design</h5>
                                <p>Designing Cozy Moments, One Room at a Time</p>
                            </div>
                        </div>
                    </div>

                    {/* design hal 6 */}
                    <div className="row justify-content-between">
                        <div className="col label-card margin-right">
                            <img
                                className="image-design"
                                src="/src/assets/img-design/design-11.jpg"
                                alt="image"
                            />
                            <div className=" align-items-center">
                                <h5>Natural House Design</h5>
                                <p>Living in Harmony with Natures Design</p>
                            </div>
                        </div>
                        <div className="col label-card">
                            <img
                                src="/src/assets/img-design/design-12.jpg"
                                alt="image"
                                className="image-design"
                            />
                            <div>
                                <h5>Back Garden Design</h5>
                                <p>Make your home less boring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        </div>

    );
};

export default ReadDesign;
