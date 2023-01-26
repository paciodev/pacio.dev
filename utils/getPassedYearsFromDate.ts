const getPassedYearsFromDate = (dateString: string) => {
    const today = new Date();
    const date = new Date(dateString);
    let result = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        result--;
    }
    return result;
}

export default getPassedYearsFromDate