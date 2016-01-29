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

		console.log('Seat: ' + seat);

		if (seatArray[seat] === false) {
			console.log('Seat is empty')
			console.log('*********')

			console.log('Seats left: ' + seat)
			for (i = 1; i < seat + 1; i++) {
				console.log('Checking seat ' + (seat - i))
				if (seatArray[seat - i] === false) {
					emptyLeft++;
				} else {
					break
				}
			}

			console.log('Seats right: ' + (seatArray.length - seat - 1))
			for (i = 1; i < (seatArray.length - seat); i++) {
				console.log('Checking seat ' + (seat + i))
				if (seatArray[seat + i] === false) {
					emptyRight++;
				} else {
					break
				}
			}
			console.log('*********')
			console.log('Empty seats left: ' + emptyLeft);
			console.log('Empty seats right: ' + emptyRight);
			seatScoreLeft[seat] = emptyLeft;
			seatScoreRight[seat] = emptyRight;

			if (emptyLeft === 0 || emptyRight === 0) {
				seatScore[seat] = 0;
			} else if(emptyRight > emptyLeft){
				seatScore[seat] = emptyRight;
			} else if(emptyLeft > emptyRight){
				seatScore[seat] = emptyLeft;
			} else {
				seatScore[seat] = emptyRight + emptyLeft;
			}

			console.log('Seat score: ' + seatScore[seat]);
			console.log('*********')

			if(bestSeatScore === seatScore[seat]){
				if(seatScoreRight[bestSeat] < seatScoreRight[seat] || seatScoreLeft[bestSeat] < seatScoreLeft[seat]){
					bestSeatScore = seatScore[seat];
					bestSeat = seat;
				}
			}else if(bestSeatScore < seatScore[seat]){
				bestSeatScore = seatScore[seat];
				bestSeat = seat;
			}

		} else {
			console.log('Seat is not empty')
			console.log('*********')
		}
	}
	console.log(seatScore);
	return ('Best seat to sit: ' + (bestSeat+1));
}

console.log("The result should be 6 or 7: " + helpJon([false, false, false, true, false, false, false, false, true]));