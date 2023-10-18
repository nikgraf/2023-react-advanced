import { createContext, useContext, useState } from "react";

type TabsContextType = {
  activeTabId: string;
  setActiveTabId: (index: string) => void;
};

const TabsContext = createContext<TabsContextType>({
  activeTabId: "",
  setActiveTabId: () => undefined,
});

type TabProps = {
  id: string;
  children: React.ReactNode;
};

const Tab: React.FC<TabProps> = ({ children, id }) => {
  const { setActiveTabId } = useContext(TabsContext);
  return (
    <div
      onClick={() => {
        setActiveTabId(id);
      }}
    >
      {children}
    </div>
  );
};

type TabPanelProps = {
  id: string;
  children: React.ReactNode;
};

const TabPanel: React.FC<TabPanelProps> = ({ id, children }) => {
  const { activeTabId } = useContext(TabsContext);
  return <div>{activeTabId === id ? children : null}</div>;
};

type TabSwitcherProps = {
  initialId: string;
  children: React.ReactNode;
};

const TabSwitcher: React.FC<TabSwitcherProps> = ({ initialId, children }) => {
  const [activeTabId, setActiveTabId] = useState(initialId);
  return (
    <TabsContext.Provider
      value={{
        activeTabId,
        setActiveTabId,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default TabSwitcher;
export { Tab, TabPanel };
