function helpJon(seatArray) {
	var emptySeats = [];
	var seatScore = [];
	var seatScoreLeft = [];
	var seatScoreRight = [];
	var bestSeat = 0;
	var bestSeatScore = 0;
	for (i = 0; i < seatArray.length; i++) {
		seatScore.push(0);
	}

	for (seat = 0; seat < seatArray.length; seat++) {
		var emptyLeft = 0;
		var emptyRight = 0;

		if (seatArray[seat] === false) {
			for (i = 1; i < seat + 1; i++) {
				if (seatArray[seat - i] === false) {
					emptyLeft++;
				} else {
					break
				}
			}

			for (i = 1; i < (seatArray.length - seat); i++) {
				if (seatArray[seat + i] === false) {
					emptyRight++;
				} else {
					break
				}
			}

			seatScoreLeft[seat] = emptyLeft;
			seatScoreRight[seat] = emptyRight;

			if (emptyLeft === 0 && seatArray[seat - 1] != undefined || emptyRight === 0 && seatArray[seat + 1] != undefined) {
				seatScore[seat] = 0;
			} else if (emptyRight > emptyLeft) {
				seatScore[seat] = emptyRight;
			} else if (emptyLeft > emptyRight) {
				seatScore[seat] = emptyLeft;
			} else {
				seatScore[seat] = emptyRight + emptyLeft;
			}

			if (bestSeatScore === seatScore[seat]) {
				if (seatScoreRight[bestSeat] === 0 || seatScoreLeft[bestSeat] === 0) {
					//console.log('Same score but current best seat is on an edge')
				}
			} else if (bestSeatScore < seatScore[seat]) {
				bestSeatScore = seatScore[seat];
				bestSeat = seat;
			}

		}
	}
	//console.log(seatArray);
	//console.log(seatScore);

	return ('Best seat to sit: ' + (bestSeat + 1));
}
console.log("6:" + helpJon([true, false, false, true, false, false, false, true]));
console.log("1:" + helpJon([true, false]));
console.log("3 or 7:" + helpJon([true, false, false, false, true, false, false]));
console.log("1 or 5:" + helpJon([false, false, true, false, false, false, true]));
console.log("1: " + helpJon([false, false, false, true, false, false, false, false, true]));
console.log("9: " +	helpJon([true, false, false, false, false, true, false, false, false]));

// var frontEdge = [false, false, false, true, false, false, false, false, true];
// console.log("1: " + helpJon(frontEdge));
// console.log("9: " + helpJon(frontEdge.reverse()));

// console.log("8: " + helpJon([false, false, false, true, false, false, false, false, false, false, false, true]));;