import React, { useState } from 'react';
import { Config } from 'src/types/config';
import { CONFIG_EXAMPLE } from 'src/contexts/config-example';

type ConfigContextType = [Config, (cfg: Config) => void];

export const ConfigContext = React.createContext<ConfigContextType>([CONFIG_EXAMPLE, () => {}]);

const ConfigProvider: React.FC = ({ children }) => {
  const cfgState = useState<Config>(CONFIG_EXAMPLE);

  return (
    <ConfigContext.Provider value={cfgState}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
