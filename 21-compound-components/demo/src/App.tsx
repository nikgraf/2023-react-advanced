import TabSwitcher, { Tab, TabPanel } from "./Tabs";

function App() {
  return (
    <div className="App">
      <TabSwitcher initialId="home">
        <div>Logo</div>
        <div style={{ display: "flex" }}>
          <Tab id="home">Home</Tab>
          <Tab id="about">About</Tab>
          <Tab id="pricing">Pricing</Tab>
        </div>

        <main style={{ borderTop: "1px solid black" }}>
          <TabPanel id="home">
            <p>Tagline</p>
            <div>This is home</div>
          </TabPanel>
          <TabPanel id="about">
            <div>This is about</div>
          </TabPanel>
          <TabPanel id="pricing">
            <div>This is pricing</div>
          </TabPanel>
        </main>
      </TabSwitcher>
    </div>
  );
}

export default App;
