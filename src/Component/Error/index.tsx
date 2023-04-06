import Images from "../../assets/img";

const ErrorPage = () => {
    return (<>
        <section id="error_main" className="section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="error_content text-center">
                            <img src={Images.imageError} alt="imgError"/>
                                <h2>Error 404 : page not found</h2>
                                <a href="/" className="btn btn_theme btn_md">Back to home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default ErrorPage;