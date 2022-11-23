import React from 'react'

const Footer = () => {
    return (
        <div>
            <section class="">
                <footer class="bg-secondary text-white text-center">
                    <div class="container p-4 pb-0">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Project Details</h5>

                                <p>
                                    Detail Here!
                                </p>
                            </div>

                            <div class="col-lg-6 col-md-6 mb-6 mb-md-0">
                                <h5 class="text-uppercase">Team Members</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="https://www.linkedin.com/in/priyanshi-porwal-8b91981bb/" style={{textDecoration:"none",fontWeight:"700"}} class="text-white">Priyanshi Porwal</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/aditisinghchauhan/" style={{textDecoration:"none",fontWeight:"700"}} class="text-white">Aditi Singh</a>
                                    </li>
                                    <li>
                                        <a style={{textDecoration:"none", fontWeight:"700"}} href="https://www.linkedin.com/in/abhinavawasthi01/" class="text-white">Abhinav Awasthi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        Finance Pearly Gates © 2022 Copyright
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer