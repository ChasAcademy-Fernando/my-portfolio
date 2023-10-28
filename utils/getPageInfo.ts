import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { PageInfo } from "../typings";

const query = groq`*[_type == "pageInfo"][0]`;

export default async function getPageInfo() {
  const pageInfo: PageInfo = await client.fetch(query);

  return pageInfo;
}
