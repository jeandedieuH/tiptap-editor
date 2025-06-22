import { RichTextEditor } from "@/components/richtext-editor/tiptap-editor/tiptap-editor";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <RichTextEditor
        initialContent={`
          <h2>Hi there,</h2>
          <p>this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait, there’s more …</p>
          <ul>
            <li>
              <p>That’s a bullet list with one …</p>
            </li>
            <li>
              <p>… or two list items.</p>
            </li>
          </ul>
          <p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:</p>
          <pre><code class=\"language-javascript\">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log(\"FizzBuzz\");
  else if (i % 3 == 0)
    console.log(\"Fizz\");
  else if (i % 5 == 0)
    console.log(\"Buzz\");
  else
    console.log(i);
}</code></pre>
          <p>I know, I know, this is impressive. It’s okay to celebrate with a GIF:</p>
          <img src=\"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDNvMXd2d3hod3d6dHM3NnN2cWJ1d2g0c3h2eHl6b3p4d2s0eG16dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1x9vch5oEni2A/giphy.gif\" />
          <p>And now something completely different: a task list.</p>
          <ul data-type=\"taskList\">
            <li data-type=\"taskItem\" data-checked=\"true\">
              <label><input type=\"checkbox\" checked><span></span></label>
              <div><p>A list item</p></div>
            </li>
            <li data-type=\"taskItem\" data-checked=\"false\">
              <label><input type=\"checkbox\"><span></span></label>
              <div><p>And another one</p></div>
            </li>
          </ul>
          `}
      />
      </main>
    </div>
  );
}
