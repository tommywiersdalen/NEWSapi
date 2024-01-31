const tempRanges = { low: [31, 35], mediumLow: [35, 36], normal: [36, 38], mediumHigh: [38, 39], high: [39, 42] };
const HRranges = { low: [25, 40], mediumLow: [40, 50], normal: [50, 90], lowHigh: [90, 110], mediumHigh: [110, 130], high: [130, 220] };
const RRranges = { low: [3, 8], mediumLow: [8, 11], normal: [11, 20], mediumHigh: [20, 24], high: [24, 60] };

function calculateTempScore(temp) {
    console.log(temp);
    if (temp >= tempRanges.low[0] && temp <= tempRanges.low[1]) {
        return 3;
    } else if (temp > tempRanges.mediumLow[0] && temp <= tempRanges.mediumLow[1]) {
        return 1;
    } else if (temp > tempRanges.normal[0] && temp <= tempRanges.normal[1]) {
        return 0;
    } else if (temp > tempRanges.mediumHigh[0] && temp <= tempRanges.mediumHigh[1]) {
        return 1;
    } else if (temp >= tempRanges.high[0]) {
        return 2;
    }
}

function calculateHRScore(HR) {
    if (HR >= HRranges.low[0] && HR < HRranges.low[1]) {
        return 3;
    } else if (HR >= HRranges.mediumLow[0] && HR <= HRranges.mediumLow[1]) {
        return 1;
    } else if (HR > HRranges.normal[0] && HR <= HRranges.normal[1]) {
        return 0;
    } else if (HR > HRranges.lowHigh[0] && HR <= HRranges.lowHigh[1]) {
        return 1;
    } else if (HR > HRranges.mediumHigh[0] && HR <= HRranges.mediumHigh[1]) {
        return 2;
    } else if (HR >= HRranges.high[0]) {
        return 3;
    }
}

function calculateRRScore(RR) {

    if (RR >= RRranges.low[0] && RR <= RRranges.low[1]) {
        return 3;
    } else if (RR > RRranges.mediumLow[0] && RR <= RRranges.mediumLow[1]) {
        return 1
    } else if (RR > RRranges.normal[0] && RR <= RRranges.normal[1]) {
        return 0;
    } else if (RR > RRranges.mediumHigh[0] && RR <= RRranges.mediumHigh[1]) {
        return 2;
    } else if (RR >= RRranges.high[0]) {
        return 3;
    }

}

function calulateNEWScore(tempScore, HRscore, RRscore) {
    console.log(tempScore, HRscore, RRscore);
    let score = tempScore + HRscore + RRscore;
    console.log(score);
    return score
}

function caluclateScore(data) {
    console.log(data);
    let TEMP = null
    let HR = null
    let RR = null
    if (data.measurements) {
        data.measurements.forEach(measurement => {
            if (measurement.type === 'TEMP') TEMP = parseFloat(measurement.value.replace(',', '.' || '0'));
            if (measurement.type === 'HR') HR = parseFloat(measurement.value.replace(',', '.' || '0'));
            if (measurement.type === 'RR') RR = parseFloat(measurement.value.replace(',', '.' || '0'));
        });
    }
    const tempScore = calculateTempScore(TEMP);
    const HRscore = calculateHRScore(HR);
    const RRscore = calculateRRScore(RR);
    const score = calulateNEWScore(tempScore, HRscore, RRscore);
    return score;

}

module.exports.caluclateScore = caluclateScore;