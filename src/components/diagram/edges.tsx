import { MarkerType } from '@xyflow/react';

const initialEdges = [
  {
    id: '1-2', source: '1', target: '2', label: '', type: 'smoothstep', markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
      animated: true,
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '3-4', source: '3', target: '4', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '5-6', source: '5', target: '6', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '6-Sensors', source: '6', target: 'Sensors', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '2-Sensors', source: '2', target: 'Sensors', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '4-Sensors', source: '4', target: 'Sensors', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '6-Camera', source: '6', target: 'Camera', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '2-Camera', source: '2', target: 'Camera', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '4-Camera', source: '4', target: 'Camera', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Sensors-StatusData', source: 'Sensors', target: 'StatusData', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Camera-TrashData', source: 'Camera', target: 'TrashData', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'StatusData-StoreData', source: 'StatusData', target: 'StoreData', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },

  {
    id: 'POST-LambdaInsert', source: 'POST', target: 'LambdaInsert', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'GET-1-LambdaRetrieval', source: 'GET-1', target: 'LambdaRetrieval', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'LambdaInsert-DB', source: 'LambdaInsert', target: 'DB', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'LambdaRetrieval-DB', source: 'LambdaRetrieval', target: 'DB', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Waste-WebApp', source: '8', target: 'WebApp', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Students-MobileApp', source: '9', target: 'MobileApp', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'WebApp-Firebase', source: 'WebApp', target: 'Firebase', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'MobileApp-Firebase', source: 'MobileApp', target: 'Firebase', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Classify-2-Inference', source: 'Classify-2', target: 'Inference', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Train-Inference', source: 'Train', target: 'Inference', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Inference-Segmented', source: 'Inference', target: 'Segmented', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Segmented-Save', source: 'Segmented', target: 'Save', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Save-Train', source: 'Save', target: 'Train', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Save-Edit', source: 'Save', target: 'Edit', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Edit-Classify', source: 'Edit', target: 'Classify', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: '7-POST', source: '7', target: 'POST', label: '', type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  // For cross subteam edges
  {
    id: 'StoreData-POST', source: 'StoreData', target: 'POST', label: '', type: 'simplebezier',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'TrashData-Classify-2', source: 'TrashData', target: 'Classify-2', label: '', type: 'simplebezier',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'Classify-ClassifiedTrash', source: 'Classify', target: 'ClassifiedTrash', label: '', type: 'simplebezier',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'GET-2-Firebase', source: 'Firebase', target: 'GET-2', label: '', type: 'simplebezier',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
  {
    id: 'MobileApp-Classify', source: 'MobileApp', target: 'Classify', label: '', type: 'simplebezier',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#3a414a',
    },
    style: {
      strokeWidth: 4,
      stroke: '#3a414a',
    },
  },
];

export default initialEdges;