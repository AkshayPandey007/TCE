import React from 'react'
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export const SideBar = () => {
  return (
    <div >
       <SimpleTreeView>
        <TreeItem itemId="grid" label="Space X Private">
          <TreeItem itemId="grid-community" label="All Launches" />
          <TreeItem itemId="grid-pro" label="Landing Pads" />
          <TreeItem itemId="grid-premium" label="Missions" />
        </TreeItem>
        <TreeItem itemId="pickers" label="Space X Public">
        <TreeItem itemId="pickers-nested" label="History">
          <TreeItem itemId="pickers-history" label="Rocket History" />
          <TreeItem itemId="pickers-missions" label="Missions History" />
          </TreeItem>
          <TreeItem itemId="pickers-pro" label="Rockets" />
        </TreeItem>
      </SimpleTreeView>
    </div>
  )
}
