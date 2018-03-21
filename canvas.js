const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

const width = c.width;
const height = c.height;
let done = false;
let PHI = (1 + Math.sqrt(5)) / 2;

var x = (width / 2), //Initial x value at center stage
    y = (height / 2) - 550; //Initial y value at center stage


var stepX = 5; //Initial value: 25 ... increment for which X values will change
var stepY = 1; //Initial value: .75 ... increment for which X values will change

// let PHI = (1 + Math.sqrt(5)) / 2;

function mandala() {
    //Canvas setup
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = .0075;

    ctx.beginPath()


    //Optional colors for text if you like
    // var colors = ['#ff77aa', '#aaff77', '#77aaff', '#ffffff', '#000000'];

    //The meat and potatoes
    function goldenRotation(num) {

        ctx.moveTo(x, y); //begin drawing from the start XY values
        ctx.lineTo(x + Math.pow(num, 2), y); //You can play around with this to change up the pattern 


        x -= stepX; //increment x
        y += stepY //increment y

        ctx.translate((canvas.width), (canvas.height) / 2); //rotate around a center point
        ctx.rotate((Math.PI * PHI) * .5); //circular rotation by the golden number
        ctx.stroke(); //render to canvas

        // ctx.font = '80px courier';
        // ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        // ctx.fillText('hello world!', width / 2, height / 2);


        //if image has filled the frame, stop drawing and do stuff
        if (x > width || y > height) {
            let playlist = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" id='playlist' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/456397005&color=%237c948c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"></iframe>`
            clearInterval(myTimer);
            ctx.resetTransform();
            $('#canvas').fadeOut(1500)

            $('.container').fadeIn(4000);


        }




    }
    //Could make this recursive instead of iterated by a timer.
    var myTimer = setInterval(function() {
        goldenRotation(100)
    }, 5);
}
mandala();