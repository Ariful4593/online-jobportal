import React from 'react';

const NewClient = ({ newUser, handleBlur, accountType, setAccountType, CardElement }) => {
    return (
        <div>
            {newUser && (
                <input
                    className='mb-2 w-100 enter-name'
                    onBlur={handleBlur}
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    required
                />
            )}


            {newUser && (
                <input
                    className='mb-2 w-100 enter-email'
                    onBlur={handleBlur}
                    type='text'
                    name='email'
                    placeholder='Enter email'
                    required
                />
            )}

            {newUser && (
                <input
                    className='mb-2 w-100 enter-pass'
                    onBlur={handleBlur}
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    required
                />
            )}

            {
                newUser && <pre style={{ fontFamily: 'system-ui' }}>Account Type: <select name="cars" id="account-type" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                </select></pre>
            }
            {
                newUser &&
                <div>
                    {
                        accountType === 'basic' && <p style={{ color: 'green' }}>Your can 10 post job per month!</p>
                    }
                    {
                        accountType === 'standard' && <p style={{ color: 'green' }}>Your can 20 post job per month!</p>
                    }
                    {
                        accountType === 'premium' && <p style={{ color: 'green' }}>Your can 30 post job per month!</p>
                    }
                </div>
            }
            {
                newUser &&
                <div>
                    <label htmlFor="" className="">Enter Stripe Payment Number</label>
                    <br /><br />
                    <CardElement required className="w-100" />
                </div>

            }
        </div>
    );
};

export default NewClient;