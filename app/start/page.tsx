import { Suspense } from "react";
import { Funnel } from "./Funnel";

export const metadata = { title: "Start a magazine · Big Deal" };

export default function StartPage() {
  return (
    <Suspense>
      <Funnel />
    </Suspense>
  );
}
