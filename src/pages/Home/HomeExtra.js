export default function HomeExtra(){
    return(
        <>
        <section className="homeextra-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="homeextra-box">
                            <div className="homeextra-logo">
                                <i class="bi bi-lightning-charge"></i>
                            </div>
                            <span>Lightning Fast</span>
                            <p>Our powerful cloud servers process
                                your files in seconds, no matter the
                                size.</p>
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className="homeextra-box">
                            <div className="homeextra-logo">
                               <i class="bi bi-file-lock2"></i>
                            </div>
                            <span>Secure & Private</span>
                            <p>Files are automatically deleted from our
                                servers after 1 hour. Your privacy
                                    matters.</p>
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className="homeextra-box">
                            <div className="homeextra-logo">
                                <i class="bi bi-droplet"></i>
                            </div>
                            <span>No Watermark</span>
                            <p>Get clean documents without any
                            branding or watermarks, even on the
                            free plan.</p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="homeextra-box">
                            <div className="homeextra-logo">
                               <i class="bi bi-gem"></i>
                            </div>
                            <span>Free & Premium</span>
                            <p>Start for free with basic limits, or
                                upgrade to Premium for unlimited
                                access.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}