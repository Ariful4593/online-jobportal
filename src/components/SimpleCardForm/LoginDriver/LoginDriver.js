//SimpleCardForm

export const notNewUserFnc = (newUser, user, userLogin, employer, setLoginInfo, history, jobSeaker, stripe, elements, signIn, location) => {
    if (!newUser && user.name && user.email && user.password) {
        const loginUser = userLogin.find(userData => userData.name === user.name && userData.email === user.email && userData.password === user.password)
        try {
            if (loginUser && employer) {
                const newLoginInfo = { ...loginUser };
                newLoginInfo.isLoggedIn = true;
                setLoginInfo(newLoginInfo);
                localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));
                history.push('postproject');
            }
            else if (loginUser && jobSeaker) {
                const newLoginInfo = { ...loginUser };
                newLoginInfo.isLoggedIn = true;
                setLoginInfo(newLoginInfo);
                localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));

                return history.push('postedJob')
            }
            else if (loginUser && (signIn || location.pathname === '/login')) {
                const newLoginInfo = { ...loginUser };
                newLoginInfo.isLoggedIn = true;
                setLoginInfo(newLoginInfo);
                localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));

                return history.push('postedJob')
            }
            else {
                alert("Sorry! your password or email address doesn't match on the database")
            }
        } catch (err) {
            // alert(err.message)
        }


    } else if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return
    }
}

export const cardElementFnc = async (elements, CardElement, stripe, user, accountType, seterrorMessage, setSuccessMessage, cardData, userLogin, loginInfo, setLoginInfo, jobSeaker, history, employer) => {
    try {
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });


        const data = { ...user, paymentMethod, accountType }

        if (error) {
            seterrorMessage(error.message);
            setSuccessMessage(null);
        } else {
            setSuccessMessage(paymentMethod.id);
            seterrorMessage(null);
            cardData(paymentMethod)

        }


        const newLoginUser = userLogin.find(userData => userData.email === user.email)
        try {
            if (newLoginUser) {
                return alert("This email is already store in database")
            } else {
                const { id, card: { brand, country, exp_month, exp_year, funding, last4 } } = data.paymentMethod;

                const paymentInfo = [id, brand, country, exp_month, exp_year, funding, last4];

                const newLoginInfo = { ...loginInfo };

                newLoginInfo.accountType = accountType;
                newLoginInfo.paymentData = paymentInfo;

                setLoginInfo(newLoginInfo)


                fetch('https://warm-anchorage-86355.herokuapp.com/userLogin', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(newLoginInfo)
                })

                if (jobSeaker) {
                    localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));
                    return history.push('postedJob')
                }
                else if (employer) {
                    localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));
                    return history.push('postproject')
                }

            }
        }
        catch (err) {
            alert(err.message)
        }


    } catch (error) {
        // alert(error.message);
    }
}