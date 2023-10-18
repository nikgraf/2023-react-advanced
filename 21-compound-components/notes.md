## Compound Components

Compound components are components that can be used together to build UI elements. They often implicitly share state and therefor simplify the usage.

## Examples

```jsx
<select>
  <option value="a">A</option>
  <option value="b">B</option>
</select>
```

Tabs in Reach UI: https://reach.tech/tabs/

```tsx
function Example() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
```

Full control via `Tabs` e.g.

```tsx
<Tabs index={tabIndex} onChange={handleTabsChange}>
```

## More examples

https://headlessui.com/react/menu
https://www.radix-ui.com/docs/primitives/components/dropdown-menu

## How it works

How does it work under the hood? Often a context is used to share state between the components.
