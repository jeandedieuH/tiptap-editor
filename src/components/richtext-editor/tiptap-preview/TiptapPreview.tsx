import React from "react";
import { generateHTML } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import { Highlight } from "@tiptap/extension-highlight";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Underline } from "@tiptap/extension-underline";
// Import your custom extensions if needed
import { Link } from "@/components/richtext-editor/tiptap-extension/link-extension";
// ...

/**
 * TiptapPreview Component
 *
 * Renders rich text content (HTML string or Tiptap JSON) as read-only preview.
 *
 * @param content - HTML string or Tiptap JSON to render (sanitize HTML before rendering)
 *
 * Usage:
 * <TiptapPreview content={htmlFromDatabaseOrJson} />
 */
export interface TiptapPreviewProps {
  /**
   * Content to render: HTML string or Tiptap JSON (Node or Content).
   */
  content: string | Record<string, any>;
  /**
   * Optional additional className for styling.
   */
  className?: string;
}

export const TiptapPreview: React.FC<TiptapPreviewProps> = ({
  content,
  className,
}) => {
  // NOTE: In production, always sanitize HTML to prevent XSS. Use a library like DOMPurify.
  let html = "";

  if (typeof content === "string") {
    html = content;
  } else if (typeof content === "object" && content !== null) {
    // Generate HTML from Tiptap JSON using extensions matching your editor
    html = generateHTML(content, [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      // Add your custom extensions here if needed
      Link,
      // ...
    ]);
  }

  return (
    <div
      className={`prose prose-neutral max-w-none dark:prose-invert ${
        className ?? ""
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
      aria-label="Rich text preview"
    />
  );
};
