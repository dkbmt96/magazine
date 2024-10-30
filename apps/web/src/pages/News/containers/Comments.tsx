import Button from "@components/Button";
import Comment from "@components/Comment";
import { createComment, fetchNewsById } from "@redux/dataSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Comments: React.FC<{ id: string; comments: any[] }> = ({
  id,
  comments,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = React.useCallback(
    (event: any) => {
      event.preventDefault();

      let obj = {};
      // Here, you can perform an AJAX request or other actions
      const formData = new FormData(event.target);
      // Debugging: Log the FormData
      for (const [key, value] of formData.entries()) {
        console.log(key, value); // Check what's being collected
        obj = {
          ...obj,
          [key]: value,
        };
      }

      dispatch(
        createComment({ newsId: id, name: obj.name, content: obj.message })
      ).then(() => {
        window.location.reload();
      });
    },
    [id]
  );
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
                <Comment key={c.id} {...c} />
                <div className="ml-16">
                  {children.map((child) => (
                    <Comment key={child.id} {...child} />
                  ))}
                </div>
              </div>
            );
          }
          return <Comment key={c.id} {...c} />;
        })}
      </div>

      <div className="bg-white mt-4 p-4">
        <div className="w-full my-4 text-wrap text-3xl text-gray-600 font-bold">
          Leave a comment
        </div>
        <form id="myForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name *</label>
            <input
              className="border w-full my-2 p-2"
              id="name"
              name="name"
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email *</label>
            <input
              className="border w-full my-2 p-2"
              id="email"
              name="email"
            ></input>
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              className="border w-full my-2 p-2"
              id="website"
              name="website"
            ></input>
          </div>
          <div>
            <label htmlFor="message">Message *</label>
            <textarea
              rows={4}
              className="border w-full my-2 p-2"
              name="message"
              id="message"
            ></textarea>
          </div>
          <Button
            type="submit"
            cls="bg-red-700 text-white px-4 py-2"
            onClick={() => {}}
          >
            Leave a comment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
