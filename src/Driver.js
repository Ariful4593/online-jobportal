export const singleProfileId = async (profileId, setProposalUser) => {
    if (profileId) {
        const response = await fetch(`https://online-jobplace.herokuapp.com/proposal-userData/${profileId}`, {
            headers: {
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
        })
        const data = await response.json();
        setProposalUser(data)
    }

}

export const getSingleUserByEmail = async (setUserData) => {
    const response = await fetch(`https://online-jobplace.herokuapp.com/singleUser`, {
        headers: {
            'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
    })
    const data = await response.json();
    const getDataByEmail = await fetch(`https://online-jobplace.herokuapp.com/singleUserByEmail/${data.email}`, {
        headers: {
            'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
    })
    const singleUserData = await getDataByEmail.json();
    setUserData(singleUserData);
}

export const getPostProjectData = (setGetPostData, history) => {
    let isMounted = true;
    fetch(`https://online-jobplace.herokuapp.com/getPostProject`, {
        headers: {
            'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            else if (res.status === 401) {
                history.push('/login');
            }
        })
        .then(data => {
            if (isMounted) {
                setGetPostData(data)
            }
        });
    return () => { isMounted = false };
}

export const getAuthUser = (setUser, history) => {
    let isMounted = true;
    fetch('https://online-jobplace.herokuapp.com/singleUser', {
        headers: {
            'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            else if (res.status === 401) {
                history.push('/login');
            }
        })
        .then(data => {
            if (isMounted) {
                setUser(data)
            }
        })
    return () => { isMounted = false };
}