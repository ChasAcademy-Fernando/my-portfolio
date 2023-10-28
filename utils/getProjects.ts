import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { Project } from "../typings";

const query = groq`*[_type == "project"]{
    ...,technologies[]->
}`;

export default async function getProjects() {
  const projects: Project[] = await client.fetch(query);

  return projects;
}
