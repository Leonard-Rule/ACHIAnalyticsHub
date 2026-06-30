**Input** — text field with label, hint, and error state. Teal focus ring. Set `multiline` for a textarea.

```jsx
<Input label="Email" type="email" required placeholder="you@example.com" hint="We'll send a weekly roundup." />
<Input label="Message" multiline rows={4} />
<Input label="ZIP" error="Enter a valid Arkansas ZIP code." />
```
