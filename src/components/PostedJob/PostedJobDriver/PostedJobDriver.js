export const handleProjectType = (getData, pricingPost, setSearchResult, list) => {
    return (
        getData.filter((data) => {
            const test = data.postInfo.find(item => Object.values(item).join("").toLowerCase().includes(pricingPost.toLowerCase()));
            if (test) {
                list.push(test)
                setSearchResult(list)
            } else {
                return 'Sorry your post not found!'
            }
            return 0;
        })
    )
}

export const handleSearchType = (getData,search, setSearchResult ) => {
    return (
        getData.filter((data) => {
            const afterFilterData = data.postInfo.filter(item => Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase()))
            if (afterFilterData.length > 0) {
                setSearchResult(afterFilterData)
            } else {
                return 'Sorry your post not found!';
            }
            return afterFilterData;
        })
    );
}

export const getCheckData = (status, setPricingPost) => setPricingPost(status);