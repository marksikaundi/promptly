import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(),
  }),
  posts: defineTable({
    userId: v.id("users"),
    content: v.string(),
    scheduledTime: v.number(),
    isPosted: v.boolean(),
    platforms: v.array(v.string()), // New field for multiple platforms
  }),
});

