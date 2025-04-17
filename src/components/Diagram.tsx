import { ReactFlow, Controls, Background, Position, useReactFlow, ReactFlowProvider, Handle } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState, useCallback } from 'react';
import ZoomNode from './diagram/ZoomNode'
import initialEdges from './diagram/edges';
import initialNodes from './diagram/nodes';

const nodeTypes = {
  source: ZoomNode,
  custominput: ({ data }: { data: any }) => (
    <div style={{ textAlign: 'center' }}>
      <img
        src={data.svg}
        alt="TimescaleDB"
        width="100"
        height="100"
        onError={() => console.error('SVG failed to load')}
      />
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  ),
  customoutput: ({ data }: { data: any }) => (
    <div style={{ textAlign: 'center' }}>
      <img
        src={data.svg}
        alt="TimescaleDB"
        width="100"
        height="100"
        onError={() => console.error('SVG failed to load')}
      />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  ),
  custom: ({ data }: { data: any }) => (
    <div style={{ textAlign: 'center' }}>
      <img
        src={data.svg}
        alt="TimescaleDB"
        width="100"
        height="100"
        onError={() => console.error('SVG failed to load')}
      />
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  ),
};


function Diagram() {
  const { setViewport, zoomIn, zoomOut, fitView } = useReactFlow();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);


  const handleZoomToSelectedNode = useCallback((nodeId: string | null) => {
    if (nodeId && nodeId !== selectedNodeId) {
      const selectedNode = nodes.find((node) => node.id === nodeId);

      const positions: Record<string, { x: number; y: number }> = {
        "Web and Mobile": { x: 600, y: -450 },
        "API": { x: -800, y: 175 },
        "Embedded+Hardware": { x: 600, y: 175 },
        "WasteRecognition": { x: -800, y: -450 },
      };

      if (selectedNode) {
        const { x, y } = positions[selectedNode.id] || { x: 0, y: 0 };

        const screenWidth = window.innerWidth;
        const scaleFactor = screenWidth / 1920;

        let scaledX = x * scaleFactor - screenWidth / (7 - scaleFactor ** 3);
        if (x < 0) {
          scaledX = x * scaleFactor - screenWidth / (6 - scaleFactor ** 8);
        }

        setViewport({
          x: scaledX,
          y: y,
          zoom: 1.2,
        }, { duration: 800 });
      }
    } else {
      setSelectedNodeId(null);
      fitView({ duration: 800 });
    }
  }, [nodes, selectedNodeId, setViewport, fitView]);

  return (
    <div className='h-[70vh] w-[80vw]' >
      <ReactFlow
        edges={edges}
        nodes={nodes}
        nodeTypes={nodeTypes}
        fitView={true}
        onNodeClick={(event, node) => {
          setSelectedNodeId(node.id);
          handleZoomToSelectedNode(node.id);
        }}
      >
        <Controls
          showInteractive={false}
        />
        <Background />
      </ReactFlow>
    </div>
  );
}
export default () => (
  <ReactFlowProvider>
    <Diagram />
  </ReactFlowProvider>
);