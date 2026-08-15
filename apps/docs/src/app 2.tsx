import { useState } from "react";
import { Button } from "@glitchednexus/pookie";

export function App() {
  const [isSaving, setIsSaving] = useState(false);

  async function handleSave() {
    setIsSaving(true);
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setIsSaving(false);
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">@glitchednexus/pookie</p>
        <h1>Small components, carefully made.</h1>
        <p className="lede">
          This local playground consumes the same package exports that npm users
          receive.
        </p>
      </header>

      <section aria-labelledby="button-title" className="component-card">
        <div>
          <p className="eyebrow">Component 01</p>
          <h2 id="button-title">Button</h2>
          <p>
            Accessible defaults, ref forwarding, loading feedback, and themeable
            CSS.
          </p>
        </div>

        <div className="component-preview">
          <Button
            isLoading={isSaving}
            loadingText="Saving"
            onClick={handleSave}
          >
            Save changes
          </Button>
          <Button variant="secondary">Preview</Button>
          <Button size="small" variant="secondary">
            Small action
          </Button>
        </div>
      </section>
    </main>
  );
}
