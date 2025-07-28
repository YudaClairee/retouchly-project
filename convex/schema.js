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
});
