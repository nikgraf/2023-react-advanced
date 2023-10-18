## Use useId to fix the Checkbox

Currently the label is not clickable. Wrapping the checkbox inside the label is often used, but by using `useId` it is possible to put them side by side.

Fix the `Checkbox` component to make sure the label is clickable. The HTML should look something like this:

```html
<label htmlFor=":r1:">Do you like React?</label>
<input id=":r1:" type="checkbox" name="react" />
```
