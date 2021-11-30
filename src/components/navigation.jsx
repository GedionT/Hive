import React from 'react';
import { IconButton } from '@fluentui/react/lib/Button';
import { Layer, Text } from '@fluentui/react';

export default function NavigationBar(props) {
  return (
    <div>
      <Layer hostId={props.layerHostId}>
        <div style={{ backgroundColor: 'whitesmoke' }}>
          <div style={{ margin: '0 20px' }}>
            <Text>Hive.Et</Text>
            <div style={{ float: 'right' }}>
              <IconButton
                iconProps={{ iconName: 'ShoppingCart' }}
                title="Add"
                ariaLabel="Add"
                aria-hidden={false}
              />
            </div>
          </div>
        </div>
      </Layer>
    </div>
  );
}
