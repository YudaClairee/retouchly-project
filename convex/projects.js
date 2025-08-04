import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

export const create = mutation({
  args: {
    title: v.string(),
    originalImageUrl: v.optional(v.string()),
    currentImageUrl: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),
    width: v.number(),
    height: v.number(),
    canvasState: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);

    if (user.plan === "free") {
      // Implement your logic for free users here
      const projectCount = await ctx.db
        .query("projects")
        .withIndex("by_user", (q) => q.eq("userId", user._id))
        .collect();

      if (projectCount.length >= 3) {
        throw new Error("Free users can only have up to 3 projects.");
      }
    }

    await ctx.db.insert("projects", {
      userId: user._id,
      title: args.title,
      originalImageUrl: args.originalImageUrl,
      currentImageUrl: args.currentImageUrl,
      thumbnailUrl: args.thumbnailUrl,
      width: args.width,
      height: args.height,
      canvasState: args.canvasState,
      createdAt: Date.now(),
    });

    // Increment the user's project count
    await ctx.db.patch(user._id, {
      projectsUsed: user.projectsUsed + 1,
    });
  },
});

export const getUserProjects = query({
  handler: async (ctx) => {
    // Check if user is authenticated first
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      // Return empty array or throw a more specific error
      return [];
      // Or throw new Error("User not authenticated");
    }

    const user = await ctx.runQuery(internal.users.getCurrentUser);
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();

    return projects;
  },
});

export const deleteProject = mutation({
  args: {
    projectId: v.id("projects"),
  },
  handler: async (ctx, args) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);
    const project = await ctx.db.get(args.projectId);

    if (!project || project.userId !== user._id) {
      throw new Error(
        "Project not found or you do not have permission to delete it."
      );
    }

    // Delete the project
    await ctx.db.delete(args.projectId);

    // Decrement the user's project count
    await ctx.db.patch(user._id, {
      projectsUsed: user.projectsUsed - 1,
    });
  },
});
