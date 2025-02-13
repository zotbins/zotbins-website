import React, { memo } from 'react';
import { useStore } from '@xyflow/react';
 
const zoomSelector = (state) => state.transform[2];
export default memo(({ data, id }) => {
    const zoom = useStore(zoomSelector);

    const opacity = zoom > 1.1 ? 0 : 2;
    return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          opacity: opacity,
          padding: '10px',
          background: data.backgroundColor, 
          borderRadius: '5px',
        }}
      >
        <strong className='text-3xl font-light' style={{color: data.textColor}}>{data.label}</strong>
      </div>
    </>
  );
});

