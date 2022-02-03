import React, { useContext } from 'react';

import { JsonContext } from '../../contexts/json';
import JsonEditor, { JsonEditorProps } from '../../components/json-editor';

const EditorPage: React.FC = () => {
  const [config, setConfig] = useContext(JsonContext);

  return (
    <JsonEditor
      value={config || []}
      onChange={setConfig as JsonEditorProps['onChange']}
    />
  );
};

export default EditorPage;
