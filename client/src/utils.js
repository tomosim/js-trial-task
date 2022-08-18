const groupUsers = (basicInfo, detailedInfo) => {
    const list = []
    for (let i = 0; i < basicInfo.length; i++) {
        const matchedInfo = detailedInfo.find(user => user.id === basicInfo[i].id)
        const combinedInfo = { ...basicInfo[i], ...matchedInfo }
        list.push(combinedInfo)
    }
    return list
}

module.exports = { groupUsers }