// Code your solution in this file!
function distanceFromHqInBlocks(pick){
    let headquaters=42
    if(pick > headquaters){
        let actualDistance = pick-headquaters
        return actualDistance
    }else if (pick < headquaters){
        return headquaters - pick
    }else {
        return 'in the same block'
    }
}
function distanceFromHqInFeet(pick){
    return distanceFromHqInBlocks(pick)*264
}
function distanceTravelledInFeet(start, destination){
    const blockTravelled= Math.abs(start-destination);
    return blockTravelled * 264;
}
   function calculatesFarePrice(start, destination){
    const feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
   }