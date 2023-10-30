import MainComponent from "../components/MainComponent";
// import dynamic from "next/dynamic";

// const NoSSR = dynamic(() => import("../components/MainComponent"), {
//   ssr: false,
// });

export default function Page(): JSX.Element {
  return (
    <div>
      <MainComponent />
    </div>
  );
}
