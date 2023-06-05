import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import React from "react";

type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () => {
  return (
    <div className="">
      <Topbar problemPage />
      <Workspace />
    </div>
  );
};

export default ProblemPage;
