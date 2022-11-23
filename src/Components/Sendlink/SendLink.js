import React from 'react'

const SendLink = () => {
    return (
        <>
            <div class="text-center">
                <h1>
                    <a href="/"><img src="/Kriova-logo.png" /></a>
                </h1>
            </div>

            <div class="wrapper">
                <form action="/forgetPassword" method="post">
                    <h3>Reset Link Sent Successfully</h3>
                    <h6>Password reset link has been sent to ur email Successfully!</h6>
                </form>
            </div>
        </>
    )
}

export default SendLink