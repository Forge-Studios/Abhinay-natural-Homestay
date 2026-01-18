import BaseCard from "@/components/base/BaseCard";
import Button from "@/components/base/Button";

export default function ComponentsPage() {
  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24">
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6">
        <h1>Components Page</h1>
        <Button text="Visit Us" type="link" href="test.com" />
        <BaseCard className="p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Base Card Component</h2>
          <p>This is an example of the BaseCard component with default props.</p>
        </BaseCard>
      </div>
    </main>
  );
}
