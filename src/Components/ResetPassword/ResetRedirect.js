import React from 'react'

const ResetRedirect = () => {
    return (
        <>
            <div class="text-center"><h1><a href="/"><img src="/Kriova-logo.png"/></a></h1></div>

            <div class="wrapper">
                <form action="/forgetPassword" method="post">
                    <h3>Password Reset Successfully</h3>
                    <h6> Your password has been reset Successfully!</h6>

                </form>
            </div>
        </>
    )
}

export default ResetRedirect