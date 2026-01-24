export default function HomeSteps(){
    return(
        <>
        <section className="homestep-area">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <din className="col-lg-10">
                        <div className="homestep-text">
                            <span>How It Works</span>
                            <p>Converting files has never been easier. Just follow three simple steps.</p>
                        </div>
                        </din>

                        <div className="col-lg-3">
                            <div className="homestep-count">
                                <small>Step 01</small>
                                <div className="homecount-logo">
                                    <i class="bi bi-cloud-arrow-up"></i>
                                    </div>
                                    <span>Upload File</span>
                                    <p>Select your file from your computer, Google Drive, or Dropbox.</p>
                            </div>
                        </div>

                          <div className="col-lg-3">
                            <div className="homestep-count">
                                <small>Step 02</small>
                                <div className="homecount-logo">
                                    <i class="bi bi-arrow-clockwise"></i>
                                    </div>
                                    <span>Convert</span>
                                    <p>Choose your desired format and let our
                                        servers do the magic instantly.</p>
                            </div>
                        </div>


                          <div className="col-lg-3">
                            <div className="homestep-count">
                                <small>Step 03</small>
                                <div className="homecount-logo">
                                    <i class="bi bi-download"></i>
                                    </div>
                                    <span>Download</span>
                                    <p>Get your converted file in high quality and save it to your device.</p>
                            </div>
                        </div>
                </div>
            </div>

        </section>
        </>
    )
}