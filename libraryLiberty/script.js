(function () {
    "use strict";
    console.log("reading js");

    var canvas = document.querySelector("#canvas");

    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Constraint = Matter.Constraint,
        Composites = Matter.Composites,
        Composite = Matter.Composite,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: canvas,
        engine: engine,
        options: {
            width: 805,
            height: 405,
            showAngleIndicator: true,
            wireframes: false,
            background: 'transparent'
        }
    });

    // create two boxes and a ground
    var stack = Composites.stack(597, 0, 5, 10, 0, 0, function (x, y) {
        return Bodies.rectangle(x, y, 40, 40);
    });
    var ground = Bodies.rectangle(400, 410, 810, 60, { isStatic: true });
    Composite.add(engine.world, [
        Bodies.rectangle(400, 0, 800, 10, { isStatic: true }),
        Bodies.rectangle(800, 100, 5, 600, { isStatic: true }),
        Bodies.rectangle(0, 100, 10, 600, { isStatic: true }),
        Bodies.rectangle(400, 400, 805, 5, { isStatic: true })
    ])

    // add soft global constraint
    var body = Bodies.circle(280, 100, 30);

    var constraint = Constraint.create({
        pointA: { x: 380, y: 20 },
        bodyB: body,
        pointB: { x: -10, y: -7 },
        stiffness: 0.001
    });

    // add all of the bodies to the world
    Composite.add(engine.world, [stack, body, constraint]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    gsap.to("h1", { rotation: 360, x: 100, duration: 2});
    gsap.to("h1", { delay: 2, skewX: -15, duration: 2, yoyo: true, repeat: -1});

})();
