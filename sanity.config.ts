import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";
import imageUrlBuilder from '@sanity/image-url'


const projectId ='43r6nlvl'
const dataset ='portfolio'
const apiVersion ="2023-10-25";

const config = defineConfig({
projectId:"43r6nlvl",
dataset:"portfolio",
title:"my personal website",
apiVersion:"2020-10-25",
basePath:"/admin",
plugins:[deskTool()],
schema:{types:schemas}
})

export default config

import { createClient } from "next-sanity"



export const client = createClient({
projectId,
dataset,
apiVersion,
useCdn:true,
})
const builder =imageUrlBuilder(client);
export const urlFor = (source:any) =>  builder.image(source)