//From Budget.js
export const newLoginData = (loginInfo, rate, limit, projectId, setLoginInfo) => {
    const newLoginInfo = { ...loginInfo };
    newLoginInfo.currencyName = rate;
    newLoginInfo.budget = limit;
    newLoginInfo.projectId = projectId;
    newLoginInfo.status = 'Pending';
    setLoginInfo(newLoginInfo)
    return (setLoginInfo);
}

export const handleProjectTypeData = (type, data, setCurrentCategory, setProjectTypeBgColor, loginInfo, setLoginInfo) => {
    setCurrentCategory(type);
    setProjectTypeBgColor(type);

    const newProjectType = { ...loginInfo };
    newProjectType.projectType = data.chooseProjectTitle;
    setLoginInfo(newProjectType);
    return (setCurrentCategory, setProjectTypeBgColor, setLoginInfo);
}

//From ProjectFrom.js
export const handleCategoryData = (categoryType, data, setCurrentCategory, setPostingBgColor, loginInfo, setLoginInfo) => {
    setCurrentCategory(categoryType)
    setPostingBgColor(categoryType);
    const postType = { ...loginInfo };
    postType.postType = data.choosePostTitle;
    setLoginInfo(postType)
    return (setCurrentCategory, setPostingBgColor, setLoginInfo);
}

//From ChoosePostingAres.js
export const handlePayData = (pay, data, setPrice, setPayBgColor, loginInfo, setLoginInfo) => {
    setPrice(pay)
    setPayBgColor(pay)

    const postType = { ...loginInfo };
    postType.payingStatus = data.payTitle;
    postType.payType = pay;
    setLoginInfo(postType);
    return (setPrice, setPayBgColor, setLoginInfo);
}

//From PostReview.js
export const budgetStateData = (budgetState, loginInfo, setBudgetState) => {
    const newBudgetState = { ...budgetState };
    newBudgetState.currency = loginInfo.currencyName;
    newBudgetState.price = loginInfo.budget;
    setBudgetState(newBudgetState);

    return (setBudgetState);
}

//From HowLongRunContest.js
export const longContestFnc = (loginInfo, howLongRunContest, setLoginInfo) => {
    const newLongRunContest = { ...loginInfo };
    newLongRunContest.howLongRunContestDay = howLongRunContest;
    setLoginInfo(newLongRunContest)
    return (setLoginInfo);
}

//From UrgentContest.js
export const handleWhatTypeContestRunData = (contestRun, data, setContestType, setBgColor, loginInfo, setLoginInfo) => {
    setContestType(contestRun)
    setBgColor(contestRun)

    const newTypesOfContestRun = { ...loginInfo };
    newTypesOfContestRun.whatTypeContestRun = data.whatTypeOfContestTitle;
    setLoginInfo(newTypesOfContestRun);
    return (setContestType, setBgColor, setLoginInfo);
}

//From StartContest
export const handleUrgentFnc = (urgent, data, setUrgentCategory, setUrgentBgColor, loginInfo, setLoginInfo) => {
    setUrgentCategory(urgent)
    setUrgentBgColor(urgent)

    const newStartContestState = { ...loginInfo };
    newStartContestState.days = data.urgentContestTitle
    setLoginInfo(newStartContestState);
    return (setUrgentCategory, setUrgentBgColor, setLoginInfo);
}

export const startNewContestStateFnc = (loginInfo, currency, rate, projectId, setLoginInfo) => {
    const newStartContestState = { ...loginInfo };
    newStartContestState.currencyName = currency;
    newStartContestState.budget = rate;
    newStartContestState.projectId = projectId;
    newStartContestState.status = 'Pending';
    setLoginInfo(newStartContestState)
    return (setLoginInfo);
}

//From YesPostMyProject.js
export const handleClickOpenFnc = (userInfo, loginInfo, budgetData, budgetState, setOpen) => {
    const inSeconds = new Date().getTime();
    const formData = new FormData();

    formData.append('date', inSeconds)
    formData.append('name', userInfo[0].name);
    formData.append('email', userInfo[0].email);

    formData.append('title', loginInfo.title);
    formData.append('description', loginInfo.description);
    formData.append('status', loginInfo.status);
    formData.append('projectId', loginInfo.projectId);
    formData.append('uniqueId', loginInfo.uniqueId);
    formData.append('budget', budgetData ? budgetData : `$${budgetState.price}.00 ${budgetState.currency}`);
    formData.append('currencyName', loginInfo.currencyName);
    formData.append('skillData', loginInfo.skillData);
    formData.append('projectType', loginInfo.projectType ? loginInfo.projectType : '');
    formData.append('payingStatus', loginInfo.payingStatus ? loginInfo.payingStatus : '');
    formData.append('payType', loginInfo.payType ? loginInfo.payType : '');

    formData.append('postType', loginInfo.postType ? loginInfo.postType : '');
    formData.append('howLongRunContestDay', loginInfo.howLongRunContestDay ? loginInfo.howLongRunContestDay : '');
    formData.append('urgentDay', loginInfo.days ? loginInfo.days : '');
    formData.append('whatTypeContestRun', loginInfo.whatTypeContestRun ? loginInfo.whatTypeContestRun : '');

    fetch('https://online-jobplace-server-production.up.railway.app/postProject', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        body: formData
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error(error)
        })
    setOpen(true);


    return (setOpen);
}


//From PostProject.js
export const loginInfoFnc = (loginInfo, post, uniqueId, setCount, setLoginInfo) => {
    const newLoginInfo = { ...loginInfo };
    newLoginInfo.title = post.title;
    newLoginInfo.description = post.description;
    newLoginInfo.uniqueId = uniqueId;
    const description = post.description;
    setCount(description.length)
    setLoginInfo(newLoginInfo);
    return (setCount, setLoginInfo)
}