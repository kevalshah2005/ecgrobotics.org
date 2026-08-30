import digitCoordinates from './digitCoordinates.json';


class Vector {
    constructor(vector) {
        this.Vector = vector;
    }

    getComp(index) {
        return this.Vector[index]
    }

    setComp(index, value) {
        this.Vector[index] = value;
    }

    get getSize()
    {
        return this.Vector.length;
    }

    get getNorm()
    {
        let sizesqr = 0;
        this.Vector.forEach(comp => {
            sizesqr += Math.pow(comp, 2);
        });
        return Math.sqrt(sizesqr);
    }

    get getNormalized()
    {
        let resultVec = [];
        let size = this.getNorm;
        this.Vector.forEach(comp => {
            resultVec.push(comp/size);
        });
        return new Vector(resultVec);
    }

    get getFlattened()
    {
        return this.Vector;
    }

    scalarMult(num)
    {
        let outVect = new Vector(Array.from({ length: this.getSize }, () => 0));
        for(var i = 0; i < this.getSize; i++)
        {
            outVect.setComp(i, num*this.getComp(i));
        }
        return outVect;
    }

    add(other)
    {
        for(var i = 0; i < Math.min(other.getSize, this.getSize); i++)
        {
            this.setComp(i, this.getComp(i)+other.getComp(i));
        }
    }

    subtract(other)
    {
        this.add(other.scalarMult(-1));
    }

    inProd(other) {
        let result = 0;
        for(var i = 0; i < Math.min(this.getSize, other.getSize); i++)
        {
            result += this.getComp(i) * other.getComp(i);
        }
        return result;
    }

    outProd(other) {
        let result = [];
        for(var i = 0; i < this.getSize; i++)
        {
            result.push([]);
            other.Vector.forEach(comp => {
                result[i].push(this.getComp(i) * comp);
            });
        }
        let matrix = [];
        result.forEach(vect => {
            matrix.push(new Vector(vect));
        });
        return new Matrix(matrix);
    }
    
    crossProd(other) {
        let result = [];
        result.push(this.getComp(1)*other.getComp(2)-this.getComp(2)*other.getComp(1));
        result.push(-this.getComp(2)*other.getComp(0)+this.getComp(0)*other.getComp(2));
        result.push(this.getComp(0)*other.getComp(1)+this.getComp(1)*other.getComp(0));
        return new Vector(result);
    }
}

class Matrix {
    constructor(matrix = [new Vector([0, 0, 0]), new Vector([0, 0, 0]), new Vector([0, 0, 0])]) {
        this.matrix = matrix;
    }

    static newMat(matrix)
    {
        return new Matrix(matrix);
    }

    getEntry(i, j)
    {
        return this.matrix[i].getComp(j);
    }

    setEntry(i, j, value)
    {
        this.matrix[i].setComp(j, value);
    }

    get getTranspose()
    {
        let nMat = Array.from({ length: this.matrix[0].getSize }, () => new Vector(Array.from({ length: this.matrix.length }, () => 0)));
        for(var i = 0; i < this.matrix.length; i++)
        {
            for(var j = 0; j < this.matrix[i].getSize; j++)
            {
                nMat[j].setComp(i, this.getEntry(i, j));
            }
        }
        return new Matrix(nMat);
    }

    rMultiply(other)
    {
        let result = [];
        this.matrix.forEach(vect => {
            result.push([]);
            other.getTranspose.matrix.forEach(vect2 => {
                result[result.length-1].push(vect.inProd(vect2));
            });
        });
        let matrix = [];
        result.forEach(vect => {
            matrix.push(new Vector(vect));
        });
        return new Matrix(matrix);
    }

    scalarMult(num)
    {
        let outMat = new Matrix(Array.from({ length: this.matrix.length }, () => new Vector(Array.from({ length: this.matrix[0].getSize }, () => 0))));
        for(var i = 0; i < this.matrix.length; i++)
        {
            outMat.matrix[i] = this.matrix[i].scalarMult(num);
        }
        return outMat;
    }

    add(other)
    {
        for(var i = 0; i < Math.min(other.matrix.length, this.matrix.length); i++)
        {
            for(var j = 0; j < Math.min(other.matrix[i].getSize, this.matrix[i].getSize); j++)
            {
                this.setEntry(i, j, this.getEntry(i, j)+other.getEntry(i, j));
            }
        }
    }

    subtract(other)
    {
        this.add(other.scalarMult(-1));
    }

    get getDiags()
    {
        let diagVec = [];
        for(let i = 0; i < this.matrix.length; i++)
        {
            diagVec.push(this.getEntry(i, i));
        }
        return new Vector(diagVec);
    }
}

var t = 0.005;
var zoom = 100;
const offsetMult = 2.5;
var tAngles = [0, 0];
var angles = [0, 0];
const smooth = 0.1;
const smoothFact = 0.1;
let gravityStrength = 0.05;
const dt = 0.05;
const partCount = 50;

class ScreenToWorld
{
    static getangles(loc, zoomS)
    {
        let theta = Math.asin(clamp(loc[0]/zoomS, -1, 1));
        let phi = Math.asin(clamp(loc[1]/zoomS, -1, 1));

        return[theta, phi];
    }

    static sLerp(value)
    {
        return 1 - 1.5*Math.pow(value, 2) + 0.5*Math.pow(value, 6);
    }

    static sLerpAngle()
    {
        let diff = new Vector(structuredClone(tAngles));
        diff.subtract(new Vector(structuredClone(angles)));
        diff = diff.scalarMult(smooth);
        
        return [
            diff.getComp(0), 
            diff.getComp(1)
        ];
    }
}
let h = new Vector([1, 2])
h.subtract(new Vector([2, 1]));

window.h = h;


function cos(theta)
{
    return Math.cos(theta);
}

function sin(theta)
{
    return Math.sin(theta);
}

function clamp(value, min, max)
{
    return Math.max(Math.min(value, max), min);
}

var rMat = new Matrix([
    new Vector([cos(t), 0, sin(t)]),
    new Vector([0, 1, 0]),
    new Vector([-sin(t), 0, cos(t)])
]);

var rMat2 = new Matrix([
    new Vector([1, 0, 0]),
    new Vector([0, cos(t), sin(t)]),
    new Vector([0, -sin(t), cos(t)])
]);

var rMat3 = new Matrix([
    new Vector([cos(t), sin(t), 0]),
    new Vector([-sin(t), cos(t), 0]),
    new Vector([0, 0, 1])
]);

function rMatx(a)
{
    return new Matrix([
        new Vector([1, 0, 0]),
        new Vector([0, cos(a), sin(a)]),
        new Vector([0, -sin(a), cos(a)])
    ]);
}

function rMaty(a)
{
    return new Matrix([
        new Vector([cos(a), 0, sin(a)]),
        new Vector([0, 1, 0]),
        new Vector([-sin(a), 0, cos(a)])
    ]);
}

function sigmoid(a, offset, mult)
{
    return 1/(1+Math.exp(-(a-offset)));
    //return -2*mult*(a-offset)*Math.exp(mult*Math.pow(a-offset, 2))
    //return (Math.abs(a)-offset) < 0.001 ? 40000 : 0; 
}

const projMat = new Matrix([new Vector([1, 0, 0]), new Vector([0, 1, 0]), new Vector([0, 0, 0])]);

const particles = {
    position: new Matrix(Array.from({ length: partCount }, () => new Vector([
        (Math.random() - 0.5) * 100, // Random X
        (Math.random() - 0.5) * 100, // Random Y
        (Math.random() - 0.5) * 100  // Random Z
    ]))),
    velocity: new Matrix(Array.from({ length: partCount }, () => new Vector([
        (Math.random() - 0.5) * 5, // Random X
        (Math.random() - 0.5) * 5, // Random Y
        (Math.random() - 0.5) * 5
    ]))),
    acceleration: new Matrix(Array.from({ length: partCount }, () => new Vector([
        0, // Random X
        0, // Random Y
        0  // Random Z
    ]))),
    mass: new Matrix([new Vector(Array.from({ length: partCount }, () => (Math.random()) * 10))]),
    charge: new Matrix([new Vector(Array.from({ length: partCount }, () => (Math.random() - 0.5) * 10))]),
    updateAcceleration()
    {
        for(let i = 0; i < this.acceleration.matrix.length; i++)
        {
            let DispM = new Matrix(this.position.matrix.map(vect => new Vector(structuredClone(vect.Vector))));
            DispM.subtract(
                new Vector(this.position.getTranspose.matrix[0].Vector.map(comp => 1)).outProd(this.position.matrix[i])
            )
            let distM = new Matrix([new Vector
            (
                DispM.matrix.map(vect => vect.getNorm > 0 ? 1/Math.pow(vect.getNorm, 3) : 1/Infinity)
            )]);
            let distM2 = new Matrix([new Vector
            (
                DispM.matrix.map(vect => vect.getNorm > 0 ? 1/Math.pow(vect.getNorm, 8) : 1/Infinity)
            )]);
            this.acceleration.matrix[i] = this.mass.rMultiply(distM.rMultiply(DispM).scalarMult(25*gravityStrength)).matrix[0];
            this.acceleration.matrix[i].subtract(this.mass.rMultiply(distM2.rMultiply(DispM).scalarMult(30*gravityStrength)).matrix[0]);
            this.acceleration.matrix[i].subtract(this.velocity.matrix[i].scalarMult(sigmoid(this.position.matrix[i].getNorm, 45)));
            this.acceleration.matrix[i].subtract(this.position.matrix[i].scalarMult(0.001*sigmoid(this.position.matrix[i].getNorm, 45)))
        }
    },
    updateVelocity(timeStep)
    {
        this.velocity.add(this.acceleration.scalarMult(timeStep));
    },
    updatePosition(timeStep, canvas)
    {
        this.position.add(this.velocity.scalarMult(timeStep));
        this.position.matrix = this.position.matrix.map(vect =>
            new Vector([
                clamp(vect.getComp(0), -50, 50),
                clamp(vect.getComp(1), -50, 50),
                clamp(vect.getComp(2), -50, 50)
            ])
        );
    }
};

function createDigitVectors(digitData) {
    return [
        ...digitData.front.map(coords => new Vector(coords)),
        ...digitData.back.map(coords => new Vector(coords))
    ];
}

var charStore = [];
var modelMat = []

Object.values(digitCoordinates).forEach(element => {
    charStore.push(createDigitVectors(element))
    modelMat.push(...createDigitVectors(element))
});

var model = new Matrix(modelMat);

const adj = Array.from(
        {length: charStore.length}, (entry, index) => ({
            front: digitCoordinates[Object.keys(digitCoordinates)[index]].front_adjacency,
            back: digitCoordinates[Object.keys(digitCoordinates)[index]].back_adjacency,
            depth: digitCoordinates[Object.keys(digitCoordinates)[index]].depth_connections
        })
    );

model.subtract(new Matrix(Array.from(
    {length: model.matrix.length}, () => new Vector(Array.from(
        {length: model.matrix[0].getSize}, (x, index) => [35, 17.5, 1.25][index]
    ))
)));
model = model.scalarMult(-1);

export function startLogoAnimation(canvas) {
    if (!canvas) return;

    
    const ctx = canvas.getContext("2d");
    let mousePos = []
    let isHoveringButton = false;
    let hoverIntensity = 0;
    let location = {};
    let lastMouseMoveTime = Date.now()-2000;

    const scale = 800;
    let centerX, centerY, worldUnit;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        worldUnit = canvas.width * 10 / scale;
    }

    resizeCanvas();

    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    canvas.addEventListener('mousemove', (e) => {
        lastMouseMoveTime = Date.now();
        const x = (e.clientX - centerX);
        const y = (e.clientY - centerY);
        const sensitivity = 500;
        tAngles = ScreenToWorld.getangles([x, y], sensitivity);
        //tAngles = [0.5, 0.5];
        //console.log([x, y]);
        //console.log(tAngles);
        //console.log(model);
        const rect = canvas.getBoundingClientRect();
        mousePos = [x+centerX-rect.left,y+centerY-rect.top]
    });

    canvas.addEventListener('wheel', (event) => {
        if (event.ctrlKey) {
            event.preventDefault();
            zoom += event.deltaY*smoothFact;
        }
    }, { passive: false });

    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mX = e.clientX - rect.left;
        const mY = e.clientY - rect.top;

        if (mX >= location.x && mX <= location.x + location.w && mY >= location.y && mY <= location.y + location.h) {
            
            const contentSection = document.getElementById('content'); 
            
            if (contentSection) {
                contentSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    function motionBlur(factor)
    {
        ctx.globalCompositeOperation = "destination-out";
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(0, 0, 0, ${factor})`; // Or whatever your background color is
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
        ctx.restore();
    }

    function draw(points) {
        motionBlur(0.1);
        ctx.shadowBlur = 25
        ctx.fillStyle="white";
        points.forEach(v => {
            const x = v.getComp(0) * scale + offsetMult*centerX/Math.PI;
            const y = -v.getComp(1) * scale + centerY/1;
            ctx.fillRect(x, y, 3, 3);
        });
        
        
    }

    function drawPointLines(points, points2) {
        ctx.shadowBlur = 25
        let gMatrix = new Matrix(points).rMultiply(new Matrix(points).getTranspose);
        let uMatrix = new Matrix(gMatrix.matrix.map(entry => gMatrix.getDiags));
        let DistM = uMatrix.getTranspose;
        uMatrix.subtract(gMatrix)
        DistM.add(uMatrix);
        ctx.strokeStyle="white";
        const frontZ = -30; // Closer to camera = Whiter
        const backZ = 50;   // Further in background = Grayer
        for(var i = 0; i < DistM.matrix.length; i++)
        {
            for(var j = 0; j < i; j++)
            {
                let combinedSpeed = particles.velocity.matrix[i].getNorm + particles.velocity.matrix[j].getNorm;
                let factorS = 300;
                let dynamicThreshold = Math.pow(30, 2) + (combinedSpeed * factorS);
                if (DistM.getEntry(i, j) <= dynamicThreshold)
                {
                    const x_1 = points2[i].getComp(0) * scale + offsetMult*centerX/Math.PI;
                    const y_1 = points2[i].getComp(1) * -scale + centerY/1;
                    const x_2 = points2[j].getComp(0) * scale + offsetMult*centerX/Math.PI;
                    const y_2 = points2[j].getComp(1) * -scale + centerY/1;
                    let avgZ = (points[i].getComp(2) + points[j].getComp(2))/2;
                    let depthFactor = clamp((avgZ - frontZ) / (backZ - frontZ), 0, 1);
                    let colorVal = Math.floor(255 - (depthFactor * 215));
                    let opacity = 1.0 - (depthFactor * 0.7);
                    ctx.strokeStyle = `rgba(${colorVal}, ${colorVal}, ${colorVal}, ${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(x_1, y_1);
                    ctx.lineTo(
                        x_2,
                        y_2
                    );
                    ctx.lineWidth = 5;
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function wireGen(points, unflatpoints)
    {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        adj.forEach(num => {
            Object.entries(num).forEach(face =>
            {
                let stIndex = 0;
                let numInd = adj.findIndex(number => number == num);
                var index = 0;
                for(let i = 0; i < charStore.length; i++)
                {
                    if(numInd == i)
                    {
                        break;
                    }
                    else
                    {
                        stIndex+=charStore[i].length;
                    }
                }
                switch(Object.entries(num).findIndex(f => f[0] == face[0]))
                {
                    case 0:
                        stIndex += 0;
                        break;
                    case 1:
                        stIndex += Object.values(digitCoordinates)[numInd].front.length;
                        break;
                    case 2: 
                        stIndex += Object.values(digitCoordinates)[numInd].front.length;
                        index = -Object.values(digitCoordinates)[numInd].front.length;
                        break;
                    default:
                        stIndex += 0;
                        break;
                }
                
                Object.entries(face[1]).forEach(conns => {
                    const x_1 = points[stIndex + index].getComp(0) * scale + offsetMult*centerX/Math.PI;
                    const y_1 = points[stIndex + index].getComp(1) * -scale + centerY/1;
                    ctx.beginPath();
                    ctx.lineWidth = 5;
                    conns[1].forEach(conn => { 
                        let avgZ = (unflatpoints[stIndex + index].getComp(2) + unflatpoints[stIndex + conn].getComp(2)) / 2;
                        let depthFactor = clamp((avgZ - (-0.5)) / (0.5 - (-0.5)), 0, 1);
                        ctx.strokeStyle = `rgba(255, 165, 0, ${1.0 - (depthFactor * 0.8)})`;
                        ctx.moveTo(x_1, y_1);
                        ctx.lineTo(
                            points[stIndex + conn].getComp(0) * scale + offsetMult*centerX/Math.PI,
                            points[stIndex + conn].getComp(1) * -scale + centerY/1
                        );
                        ctx.stroke();
                    });
                    ctx.closePath();
                    // for (let i = 10; i > 0; i--) {
                    //     ctx.strokeStyle = color;
                    //     ctx.globalAlpha = 0.05;
                    //     ctx.lineWidth = i * 4;  
                    //     ctx.beginPath();
                    //     ctx.moveTo(x1, y1);
                    //     ctx.lineTo(x2, y2);
                    //     ctx.stroke();
                    // }
                    index++;
                });
            })
        });
    }

    function wallGen(points, unflatpoints, glint=false)
    {
        adj.forEach(num => {
            let indices;
            Object.entries(num).forEach(face =>
            {
                let stIndex = 0;
                let numInd = adj.findIndex(number => number == num);
                for(let i = 0; i < charStore.length; i++)
                {
                    if(numInd == i)
                    {
                        break;
                    }
                    else
                    {
                        stIndex+=charStore[i].length;
                    }
                }
                switch(Object.entries(num).findIndex(f => f[0] == face[0]))
                {
                    case 0:
                        stIndex += 0;
                        break;
                    case 1:
                        stIndex += Object.values(digitCoordinates)[numInd].front.length;
                        break;
                    case 2: 
                        stIndex += Object.values(digitCoordinates)[numInd].front.length;
                        break;
                    default:
                        stIndex += 0;
                        break;
                }
                if(Object.entries(num).findIndex(f => f[0] == face[0]) != 2)
                {
                    ctx.beginPath();
                    indices = [0];

                    let i = Object.values(face[1])[[indices[indices.length-1]]][0];
                    while(i != 0)
                    {
                        indices.push(i);
                        i = Object.values(face[1])[[indices[indices.length-1]]][0]
                    }
                    if(glint == false)
                    {
                        let totalX = 0, totalY = 0, totalZ = 0;
                    
                        indices.forEach(index => {
                            totalX += points[index + stIndex].getComp(0) * scale + offsetMult * centerX / Math.PI;
                            totalY += points[index + stIndex].getComp(1) * -scale + centerY;
                            totalZ += unflatpoints[index + stIndex].getComp(2);
                        });

                        // Find the absolute geometric center of the face on your screen
                        let len = indices.length;
                        let centerX2D = totalX / len;
                        let centerY2D = totalY / len;
                        let avgZ = totalZ / len;

                        // Map the face's overall depth to a factor (Closer to camera = smaller depthFactor)
                        let depthFactor = clamp((avgZ - (-30)) / (30 - (-30)), 0, 1);

                        let spread = 40 + (1.0 - depthFactor) * 60; 

                        let faceGrad = ctx.createLinearGradient(
                            centerX2D - spread, centerY2D - spread, 
                            centerX2D + spread, centerY2D + spread
                        );
                        
                        faceGrad.addColorStop(0.0, `rgba(255, 120, 0, ${1.0 - depthFactor})`); 
                        faceGrad.addColorStop(0.7, `rgba(60, 20, 0, ${0.8 - depthFactor * 0.8})`); 
                        faceGrad.addColorStop(1.0, "rgba(0, 0, 0, 1.0)");

                        ctx.fillStyle = faceGrad;
                    } else {
                        let minZ = Infinity;
                        let maxZ = -Infinity;
                        
                        let frontX = 0, frontY = 0;
                        let backX = 0, backY = 0;

                        indices.forEach(index => {
                            let zDepth = unflatpoints[index + stIndex].getComp(2);

                            let screenX = points[index + stIndex].getComp(0) * scale + offsetMult * centerX / Math.PI;
                            let screenY = points[index + stIndex].getComp(1) * -scale + centerY;

                            if (zDepth < minZ) {
                                minZ = zDepth;
                                frontX = screenX;
                                frontY = screenY;
                            }
                            if (zDepth > maxZ) {
                                maxZ = zDepth;
                                backX = screenX;
                                backY = screenY;
                            }
                        });

                        let faceGrad = ctx.createLinearGradient(frontX, frontY, backX, backY);
                        
                        faceGrad.addColorStop(0.5, "rgba(255, 140, 0, 0.25)");
                        faceGrad.addColorStop(0.3, "rgba(100, 30, 0, 0.1)");
                        faceGrad.addColorStop(0.0, "rgba(0, 0, 0, 0.0)");
                        ctx.fillStyle = faceGrad;
                    }

                    ctx.moveTo(points[indices[0]+stIndex].getComp(0)*scale + offsetMult*centerX/Math.PI, points[indices[0]+stIndex].getComp(1)*-scale + centerY);
                    indices.forEach(index => {
                        ctx.lineTo(points[index+stIndex].getComp(0)*scale + offsetMult*centerX/Math.PI, points[index+stIndex].getComp(1)*-scale + centerY);
                    });
                    ctx.closePath();
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    let indices2 = []
                    let stOff = -Object.values(digitCoordinates)[numInd].front.length;
                    for(let i = 0; i < indices.length - 1; i++)
                    {
                        indices2.push([
                            indices[i]+stIndex, indices[i+1]+stIndex,
                            indices[i+1]+stOff+stIndex, indices[i]+stOff+stIndex
                        ]);
                    }
                    indices2.forEach(network => {
                        ctx.moveTo(points[network[0]].getComp(0)*scale + offsetMult*centerX/Math.PI, points[network[0]].getComp(1)*-scale + centerY);
                        network.forEach(point => {
                            ctx.lineTo(points[point].getComp(0)*scale + offsetMult*centerX/Math.PI, points[point].getComp(1)*-scale + centerY);
                        });
                        ctx.closePath();
                        ctx.fill();
                    });
                }
            })
        });
    }

    function drawScrollButton() {
        const btnWidth = 140;
        const btnHeight = 40;
        const btnX = centerX+2*btnWidth;
        const btnY = canvas.height - 200;
        ctx.save();

        let alpha = 0.1 + (hoverIntensity * 0.15);
        if (isHoveringButton) {
            ctx.fillStyle = `rgba(255, 165, 0, ${alpha})`;
            ctx.strokeStyle = "rgba(255, 165, 0, 0.8)";
            ctx.lineWidth = 2.0;                         
        } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
            ctx.lineWidth = 1.5;
        }
        
        ctx.beginPath();
        ctx.roundRect(btnX, btnY, btnWidth, btnHeight, 8); 
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "white";
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        let bounceOffset = Math.sin(Date.now() * 0.004) * 3;
        ctx.fillText("Scroll to Content ↓", btnX + btnWidth / 2, btnY + btnHeight / 2 + bounceOffset);

        ctx.restore();

        return { x: btnX, y: btnY, w: btnWidth, h: btnHeight };
    }

    function pacMan(val, min, max)
    {
        const range = max - min;
        return ((val - min) % range + range) % range + min;
    }
    
    function loop() {
        if (Date.now() - lastMouseMoveTime > 2000) {
            let amount = 0.005*ScreenToWorld.sLerp(clamp(1-((Date.now() - lastMouseMoveTime-2000)/5000), 0, 1));
            angles[0] += amount; 
            angles[1] += amount;
            angles[0] = pacMan(angles[0], -Math.PI, Math.PI);
            angles[1] = pacMan(angles[1], -Math.PI, Math.PI);
        }
        else {
            let diffX = pacMan(tAngles[0]-angles[0], -Math.PI, Math.PI);
            let diffY = pacMan(tAngles[1]-angles[1], -Math.PI, Math.PI);
            const responsiveness = 8;
            // angles[0] += smooth*diffX;
            // angles[1] += smooth*diffY;
            // angles[0] += tAngles[0]*smooth*ScreenToWorld.sLerp(clamp(tAngles[0] == 0 ? 0 : angles[0]/(tAngles[0]) , 0, 1));
            // angles[1] += tAngles[1]*smooth*ScreenToWorld.sLerp(clamp(tAngles[1] == 0 ? 0 : angles[1]/(tAngles[1]), 0, 1));
            // angles[0] = clamp(angles[0], Math.min(tAngles[0], angles[0]-(Math.sign(diffX)*0.001)), Math.max(tAngles[0], angles[0]-(Math.sign(diffX)*0.001)));
            // angles[1] = clamp(angles[1], Math.min(tAngles[1], angles[1]-(Math.sign(diffY)*0.001)), Math.max(tAngles[1], angles[1]-(Math.sign(diffY)*0.001)));
            angles[0] += (diffX) * (1 - Math.exp(-responsiveness * dt));;
            angles[1] += (diffY) * (1 - Math.exp(-responsiveness * dt));;
        }

        if (mousePos[0] >= location.x && mousePos[0] <= location.x + location.w && mousePos[1] >= location.y && mousePos[1] <= location.y + location.h) {
            canvas.style.cursor = 'pointer';
            isHoveringButton = true;
        } else {
            canvas.style.cursor = 'default';
            isHoveringButton = false;
        }

        

        //console.log(angles[0]);
        let masterRotation = rMaty(-angles[0]).rMultiply(rMatx(angles[1]));

        let nPart = masterRotation.rMultiply(particles.position.getTranspose);

        let currentModel = masterRotation.rMultiply(model.getTranspose);
        currentModel = currentModel.getTranspose;
    
        let normalizedModel = [];
        currentModel.matrix.forEach(vect => {
            let zDepth = vect.getComp(2) - zoom;
            let newVec = new Vector([vect.getComp(0), vect.getComp(1), zDepth]);
            
            if (Math.abs(zDepth) > 0.0001) {
                newVec = newVec.scalarMult(1 / zDepth);
            } else {
                newVec = newVec.scalarMult(0);
            }
            normalizedModel.push(newVec);
        });


        let normalizedParts = []
        nPart.getTranspose.matrix.forEach(vect => {
            let zDepth = vect.getComp(2) - zoom;
            let newVec = new Vector([vect.getComp(0), vect.getComp(1), zDepth]);
            
            if (Math.abs(zDepth) > 0.0001) {
                newVec = newVec.scalarMult(1 / zDepth);
            } else {
                newVec = newVec.scalarMult(0);
            }
            normalizedParts.push(newVec);
        });

        // let normalizedModel2 = [];
        // currentModel.matrix.forEach(vect => {
        //     let zDepth = vect.getComp(2) - zoom;
        //     let newVec = new Vector([vect.getComp(0), vect.getComp(1), zDepth+75]);
            
        //     if (Math.abs(zDepth) > 0.0001) {
        //         newVec = newVec.scalarMult(1 / zDepth);
        //     } else {
        //         newVec = newVec.scalarMult(0);
        //     }
        //     newVec.setComp(1, 0.01);
        //     normalizedModel2.push(newVec);
        // });

        
        let projected = projMat.rMultiply(new Matrix(normalizedModel).getTranspose);
        let partProj = projMat.rMultiply(new Matrix(normalizedParts).getTranspose)
        projected = projected.getTranspose;
        partProj = partProj.getTranspose;
        ctx.shadowBlur = 25;
        ctx.shadowColor = "orange";
        draw(projected.matrix);
        draw(partProj.matrix);
        drawPointLines(nPart.getTranspose.matrix, partProj.matrix);
        //draw(shadow.matrix);
        ctx.shadowBlur = 0;
        //ctx.fillStyle = "grey";
        //ctx.strokeStyle = "orange";
        ctx.fillStyle = "black";
        wireGen(projected.matrix, currentModel.matrix);
        ctx.globalCompositeOperation = "source-over"; 
        wallGen(projected.matrix, currentModel.matrix);
        ctx.globalCompositeOperation = "lighter"; 
        wallGen(projected.matrix, currentModel.matrix, true);
        ctx.globalCompositeOperation = "source-over";
        particles.updateAcceleration();
        particles.updateVelocity(dt);
        //particles.velocity = masterRotation.rMultiply(particles.velocity.getTranspose).getTranspose;
        particles.updatePosition(dt, canvas);
        if (isHoveringButton) {
            hoverIntensity += 0.1; 
        } else {
            hoverIntensity -= 0.1; 
        }
        hoverIntensity = clamp(hoverIntensity, 0, 1);
        location = drawScrollButton()
        //tAngles[0] += 0.01
        requestAnimationFrame(loop);
    }
    
    loop();
}