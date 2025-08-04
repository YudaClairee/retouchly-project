"use client";

import React, { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BarLoader } from "react-spinners";
import NewProjectModal from "@/app/_components/newProjectModal";

export default function Dashboard() {
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  const { data: projects, isLoading } = useConvexQuery(
    api.projects.getUserProjects
  );

  return (
    <div className="bg-retouchly-background min-h-screen pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Your Projects
            </h1>
            <p className="text-white/70">
              Create and Manage your AI-powered image designs
            </p>
          </div>

          <Button
            onClick={() => setShowNewProjectModal(true)}
            className="bg-retouchly-primary hover:bg-retouchly-primary/90 text-white font-semibold mt-4"
          >
            <Plus className="h-5 w-5" />
            New Project
          </Button>
        </div>

        {isLoading ? (
          <BarLoader width="100%" color="white" />
        ) : projects && projects.length > 0 ? (
          <div>
            {projects.map((project) => (
              <div key={project._id}>{project.title}</div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 bg-retouchly-primary rounded-lg py-20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Create Your First Project
            </h3>

            <p className="text-white/70">
              Start by clicking the button above to create a new project.
            </p>
          </div>
        )}

        <NewProjectModal
          isOpen={showNewProjectModal}
          onClose={() => setShowNewProjectModal(false)}
        />
      </div>
    </div>
  );
}
