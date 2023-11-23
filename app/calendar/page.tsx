import TopComponent from "@/components/TopComponent";

export default function Page(): JSX.Element {
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      <TopComponent />
      {/* </Suspense> */}
    </>
  );
}
