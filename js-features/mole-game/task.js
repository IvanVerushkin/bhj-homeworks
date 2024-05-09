let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let accum_dead = 0;
let accum_lost = 0;

for (let index = 1; index <= 9; index++) {

	function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick;
	};
	
	let hole = getHole (index);

	hole.onclick = function() {
		if (hole.className.includes('hole_has-mole') === true) {
			dead.innerHTML++;
			accum_dead++;

			if (accum_dead === 10) {
				alert("Вы победили!");
				dead.innerHTML = 0;
				lost.innerHTML = 0;
			};
		} else {
			lost.innerHTML++;
			accum_lost++;
			if (accum_lost === 5) {
				alert ("Вы проиграли");
				dead.innerHTML = 0;
				lost.innerHTML = 0;
			};
		};
	};
};