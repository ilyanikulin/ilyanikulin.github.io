import React, { useContext } from 'react';

import { ConfigContext } from 'src/contexts/config';
import JsonEditor, { JsonEditorProps } from 'src/components/json-editor';

const EditorPage: React.FC = () => {
  const [config, setConfig] = useContext(ConfigContext);

  return (
    <JsonEditor
      value={config || []}
      onChange={setConfig as JsonEditorProps['onChange']}
    />
  );
};

export default EditorPage;
