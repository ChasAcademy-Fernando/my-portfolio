import type { PageInfo } from "../typings";

export const fetchPageInfo = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`).catch(e => console.error(e));
    if(res) {
        const data = await res.json();
        const pageInfo: PageInfo = data.pageInfo;
        return pageInfo
    }

    
}