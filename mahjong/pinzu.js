let width, height;
let canvas, ctx;

let highScore = 0;

let realNo = 1;

window.setTimeout(() => {
	width = 160, height = 200;
	canvas = document.getElementById('canvasHai');
	/* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
	if (!canvas || !canvas.getContext){
		return false;
	}
	/* 2Dコンテキスト */
	ctx = canvas.getContext('2d');
	drawHai(realNo);
}, 0);

document.getElementById('answerSubmitButton').addEventListener("click", (e) => {
	ansNo = parseInt(document.answerForm.answerNumText.value);

	let f = document.getElementById("feedback");

	if(realNo == ansNo){
		f.textContent = "正解！";
		f.classList.add("answer_is_correct");
		f.classList.remove("answer_is_incorrect");
		if(highScore < realNo)
			highScore = realNo;
	}else{
		f.textContent = "錯和...";
		f.classList.add("answer_is_incorrect");
		f.classList.remove("answer_is_correct");
		realNo = 1;
		canvas.height = height;
	}

	realNo += parseInt(Math.random() * (realNo + 1));
	drawHai(realNo);
	document.answerForm.answerNumText.value = "";
	document.getElementById('highscore').textContent = highScore;
	return e.preventDefault();
});

let drawSoreppoiCircle = (x, y, radius, mainColor, subColor, strokeColor) => {
	ctx.beginPath();
	ctx.fillStyle = mainColor;
	ctx.strokeStyle = strokeColor;
	ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	ctx.lineWidth = 4;
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x, y, radius / 2, 0, Math.PI * 2, true);
	ctx.fillStyle = subColor;
	ctx.strokeStyle = strokeColor;
	ctx.fill();
	ctx.stroke();
};

let drawHai = (realNo) => {
	if(realNo >= 9){
		canvas.height = height + 40.0 * (realNo - 8) / 2;
	}

	ctx.beginPath();
	ctx.clearRect(0,0,width,canvas.height);
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(0,0,width,canvas.height);
	ctx.strokeStyle = "#555";

	if(realNo === 1){
		drawSoreppoiCircle(width / 2, height / 2, 50, "#355", "#a45", "#448");
	}else if (realNo === 2) {
		drawSoreppoiCircle(width / 2, height / 3.5, 40, "#355", "#a45", "#448");
		drawSoreppoiCircle(width / 2, height / 3.5 * 2.5, 40, "#355", "#a45", "#448");
	}else if(realNo === 3) {
		drawSoreppoiCircle(width / 3, height / 4, 30, "#355", "#caf", "#448");
		drawSoreppoiCircle(width / 2, height / 2, 30, "#a46", "#fac", "#448");
		drawSoreppoiCircle(width / 3 * 2, height / 4 * 3, 30, "#355", "#caf", "#448");
	}else if(realNo === 4 || realNo === 5) {
		drawSoreppoiCircle(width / 3.5, height / 4, 30, "#355", "#caf", "#448");
		drawSoreppoiCircle(width / 3.5, height / 4 * 3, 30, "#355", "#caf", "#448");
		drawSoreppoiCircle(width / 3.5 * 2.5, height / 4, 30, "#355", "#caf", "#448");
		drawSoreppoiCircle(width / 3.5 * 2.5, height / 4 * 3, 30, "#355", "#caf", "#448");

		if(realNo === 5){
			drawSoreppoiCircle(width / 2, height / 2, 30, "#a46", "#fac", "#448")
		}
	}else{
		let lowerNo;
		if(realNo % 2 === 0){
			drawSoreppoiCircle(width / 3.5, 35, 20, "#a46", "#fac", "#448");
			drawSoreppoiCircle(width / 3.5 * 2.5 ,35, 20, "#a46", "#fac", "#448");
			lowerNo = realNo - 2;
		}else{
			drawSoreppoiCircle(width / 2 - 50, 25, 20, "#a46", "#fac", "#448");
			drawSoreppoiCircle(width / 2, 35, 20, "#a46", "#fac", "#448");
			drawSoreppoiCircle(width / 2 + 50, 45, 20, "#a46", "#fac", "#448");

			lowerNo = realNo - 3;
		}

		for(let i = 0;i < lowerNo / 2; i++){
			drawSoreppoiCircle(width / 3.5, 90 + 40 * i, 20, "#355", "#caf", "#448");
			drawSoreppoiCircle(width / 3.5 * 2.5 , 90 + 40 * i, 20, "#355", "#caf", "#448");
		}
	}
};
