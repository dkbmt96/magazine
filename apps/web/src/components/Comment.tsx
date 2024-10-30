import React from "react";
import Button from "./Button";
import { Comment as UserComment } from "@types";

const Comment: React.FC<UserComment> = ({ id, author, content, createdAt }) => {
  const { name, avatar } = author;
  return (
    <div className="mt-4">
      <div className="flex items-start gap-4">
        <div className="avatar">
          <img src={avatar} width={64} height={64} alt="avatar" />
        </div>
        <div className="flex flex-col">
          <div className="mt-2 text-gray-700">
            <span className="text-red-500">{name}</span>{" "}
            <span className="font-italic">{createdAt}</span>
          </div>
          <div className="my-2 text-gray-700">{content}</div>
          <div>
            <Button
              onClick={() => {
                return;
              }}
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
