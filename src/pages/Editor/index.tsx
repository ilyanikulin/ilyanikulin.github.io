import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ConfigContext } from 'src/contexts/config';
import JsonEditor, { JsonEditorProps } from 'src/components/json-editor';
import Button from 'src/components/common/button';
import { ROUTE } from 'src/constans/routes';

const EditorPage: React.FC = () => {
  const history = useHistory();
  const [config, setConfig] = useContext(ConfigContext);

  return (
    <div>
      <JsonEditor
        value={config || []}
        onChange={setConfig as JsonEditorProps['onChange']}
      />
      <Button label="Apply" onClick={() => history.push(ROUTE.FORM)} />
    </div>
  );
};

export default EditorPage;
