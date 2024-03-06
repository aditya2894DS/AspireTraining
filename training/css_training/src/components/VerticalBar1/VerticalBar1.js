import React from 'react';

import VerticalBar1ToolTip from './VerticalBar1ToolTip';
import HomeIcon from '../../icons/home-icon.png';

import '../../styles/VerticalBar1.css';
import '../../styles/VerticalBar1ToolTipStyle.css';

export default function VerticalBar1(){
    return (
      <>
        <section class="vert-bar" id="vert-bar-1-section">
          <div class="vertbar-container" id="vertical-bar-1">
            <div class="vertbar-section top-section">
              <VerticalBar1ToolTip icon={HomeIcon} tooltiptext="Dashboard" />
              <VerticalBar1ToolTip icon={HomeIcon} tooltiptext="Images" />
              <VerticalBar1ToolTip icon={HomeIcon} tooltiptext="Files" />
              <VerticalBar1ToolTip icon={HomeIcon} tooltiptext="Games" />
            </div>
            <div class="vertbar-section bottom-section">
            <VerticalBar1ToolTip icon={HomeIcon} tooltiptext="Notification" />
            <VerticalBar1ToolTip icon={HomeIcon} tooltiptext="Setting" />
            <VerticalBar1ToolTip icon={HomeIcon} tooltiptext="User profile" />
            </div>
          </div>
        </section>
      </>
    );
}