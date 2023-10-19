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
                <div className="d-flex">
                    <img className="andres-logo" src="/src/assets/img-pro/logo-andes.png" alt="image" />
                    <div>
                        <p>Andes Group</p>
                        <div>
                            <img src="" alt="" />
                            <p>4,8</p>
                        </div>
                        <p>17.085 user</p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ReadPro;
