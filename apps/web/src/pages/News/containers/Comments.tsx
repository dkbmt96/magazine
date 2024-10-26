import Button from "@components/Button";
import Comment from "@components/Comment";
import React from "react";

const comments = [
  {
    id: "12312132",
    userName: "John Due",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
    updateAt: "01 Jan 2034",
    comment:
      "The integration of artificial intelligence (AI) into daily life is transforming various industries.",
  },
  {
    id: "12312132",
    userName: "John Due",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
    updateAt: "01 Jan 2034",
    comment:
      "The integration of artificial intelligence (AI) into daily life is transforming various industries.",
  },
  {
    id: "12312132",
    userName: "John Due",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
    updateAt: "01 Jan 2034",
    comment:
      "The integration of artificial intelligence (AI) into daily life is transforming various industries.",
    children: [
      {
        id: "12312132",
        userName: "John Due",
        avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
        updateAt: "01 Jan 2034",
        comment:
          "The integration of artificial intelligence (AI) into daily life is transforming various industries.",
      },
      {
        id: "12312132",
        userName: "John Due",
        avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
        updateAt: "01 Jan 2034",
        comment:
          "The integration of artificial intelligence (AI) into daily life is transforming various industries.",
      },
    ],
  },
];

const Comments: React.FC = () => {
  return (
    <div className="my-4">
      <div className="bg-white p-4">
        <div className="w-full my-4 text-wrap text-3xl text-gray-600 font-bold">
          {comments.length} Comments
        </div>
        {comments.map((c) => {
          if (c.children?.length) {
            let children = c.children;
            return (
              <div>
                <Comment {...c} />
                <div className="ml-16">
                  {children.map((child) => (
                    <Comment {...child} />
                  ))}
                </div>
              </div>
            );
          }
          return <Comment {...c} />;
        })}
      </div>

      <div className="bg-white mt-4 p-4">
        <div className="w-full my-4 text-wrap text-3xl text-gray-600 font-bold">
          Leave a comment
        </div>
        <form>
          <div>
            <label htmlFor="name">Name *</label>
            <input className='border w-full my-2' name="name"></input>
          </div>
          <div>
            <label htmlFor="email">Email *</label>
            <input className='border w-full my-2'  name="email"></input>
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input className='border w-full my-2'  name="website"></input>
          </div>
          <div>
            <label htmlFor="message">Message *</label>
            <textarea rows={4} className='border w-full my-2'  name="message"></textarea>
          </div>
        </form>
        <Button cls="bg-red-700 text-white px-4 py-2" onClick={() => {}}>Leave a comment</Button>
      </div>
    </div>
  );
};

export default Comments;
