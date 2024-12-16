import RunFHE from "../components/runfhe";

export default function RunFHEPage() {
  return (
    <main className="min-h-screen max-w-screen-lg m-auto">
      <SectionWrapper>
        <RunFHE />
      </SectionWrapper>
    </main>
  );
}

const SectionWrapper = ({ children = <></> }) => {
  return (
    <section className="section-padding section-margin">{children}</section>
  );
};
