import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    imageUrl: v.optional(v.string()),
    plan: v.union(v.literal("free"), v.literal("pro")),

    // usage tracking for plan limits
    projectsUsed: v.number(), // current project count
    exportThisMonth: v.number(), // number of exports this month

    createdAt: v.number(), // timestamp of user creation
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"]),

  projects: defineTable({
    // basic project information
    title: v.string(),
    userId: v.id("users"),

    // canvas dimensions and state
    canvasState: v.any(), //fabric.js canvas json (objects, layers, etc.)
    width: v.number(), // in pixels
    height: v.number(), // in pixels

    // image pipeline - tracks image transformations
    originalImageUrl: v.optional(v.string()), // original uploaded image URL
    currentImageUrl: v.optional(v.string()), // current image URL after transformations
    thumbnailUrl: v.optional(v.string()), // imagekit URL for optimized delivery

    // imagekit transformation state
    activeTransformation: v.optional(v.string()), // current imagekitURL params

    // AI features state - tracks what AI processing has been applied
    backgroundRemoved: v.optional(v.boolean()), // if background removal was applied

    // organization and sharing
    folderId: v.optional(v.id("projects")), // optional folder for organization

    // timestamps
    createdAt: v.number(), // timestamp of project creation
    updatedAt: v.number(), // timestamp of last update
  })
    .index("by_user", ["userId"])
    .index("by_user_updated", ["userId", "updatedAt"])
    .index("by_folder", ["folderId"]),

  folders: defineTable({
    name: v.string(), // folder name
    userId: v.id("users"), // owner of the folder
    createdAt: v.number(), // timestamp of folder creation
  }),
});

// plan limits example
// - Free plan: 3 projects, 5 exports per month, basic features
// - Pro plan: 100 projects, unlimited exports, advanced AI features
