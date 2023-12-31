const pageInfo = {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      optioms: {
        hotspot: true,
      },
    },
    {
      name: "backgroundInformatio",
      title: "BackgroundInformation",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
        name:"email",
        title:"Email",
        type:"string"
    },
    {
        name:"phoneNumber",
        title:"PhoneNumber",
        type:"string"
    },
    {
        name:"address",
        title:"Address",
        type:"string"
    },
    {
        name:"socials",
        title:"Socials",
        type:"array",
        of:[{type:"reference", to : {type: "social"}}],
    }
  ],
};

export default pageInfo