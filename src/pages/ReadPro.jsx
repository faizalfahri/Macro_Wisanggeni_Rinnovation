const ReadPro = () => {
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
                    <h3 className="mb-5">CV. ANDES GROUP adalah kontraktor berpengalaman yang mengerjakan proyek nasional dan saat ini memiliki kualifikasi K1.</h3>
                    <p>Nama             : CV. ANDES GROUP <br />
                        Alamat           : Jl. Ujung Air Pantai Cermin Kenagarian Surantih Kec. Sutera <br /> Kabupaten    : Kab. Pesisir Selatan <br /> Kode Pos       :  00000</p>
                </div>

                <div className="paragraf-read-pro">
                    <h3>Complete Jobs</h3>
                    <p>Pembangunan Jembatan Jalan Lingkungan Sei. Sirah <br />
                        28 October 2009 - 11 December 2009 <br />
                        CV. ANDES GROUP menyelesaikan pekerjaan proyek Pembangunan Jembatan Jalan Lingkungan Sei. Sirah sub bidang SI003 pada Dinas Prasana Jalan dengan no SPK 03/Kont-ABT-KPA/W-VII/Perkim-PJ-TRP/X/2009 dan nilai pekerjaan sebesar Rp.160,950,000 </p>


                    <h3 className="mt-5">Riview</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

            </article>
        </div>
    );
};

export default ReadPro;
