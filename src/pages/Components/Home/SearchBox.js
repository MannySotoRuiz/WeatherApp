const SearchBox = () => {

    return (
        <div id="searchContainer">
            <div id="searchDiv">

                <div className="search-box">
                    <div className="search-icon"><i className="iconfont icon-sousuo" style={{ fontSize: "40px" }}></i></div>
                    <div id='search-border'>
                        <form action="" className="search-form">
                            <input type="text" placeholder="Search new place ..." id="search" />
                        </form>
                    </div>
                    <div className="go-icon"><i className="fa fa-arrow-right"></i></div>
                </div>

            </div>
        </div>
    );
};

export default SearchBox;