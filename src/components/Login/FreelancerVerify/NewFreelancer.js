import React from 'react';

const NewFreelancer = ({ newUser, handleBlur, CardElement }) => {
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
                newUser &&
                <div>
                    <label htmlFor="" className="text-white">Enter Stripe Payment Number</label>
                    <br /><br />
                    <CardElement required className="w-100" />
                </div>

            }
        </div>
    );
};

export default NewFreelancer;