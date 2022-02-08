import React from 'react';
import { actions } from 'src/types/config';

const EditorLegend: React.FC = () => (
  <div>
    <h3>Legend</h3>
    <h4>Allow actions of buttons:</h4>
    {Object.keys(actions).map((action) => (
      <div key={action}>{action}</div>
    ))}

  </div>
);

export default EditorLegend;
