// Our built-in 'sphere' shape.
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);

// Move the sphere upward 1/2 its height
sphere.position.y = 1;