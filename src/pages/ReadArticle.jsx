import {readLink} from "../data/index";
import { useNavigate } from "react-router-dom";

const ReadArticle = () => {
    let navigate = useNavigate();
    return (
        <div className="read-article">
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
                <div className="button-end">
                    <a onClick={() => navigate("/morearticle")}><button className="btn-back">Kembali</button></a>
                </div>

                <h1 className="mt-3">
                    Tips Mengurangi Pembengkakakan Biaya Renovasi Rumah
                </h1>
                <div  className="p-image">
                    <img src="./src/assets/img-article/article3.jpg" alt="image" className="img-fluid mt-3"/>
                </div>
                <p className="mt-3">Renovasi rumah memang hal yang perlu dilakukan terutama jika anda ingin menambah atau memperbaiki rumah anda. Namun demikian, banyak orang yang berpikir dua kali sebelum memutuskan untuk merenovasi rumahnya. Mengapa? Ternyata banyak orang yang mengalami pembengkakan biaya renovasi.</p>
                <p>Ya, banyak orang mengatakan bahwa sebelum memutuskan untuk renovasi rumah, ada baiknya kita persiapkan dana 2 kali lipat dari total biaya yang dibutuhkan. Apakah pembengkakan biaya tersebut selalu terjadi saat merenovasi rumah? Apakah tidak ada solusi untuk mengurangi terjadinya pembengkakan biaya saat merenovasi rumah?</p>
                <p>Bagi anda yang berencana untuk merenovasi rumah hunian namun masih takut dengan terjadinya pembengkakan biaya, maka ada baiknya anda membaca tips yang akan kami bagikan di artikel ini terlebih dahulu.</p>

                <h4 className="d-flex justify-content-center mt-5 fw-bold">Artikel Lainnya</h4>
                <div className="container-fluid text-center d-flex justify-content-center mb-5">
                    {/* Row 1 */}
                    <div className="row">
                        {/* Col 1 */}
                        <div className="col" onClick={() => navigate("/readarticle")}>
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
                        <div className="col" onClick={() => navigate("/readarticle")}>
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
                        <div className="col" onClick={() => navigate("/readarticle")}>
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

export default ReadArticle;
