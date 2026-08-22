import{t as e}from"./jsx-runtime-OQpaS_Dv.js";import{t}from"./image-CluzkVa6.js";var n=e();function r(){return(0,n.jsx)(t,{src:`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`,alt:`Sample image`,width:200,height:200,style:{objectFit:`cover`,borderRadius:8}})}var i=`import { Image } from "lingee-ui";

export default function BasicDemo() {
  return (
    <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      alt="Sample image"
      width={200}
      height={200}
      style={{ objectFit: "cover", borderRadius: 8 }}
    />
  );
}
`,a=[`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`,`https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop`,`https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop`];function o(){return(0,n.jsx)(t.PreviewGroup,{children:(0,n.jsx)(`div`,{style:{display:`flex`,gap:12},children:a.map((e,r)=>(0,n.jsx)(t,{src:e,alt:`Image ${r+1}`,width:150,height:100,style:{objectFit:`cover`,borderRadius:8,cursor:`pointer`}},e))})})}var s=`import { Image } from "lingee-ui";

const images = [
  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
];

export default function GroupDemo() {
  return (
    <Image.PreviewGroup>
      <div style={{ display: "flex", gap: 12 }}>
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={\`Image \${i + 1}\`}
            width={150}
            height={100}
            style={{ objectFit: "cover", borderRadius: 8, cursor: "pointer" }}
          />
        ))}
      </div>
    </Image.PreviewGroup>
  );
}
`;export{r as i,o as n,i as r,s as t};