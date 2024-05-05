import LinkItem from "../LinkItem"

const links = [
    {label:"texto exibido no link", link: "https://google.com"},
    {label:"texto exibido no link", link: "https://google.com"},
    {label:"texto exibido no link", link: "https://google.com"}
]


export default function Listlinks (){
    return(
        <ul className="list-links">
            {links.map((item, index)=> (<LinkItem key={index} {...item}/>))}
       </ul>
    )
}
 //links.map(item => (<LinkItem label={item.label} link={item.link}/>))