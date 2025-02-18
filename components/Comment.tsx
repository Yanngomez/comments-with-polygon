import * as React from "react";
import { Text, Heading, HStack, Stack } from "@chakra-ui/react";
import TimeAgo from "react-timeago";
import Avatar from "@davatar/react";
import Username from "./Username";
import { Comment } from "../hooks/useCommentsContract";

interface CommentProps {
  comment: Comment;
}

const Comment: React.FunctionComponent<CommentProps> = ({ comment }) => {
  return (
    <HStack spacing={3} alignItems="start">
      <Avatar size={48} address={comment.creator_address} />
      <Stack spacing={1} flex={1} bg="whiteAlpha.100" rounded="2xl" p={3}>
        <Heading color="whiteAlpha.900" fontSize="lg">
