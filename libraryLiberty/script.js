(function () {
    "use strict";
    console.log("reading js");

    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composites = Matter.Composites,
        Composite = Matter.Composite,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1200,
            height: 750,
            showAngleIndicator: true
        }
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    Composite.add(engine.world, [
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(400, 606, 800, 50.5, { isStatic: true })
    ])

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB]);

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

})();
