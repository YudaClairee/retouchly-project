"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function Editor() {
  const { projectId } = useParams();

  return <div>page: {projectId}</div>;
}
