import React from 'react'

const ResetPassword = () => {
    return (
        <>
            <div class="text-center">
                <h1>
                    <a href="/"><img src="/Kriova-logo.png" /></a>
                </h1>
            </div>

            <div class="wrapper">
                <form action="" method="post">
                    {/* <h3>Reset password for <% email %></h3> */}
                    <h6>
                        We received a request to reset the password for your account. Please
                        enter it below.
                    </h6>

                    <label for="password">Password</label>
                    <input type="password" name="password" />
                    {/* <!-- <div class="email error"></div> --> */}
                    <label for="password2">Confirm Password</label>
                    <input type="password" name="password2" />
                    {/* <!-- <div class="password error"></div> --> */}
                    <button>Reset Password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword