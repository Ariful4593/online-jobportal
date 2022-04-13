import React from 'react';

const ExistingClient = ({ newUser,handleBlur }) => {
    return (
        <div>
            {/* {!newUser && (
                <input
                    className='mb-2 w-100 enter-name'
                    onChange={handleBlur}
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    required
                />
            )} */}
            {
                !newUser && <input
                    className='mb-2 w-100 enter-email'
                    onChange={handleBlur}
                    type='email'
                    name='email'
                    placeholder='Enter email'
                    required
                />
            }

            {
                !newUser && <input
                    className=' w-100 enter-pass'
                    onChange={handleBlur}
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    required
                />
            }
        </div>
    );
};

export default ExistingClient;