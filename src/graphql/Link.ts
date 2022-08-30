import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Link = objectType({
    name:"Link",
    definition(t) {
        t.nonNull.int("id")
        t.nonNull.string("description")
        t.nonNull.string("url")
    },
})

let links: NexusGenObjects["Link"][] = [
    {
        id: 1,
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
    {
        id: 2,
        url: "graphql.org",
        description: "GraphQL official website",
    },
    {
        id: 3,
        url: "teste.com",
        description: "teste description",
    },
]

export const LinkQuery = extendType({
    type:"Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {
            type:"Link",
            resolve(parent, args, context, info) {
                return links
            }
        })
    },
})