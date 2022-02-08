import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ConfigContext } from 'src/contexts/config';
import JsonEditor, { JsonEditorProps } from 'src/components/json-editor';
import Button from 'src/components/common/button';
import { ROUTE } from 'src/constans/routes';
import EditorLegend from 'src/pages/Editor/legend';

import './index.scss';

const EditorPage: React.FC = () => {
  const history = useHistory();
  const [config, setConfig] = useContext(ConfigContext);

  return (
    <div className="editor">
      <div className="editor__col">
        <JsonEditor
          value={config || []}
          onChange={setConfig as JsonEditorProps['onChange']}
        />
        <Button label="Apply" onClick={() => history.push(ROUTE.FORM)} />
      </div>
      <div className="editor__col editor__col--legend">
        <EditorLegend />
      </div>
    </div>
  );
};

export default EditorPage;
