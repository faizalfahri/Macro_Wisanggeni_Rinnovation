import {readLink} from "../data/index";
import { useNavigate } from "react-router-dom";

const MoreArticle = () => {
    let navigate = useNavigate();

    return (
        <div className="more-article">
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

            <article className="padding-solve">
                {/* Halaman 1 */}
                {/* Button */}
                <div className="button-tittle">
                    <button className="border-15 btn-menu">New</button>
                    <button className="btn-back" onClick={() => navigate("/")}>Kembali</button>
                </div>

                <div className="container-fluid text-center d-flex justify-content-center">
                    {/* Row 1 */}
                    <div className="row">
                        {/* Col 1 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article1.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Menjalin Hubungan Harmonis dengan Pekerja Rumah
                                    </p>
                                    <p className="card-text">
                                        Menjaga hubungan baik dengan pekerja rumah tentu saja bukan
                                        pekerjaan mudah. Komunikasi yang baik salah satu kuncinya.
                                        Kunci lain adalah gunakan hati nurani.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                        {/* Col 2 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article2.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Keluarga Muda Kini Mencari Tukang Bangunan pun Secara Online
                                    </p>
                                    <p className="card-text">
                                        Saat ini, apapun kebutuhan bisa dipermudah berkat layanan online. Tak terkecuali saat ingin merenovasi rumah ataupun sekadar mendekor ulang.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                        {/* Col 3 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article3.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Tips Mengurangi Pembengkakan Biaya Renovasi Rumah
                                    </p>
                                    <p className="card-text">
                                        Banyak orang yang berpikir dua kali ketika ingin merenovasi rumahnya, disebabkan banyaknya orang yang mengalami pembengkakan biaya renovasi. Berikut cara mengatasinya.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Halaman 2 */}
                {/* Button */}
                <div className="button-tittle">
                    <button className="border-15 btn-menu mt-3">Popular</button>
                </div>

                <div className="container-fluid text-center d-flex justify-content-center">
                    {/* Row 1 */}
                    <div className="row">
                        {/* Col 1 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article1.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Menjalin Hubungan Harmonis dengan Pekerja Rumah
                                    </p>
                                    <p className="card-text">
                                        Menjaga hubungan baik dengan pekerja rumah tentu saja bukan
                                        pekerjaan mudah. Komunikasi yang baik salah satu kuncinya.
                                        Kunci lain adalah gunakan hati nurani.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                        {/* Col 2 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article2.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Keluarga Muda Kini Mencari Tukang Bangunan pun Secara Online
                                    </p>
                                    <p className="card-text">
                                        Saat ini, apapun kebutuhan bisa dipermudah berkat layanan online. Tak terkecuali saat ingin merenovasi rumah ataupun sekadar mendekor ulang.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                        {/* Col 3 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article3.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Tips Mengurangi Pembengkakan Biaya Renovasi Rumah
                                    </p>
                                    <p className="card-text">
                                        Banyak orang yang berpikir dua kali ketika ingin merenovasi rumahnya, disebabkan banyaknya orang yang mengalami pembengkakan biaya renovasi. Berikut cara mengatasinya.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Halaman 3 */}
                {/* Button */}
                <div className="button-tittle">
                    <button className="border-15 btn-menu mt-3">Latest</button>
                </div>

                <div className="container-fluid text-center d-flex justify-content-center">
                    {/* Row 1 */}
                    <div className="row">
                        {/* Col 1 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article1.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Menjalin Hubungan Harmonis dengan Pekerja Rumah
                                    </p>
                                    <p className="card-text">
                                        Menjaga hubungan baik dengan pekerja rumah tentu saja bukan
                                        pekerjaan mudah. Komunikasi yang baik salah satu kuncinya.
                                        Kunci lain adalah gunakan hati nurani.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                        {/* Col 2 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article2.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Keluarga Muda Kini Mencari Tukang Bangunan pun Secara Online
                                    </p>
                                    <p className="card-text">
                                        Saat ini, apapun kebutuhan bisa dipermudah berkat layanan online. Tak terkecuali saat ingin merenovasi rumah ataupun sekadar mendekor ulang. 
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                        {/* Col 3 */}
                        <div className="col">
                            <div className="card">
                                <img
                                    src="./src/assets/img-article/article3.jpg"
                                    className="card-img-top"
                                    alt="image"
                                />
                                <div className="card-body">
                                    <p className="tittle-card">
                                        Tips Mengurangi Pembengkakan Biaya Renovasi Rumah
                                    </p>
                                    <p className="card-text">
                                        Banyak orang yang berpikir dua kali ketika ingin merenovasi rumahnya, disebabkan banyaknya orang yang mengalami pembengkakan biaya renovasi. Berikut cara mengatasinya.
                                    </p>
                                    <a href={readLink[0]}>Read More...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </div>
    );
};

export default MoreArticle;
