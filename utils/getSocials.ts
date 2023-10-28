import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { Social } from "../typings";

const query = groq`*[_type == "social"]`;

export default async function getSocials() {
  const socials: Social[] = await client.fetch(query);

  return socials;
}
