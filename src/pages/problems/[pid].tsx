import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import React from "react";

type ProblemPageProps = {
  problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  console.log(problem);
  return (
    <div className="">
      <Topbar problemPage />
      <Workspace problem={problem} />
    </div>
  );
};

export default ProblemPage;

// fetch the local data
// SSG
// getStaticPaths => creates the dynamic routes

export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps => fetches the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid];

  if (!problem) {
    return {
      notFound: true,
    };
  }

  // Next line of code fixes this error:
  //   Error: Error serializing `.problem.handlerFunction` returned from    `getStaticProps` in "/problems/[pid]".
  // Reason: `function` cannot be serialized as JSON. Please only return JSON serializable data types.
  problem.handlerFunction = problem.handlerFunction.toString();
  return {
    props: {
      problem,
    },
  };
}
