import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();

const handleAuth = () => {
    const {userId} = auth();
    if(!userId) throw new Error("Unauthorized");
    return {userId};
}
 
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: '8MB', maxFileCount: 1}})
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])  
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({video: {maxFileCount: 1, maxFileSize: "512B"}})  
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;