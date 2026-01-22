export default function HomeBanner() {
    return (
        <>
            <section className="homebanner-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="home-bannertext">
                                <h3>Convert Your Files Instantly</h3>
                                <div className="col-lg-6">
                                    <p>The ultimate toolkit for your digital documents. Convert Image to PDF,
                                        PDF to Image, Fonts, Videos & More with zero hassle.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="home-bannerbox">
                                <div className="upload-logo">
                                    <i class="bi bi-cloud-arrow-up"></i>
                                </div>
                                <span>Drag & Drop your files here</span>
                                <p>or click to browse from your device</p>
                                <button>Select File</button>
                                <small>Max file size 2GB • Free & Secure</small>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}