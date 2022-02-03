import React, {
  useEffect, useState,
} from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';

export type JsonEditorProps = {
  value: Record<string, any> | Record<string, any>[];
  onChange: (config: Record<string, any> | Record<string, any>[]) => void;
};

const INCORRECT_JSON = 'JSON is incorrect';

const JsonEditor: React.FC<JsonEditorProps> = ({
  value,
  onChange,
}) => {
  const [term, setTerm] = useState(JSON.stringify(value, null, '\t'));
  const [error, setError] = useState('');

  useEffect(() => {
    let json = {};
    try {
      json = JSON.parse(term);
      setError('');
    } catch (e) {
      setError(INCORRECT_JSON);
    }
    onChange(json);
  }, [term]);

  return (
    <div>
      <AceEditor
        placeholder="Placeholder Text"
        mode="json"
        name="blah2"
        onChange={setTerm}
        fontSize={14}
        showPrintMargin
        showGutter
        highlightActiveLine
        value={term}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <span>{error}</span>
    </div>

  );
};

export default JsonEditor;
