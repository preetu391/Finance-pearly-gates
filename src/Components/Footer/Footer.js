import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="">
                <footer className="bg-secondary text-white text-center">
                    <div className="container p-4 pb-0">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Project Details</h5>

                                <a href="https://medium.com/@preetu391391391/about-finance-pearly-gates-7a812acb031a" style={{ textDecoration: "none", fontWeight: "700" }} className="text-white">
                                    <p>
                                        Detail Here!
                                    </p>
                                </a>
                            </div>

                            <div className="col-lg-6 col-md-6 mb-6 mb-md-0">
                                <h5 className="text-uppercase">Team Members</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="https://www.linkedin.com/in/priyanshi-porwal-8b91981bb/" style={{ textDecoration: "none", fontWeight: "700" }} className="text-white">Priyanshi Porwal</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/aditisinghchauhan/" style={{ textDecoration: "none", fontWeight: "700" }} className="text-white">Aditi Singh</a>
                                    </li>
                                    <li>
                                        <a style={{ textDecoration: "none", fontWeight: "700" }} href="https://www.linkedin.com/in/abhinavawasthi01/" className="text-white">Abhinav Awasthi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        Finance Pearly Gates © 2022 Copyright
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer