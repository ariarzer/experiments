class Shape {
    paint(ctx, geom, properties) {

        console.log(erfer);

        let x = geom.width/2;
        let y = geom.height/2;

        ctx.strokeStyle = 'white';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2*Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

registerPaint('woyrklet', Shape);
