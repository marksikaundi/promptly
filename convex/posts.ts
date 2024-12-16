import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPost = mutation({
  args: { 
    userId: v.id("users"), 
    content: v.string(), 
    scheduledTime: v.number(),
    platforms: v.array(v.string())
  },
  handler: async (ctx, args) => {
    const postId = await ctx.db.insert("posts", { ...args, isPosted: false });
    return postId;
  },
});

export const getUserPosts = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("posts")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .collect();
  },
});
