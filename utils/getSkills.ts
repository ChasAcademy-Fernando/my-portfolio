import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { Technology } from "../typings";

const query = groq`*[_type == "skill"]`;

export default async function getSkills() {
  const skills: Technology[] = await client.fetch(query);

  return skills;
}
