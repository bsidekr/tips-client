// import Modeling from "./components/modeling";
import Title from "./components/title";
import Evaluation from "./components/evaluation";
// import Results from "./components/results";
import Overview from "./components/overview";

export default async function OverviewPage() {
  return (
    <main className="min-h-screen max-w-screen-lg m-auto">
      <SectionWrapper>
        <Title />
      </SectionWrapper>
      <SectionWrapper>
        <Overview />
      </SectionWrapper>
    </main>
  );
}

const SectionWrapper = ({ children = <></> }) => {
  return (
    <section className="section-padding section-margin">{children}</section>
  );
};
