const timescaleDB = '../assets/nodes/timescaledb.svg';
const firebase = '../assets/nodes/firebase.svg';
import { Position } from "@xyflow/react";

const initialNodes = [
    {
        id: 'Sensors',
        data: { label: 'Sensors' },
        position: { x: 275, y: 0 },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'Camera',
        data: { label: 'ESP-32 Camera' },
        position: { x: 275, y: 125 },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'StatusData',
        data: { label: 'Bin Status Data' },
        position: { x: 475, y: 0 },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'TrashData',
        data: { label: 'Trash Image Data' },
        position: { x: 600, y: 100 },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'StoreData',
        data: { label: 'Store Data' },
        position: { x: 625, y: -75 },
        targetPosition: Position.Bottom,
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'ClassifiedTrash',
        data: { label: 'Classified Trash' },
        position: { x: 600, y: 200 },
        targetPosition: Position.Right,
        type: 'output',
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: '1',
        data: { label: 'Trash Thrown Into Bins' },
        style: { border: '4px solid #3a414a', fontSize: '20px' },
        sourcePosition: Position.Right,
        position: { x: -200, y: -100 },
        type: 'input',
        draggable: false,
    },
    {
        id: '2',
        data: { label: 'Landfill' },
        position: { x: 0, y: -40 },
        style: { border: '4px solid #82755b', fontSize: '20px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
    },
    {
        id: '3',
        data: { label: 'Trash Thrown Into Bins' },
        style: { border: '4px solid #3a414a', fontSize: '20px' },
        sourcePosition: Position.Right,
        type: 'input',
        position: { x: -200, y: 50 },
        draggable: false,
    },
    {
        id: '4',
        data: { label: 'Recycle' },
        position: { x: 0, y: 80 },
        style: { border: '4px solid #1071e5', fontSize: '20px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
    },
    {
        id: '5',
        data: { label: 'Trash Thrown Into Bins' },
        style: { border: '4px solid #3a414a', fontSize: '20px' },
        sourcePosition: Position.Right,
        type: 'input',
        position: { x: -200, y: 191 },
        draggable: false,
    },
    {
        id: '6',
        data: { label: 'Compost' },
        position: { x: 0, y: 200 },
        style: { border: '4px solid #008a0e', fontSize: '20px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
    },
    {
        id: 'Embedded+Hardware',
        data: { label: 'Embedded and Hardware', backgroundColor: '#e8dac4' },
        position: { x: 200, y: -100 },
        style: { width: 600, height: 400, border: '4px dashed #fc9432', borderRadius: '20px' },
        draggable: false,
        type: 'source',
    },
    {
        id: 'POST',
        data: { label: 'POST Endpoints' },
        position: { x: 1050, y: 0 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'GET-1',
        data: { label: 'GET Endpoints' },
        position: { x: 1050, y: 150 },
        type: 'input',
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'GET-2',
        data: { label: 'GET Endpoints' },
        position: { x: 1050, y: 150 },
        type: 'output',
        targetPosition: Position.Left,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'LambdaInsert',
        data: { label: 'Lambda Insert Functions' },
        position: { x: 1250, y: -50 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'LambdaRetrieval',
        data: { label: 'Lambda Retrieval Functions' },
        position: { x: 1250, y: 150 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'DB',
        data: { svg: timescaleDB },
        position: { x: 1450, y: 50 },
        targetPosition: Position.Bottom,
        draggable: false,
        type: 'custominput',
        sourcePosition: Position.Left,
    },
    {
        id: 'API',
        data: { label: 'API', backgroundColor: '#81a685' },
        position: { x: 1000, y: -100 },
        style: { width: 600, height: 400, border: '4px dashed #008a0e', borderRadius: '20px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        type: 'source',
    },
    {
        id: '8',
        data: { label: 'UCI Waste Management' },
        position: { x: -50, y: 500 },
        type: 'input',
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px', padding: '2px' },
    },
    {
        id: '9',
        data: { label: 'Students' },
        position: { x: -50, y: 650 },
        type: 'input',
        sourcePosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'WebApp',
        data: { label: 'ZotZero Web App' },
        position: { x: 325, y: 450 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'MobileApp',
        data: { label: 'ZotZero Mobile App' },
        position: { x: 325, y: 675 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'Firebase',
        data: { svg: firebase },
        position: { x: 600, y: 550 },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        draggable: false,
        type: 'custominput',
    },
    {
        id: 'Web and Mobile',
        data: { label: 'Web and Mobile', backgroundColor: '#e9d6f0' },
        position: { x: 200, y: 400 },
        style: { width: 600, height: 400, border: '4px dashed #ba23f6', borderRadius: '24px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        type: 'source',
    },
    {
        id: 'Classify',
        data: { label: 'POST Endpoint /classify' },
        position: { x: 1050, y: 425 },
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
        sourcePosition: Position.Left,
        targetPosition: Position.Bottom,
    },
    {
        id: 'Classify-2',
        data: { label: 'POST Endpoint /classify' },
        position: { x: 1050, y: 425 },
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
        targetPosition: Position.Top,
        sourcePosition: Position.Right,
    },
    {
        id: 'Inference',
        data: { label: 'Inference' },
        position: { x: 1250, y: 450 },
        sourcePosition: Position.Top,
        targetPosition: Position.Left,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'Train',
        data: { label: 'Train on New Images' },
        position: { x: 1150, y: 575 },
        sourcePosition: Position.Top,
        targetPosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'Save',
        data: { label: 'Save Image' },
        position: { x: 1425, y: 600 },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'Segmented',
        data: { label: 'Segmented Image' },
        position: { x: 1425, y: 450 },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'Edit',
        data: { label: 'Edit Image' },
        position: { x: 1250, y: 710 },
        sourcePosition: Position.Left,
        targetPosition: Position.Right,
        draggable: false,
        style: { border: '4px solid #3a414a', fontSize: '20px' },
    },
    {
        id: 'WasteRecognition',
        data: { label: 'Waste Recognition', backgroundColor: '#96bfee' },
        position: { x: 1000, y: 400 },
        style: { width: 600, height: 400, border: '4px dashed #1071e5', borderRadius: '20px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        type: 'source',
    },
];

export default initialNodes;