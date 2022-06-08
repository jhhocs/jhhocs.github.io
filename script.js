changeColor();

function changeColor() {
    let backgroundColor = document.getElementById("wholepage");
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    if (5 <= hours && hours < 8) {//Morning
        backgroundColor.style.background = "#3B4371";
    }
    if (8 <= hours && hours < 17) {//Day
        backgroundColor.style.background = 
            "linear-gradient(to right, #FF6C84, #0f2027)";
    }
    if (17 <= hours && hours < 19) {//Evening
        backgroundColor.style.background = "#C06C84";
    }
    if (19 <= hours || hours < 5) {//Night
        backgroundColor.style.background = "#0f2027";
    }
}

function decToHex(r, g, b) {
	dHr = r.toString(16);
	dHg = g.toString(16);
	dHb = b.toString(16);
	hcode = dHr + dHg + dHb;
	return hcode;
}