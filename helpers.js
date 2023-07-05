function mean(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}

function median(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const midIndex = Math.floor(sortedNums.length / 2);

    if (sortedNums.length % 2 === 0) {
        return(sortedNums[midIndex - 1] + sortedNums[midIndex]) / 2;
    } else {
        return sortedNums[midIndex]
    }
}

function mode(nums) {
    const numCountMap = new Map();
    let maxCount = 0;
    let modeNums = [];

    nums.forEach((num) => {
        const count = numCountMap.get(num) || 0;
        const newCount = count + 1;
        numCountMap.set(num, newCount);

        if (newCount > maxCount) {
            maxCount = newCount;
            modeNums = [num];
        } else if (newCount === maxCount){
            modeNums.push(num)
        }
    })
    return modeNums;
}



module.exports = { mean, median, mode }
