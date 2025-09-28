// components/bg.js
import { gsap, Circ } from "gsap";

export function initCanvasAnimation() {
  (function() {
    let width, height, largeHeader, canvas, ctx, points, target;
    let animateHeader = true;

    // Initialize
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = { x: width / 2, y: height / 2 };

        largeHeader = document.getElementById('large-header');
        if (!largeHeader) return;
        largeHeader.style.height = height + 'px';

        canvas = document.getElementById('demo-canvas');
        if (!canvas) return;
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // Create points
        points = [];
        for (let x = 0; x < width; x += width / 5) {
            for (let y = 0; y < height; y += height / 5) {
                let px = x + Math.random() * width / 20;
                let py = y + Math.random() * height / 20;
                let p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // Find closest points
        for (let i = 0; i < points.length; i++) {
            let closest = [];
            let p1 = points[i];
            for (let j = 0; j < points.length; j++) {
                let p2 = points[j];
                if (p1 !== p2) {
                    let placed = false;
                    for (let k = 0; k < 5; k++) {
                        if (!placed && !closest[k]) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                    for (let k = 0; k < 5; k++) {
                        if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // Assign circle
        for (let i in points) {
            let c = new Circle(points[i], 8 + Math.random() * 2, '#1E3A8A'); // only color for dots
            points[i].circle = c;
        }
    }

    function addListeners() {
        if (!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        let posx = 0, posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        animateHeader = document.body.scrollTop <= height;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        if (largeHeader) largeHeader.style.height = height + 'px';
        if (canvas) {
            canvas.width = width;
            canvas.height = height;
        }
    }

    function initAnimation() {
        animate();
        for (let i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if (animateHeader && ctx) {
            ctx.clearRect(0, 0, width, height); // don't fill background
            for (let i in points) {
                const dist = getDistance(target, points[i]);
                if (dist < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if (dist < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if (dist < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }
                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        gsap.to(p, {
            duration: 1 + Math.random(),
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: Circ.easeInOut,
            onComplete: () => shiftPoint(p)
        });
    }

    function drawLines(p) {
        if (!p.active || !ctx) return;
        for (let i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = `rgba(30,58,138,${Math.min(p.active * 2, 1)})`;
            ctx.stroke();
        }
    }

    function Circle(pos, rad, color) {
        this.pos = pos;
        this.radius = rad;
        this.color = color;
        this.draw = function() {
            if (!this.active || !ctx) return;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = `rgba(30,58,138,${Math.min(this.active * 2, 1)})`;
            ctx.fill();
        };
    }

    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

  })();
}
