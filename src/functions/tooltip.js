import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import '../styles/style.scss';

function ToolTip({place = "top", text = "", children}) {
    return (<Tooltip title={text} placement={place} arrow>{children}</Tooltip>);
}

export default ToolTip;