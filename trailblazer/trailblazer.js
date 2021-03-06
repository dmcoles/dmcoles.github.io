﻿
var element;
var context;
var p = new Array(20*7);

var p1;
var p2;

$(function () {
    document.onkeydown = keydown;
    document.onkeyup = keyup;
    document.onkeypress = keypress;


    p1element = document.getElementById("p1");
    p1context = p1element.getContext("2d");
    p1ballelement = document.getElementById("p1ball");

    p2element = document.getElementById("p2");
    p2context = p2element.getContext("2d");
    p2ballelement = document.getElementById("p2ball");

    blockhole = '0';
    blockjump = '1';
    blockslow = '2';

    blockcolours = {};
    blockcolours[0] = '#000000';
    blockcolours[1] = '#ffffff';
    blockcolours[2] = '#ff0000';
    blockcolours[3] = '#00ff00';
    blockcolours[4] = '#0000ff';
    blockcolours[5] = '#00ffff';
    blockcolours[6] = '#ff00ff';
    blockcolours[7] = '#ffff00';

    for (var i = 0; i < 20; i++)
    {
        p[i * 7] = 80 + i;

        var v = 65 + Math.floor((i * 15 / 20));
        if (i > 0 && p[(i - 1) * 7 + 1] !== v) p[i * 7 + 1] = v; else p[i * 7 + 1] = -1;

        v = 54 + Math.floor((i * 11 / 20));
        if (i > 0 && p[(i - 1) * 7 + 2] !== v) p[i * 7 + 2] = v; else p[i * 7 + 2] = -1;

        v = 46 + Math.floor((i * 8 / 20));
        if (i > 0 && p[(i - 1) * 7 + 3] !== v) p[i * 7 + 3] = v; else p[i * 7 + 3] = -1;

        v = 40 + Math.floor((i * 6 / 20));
        if (i > 0 && p[(i - 1) * 7 + 4] !== v) p[i * 7 + 4] = v; else p[i * 7 + 4] = -1;

        v = 36 + Math.floor((i * 4 / 20));
        if (i > 0 && p[(i - 1) * 7 + 5] !== v) p[i * 7 + 5] = v; else p[i * 7 + 5] = -1;

        v = 33 + Math.floor((i * 3 / 20));
        if (i > 0 && p[(i - 1) * 7 + 6] !== v) p[i * 7 + 6] = v; else p[i * 7 + 6] = -1;
    }

    p1 = new Player(p1context,p1ball,0, 1)
    p2 = new Player(p2context,p2ball, 1, 1)


    setTimeout(runframe, 20);
});


function drawline(grid, canvas, i, j, oset) {
    var h = p[j * 7 + i];

    if (h === -1) return;

    var width = 320 / 5 * (h - 30) / 70;
    var l = 320 / 2 - width * 5 / 2;



    linedraw(canvas, h, 0, 320, '#000000');

    for (var k = 0; k < 5; k++) {
        var c = grid[oset][k];

        var colour = blockcolours[c];

        linedraw(canvas, h, l, width, colour);
        l += width;
    }
}


function linedraw(context,ypos,xstart,xwidth, colour)
{
	context.fillStyle = colour;
	context.fillRect(xstart,ypos,xwidth,1);
}

function runframe() {
    p1.process();
    p2.process();
    setTimeout(runframe, 20);
}

function keypress(evt) {
    if (!evt.metaKey) return false;
}

function keydown(evt)
{
    switch (evt.keyCode) {
        case 17: // Ctrl
            p1.jump = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 37: // Left
            p1.left = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 38: // Up
            p1.up = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 39: // Right
            p1.right = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 40: // Down
            p1.down = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 18: // Alt
            p2.jump = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 81: // 'Q'
            p2.up = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 65: // 'A'
            p2.down = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 69: // 'E'
            p2.left = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 82: // 'R'
            p2.right = true;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;
    }

}

function keyup(evt)
{
    switch (evt.keyCode) {
        case 17: // Ctrl
            p1.jump = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 37: // Left
            p1.left = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 38: // Up
            p1.up = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 39: // Right
            p1.right = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 40: // Down
            p1.down = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 18: // Alt
            p2.jump = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 81: // 'Q'
            p2.up = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 65: // 'A'
            p2.down = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 69: // 'E'
            p2.left = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;

        case 82: // 'R'
            p2.right = false;
            //event.preventDefault();
            if (!evt.metaKey) return false;
            break;
    }

}

class Player {
    constructor(canvas, ballelement, playernum, level) {
        this.playernum = playernum;
        this.x=0;
        this.y=0;
        this.v=0;
        this.vy = 0;
        this.dead = false;
		this.deadcount = 0;
        this.finished = false;

        this.friction = 1;

        this.left=false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.jump = false;

        this.gridvpos = 0;
        this.gridoffset = 0;

        this.playernum = playernum;
        this.playeryoffset = 0;
        this.formwidth = 320;
        this.canvas = canvas;
        this.canvas.lineWidth = 2;

        this.grid = new Array();

        this.ballelement = ballelement;

        this.resetplayer();

        this.x = this.formwidth / 2 - 12;

        this.starttime = window.performance.now();
        this.starting = true;
        this.startcount = 0;

        this.endtime = null;

        this.finishedcount = 0;

        this.starttime = window.performance.now();
        this.starting = true;
        this.startcount = 0;

        this.endtime = null;

        this.finishedcount = 0;
        this.currentlevel = level;

        setuplevel(this.currentlevel, this.grid);

    }

    drawall() {
        var oset = this.gridoffset;

        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 20; j++) {
                drawline(this.grid, this.canvas, i, j, oset);
            }
            oset++;
            if (oset >= this.grid.length) oset = 0;
        }
    }

    paint()
    {
        this.gridvpos++;
        if (this.gridvpos >= 20)
        {
            this.gridvpos = 0;
            this.gridoffset++;
            if (this.gridoffset >= this.grid.length - 8) this.finished = true;
        }


        var oset = this.gridoffset;


        for (var i = 0; i < 7; i++)
        {
            drawline(this.grid, this.canvas, i, this.gridvpos, oset);
            oset++;
            if (oset >= this.grid.Count) oset = 0;
        }
    }

    moveball()
    {
        if (this.dead)
        {
            this.vy = this.vy - 1;
            this.y = this.y + (this.vy / 2);
            this.ballelement.style.height = (48 + this.y).toString()+"px";
            if (this.y < -48)
            {
				this.ballelement.style.height = "0px";
				this.deadcount++;
				if (this.deadcount>75)
				{
					this.dead = false;
					this.resetplayer();
				}
            }

            return;
        }


        if (this.left && this.x > 0) {
            this.x -= 3;
        }
        if (this.right && this.x < (this.formwidth - 44)) this.x += 3;
        if (this.down && this.v > 0) this.v--;
        if (this.up && this.v < 50) this.v++;

        if (this.jump && this.y === 0) this.vy = 8;

        this.y = this.y + (this.vy / 2);

        if (this.y <= 0)
        {
            this.y = 0;
            this.vy = -this.vy;
            this.vy = this.vy / 2;
        }
        else
        {
            this.vy = this.vy - 1;
        }
    }

    drawball()
    {
        if (this.finished)
        {
            if (this.endtime === null) {
                //display level complete
                this.endtime = window.performance.now();

                var timetaken = Math.floor((this.endtime - this.starttime) / 10) / 100;

                this.canvas.font = "12pt Arial";
                this.canvas.strokeStyle = "black";
                this.canvas.lineWidth = 8;
                this.canvas.lineJoin = "miter"; //Experiment with "bevel" & "round" for the effect you want!
                this.canvas.miterLimit = 2;
                this.canvas.strokeText("LEVEL COMPLETE", 90, 50);
                this.canvas.strokeText("TIME " + timetaken.toString(), 120, 70);
                this.canvas.fillStyle = "white";
                this.canvas.fillText("LEVEL COMPLETE", 90, 60);
                this.canvas.fillText("TIME " + timetaken.toString(), 120, 70);
                this.canvas.lineWidth = 1;
                this.finishedcount = 0;
            }
            else
            {
                this.finishedcount++;

                if (this.finishedcount===100)
                {
                    this.nextlevel();
                }

            }
            return;
        }
        this.ballelement.style.left = (this.x * 2).toString()+"px";
        this.ballelement.style.top = (146+this.playeryoffset - this.y).toString() + "px";

    }

    checkcollision(gridline)
    {
        if (this.y===0)
        {
            var midx = Math.floor((this.x + 12) / (this.formwidth / 5));
            this.friction = 1;

            //empty grid cell
            if (gridline[midx] === blockhole)
            {
                this.dead = true;
				this.deadcount=0;
            }

            //jump cell
            if (gridline[midx] === blockjump)
            {
                this.vy = 8;
            }

            //slowdown grid
            if (gridline[midx] === blockslow)
            {
                this.friction = 4;
            }
        }
    }

    process()
    {
        if (this.starting)
        {
            this.startcount++;
            this.drawall();
            this.canvas.font = "12pt Arial";
            this.canvas.strokeStyle = "black";
            this.canvas.lineWidth = 8;
            this.canvas.lineJoin = "miter"; //Experiment with "bevel" & "round" for the effect you want!
            this.canvas.miterLimit = 2;


            if (this.startcount < 30) {
                this.canvas.strokeText("LEVEL " + this.currentlevel.toString(), 130, 60);
                this.canvas.fillStyle = "white";
                this.canvas.fillText("LEVEL " + this.currentlevel.toString(), 130, 60);
                this.canvas.lineWidth = 1;
            }
            else if (this.startcount<60)
            {
                this.canvas.strokeText("READY", 140, 60);
                this.canvas.fillStyle = "white";
                this.canvas.fillText("READY", 140, 60);
                this.canvas.lineWidth = 1;

            }
            else if (this.startcount<90)
            {
                this.canvas.strokeText("STEADY", 130, 60);
                this.canvas.fillStyle = "white";
                this.canvas.fillText("STEADY", 130, 60);
                this.canvas.lineWidth = 1;

            }
            else
            {
                this.canvas.strokeText("GO...", 130, 60);
                this.canvas.fillStyle = "white";
                this.canvas.fillText("GO...", 130, 60);
                this.canvas.lineWidth = 1;
            }

            if (this.startcount > 120) {
                this.starting = false;
                this.drawall();
            }
            this.drawball();
            this.canvas.lineWidth = 1;

            return;
        }

        this.moveball();
        if (!this.dead && !this.finished)
        {
            this.checkcollision(this.grid[Math.max(0, this.gridoffset - 1)]);
            for (var i = 0; i < (this.v/10) / this.friction; i++)
            {
                this.paint();
                this.checkcollision(this.grid[Math.max(0, this.gridoffset - 1)]);
            }
        }   

        this.drawball();

    }

    resetplayer()
    {
        //this.y = 0;
        //this.v = 0;
        this.ballelement.style.top = (146 + this.playeryoffset).toString()+"px";
        this.ballelement.style.height = "48px";

        this.v = 2;
        this.y = 20;
        this.vy = 15;

    }

    nextlevel() {

        this.finished = false;
        this.gridvpos = 0;
        this.gridoffset = 0;

        this.starttime = window.performance.now();
        this.starting = true;
        this.startcount = 0;

        this.endtime = null;

        this.finishedcount = 0;

        this.currentlevel++
        setuplevel(this.currentlevel,this.grid);

        this.starting = true;

        this.resetplayer();

    }

}